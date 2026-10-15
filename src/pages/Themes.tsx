import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import { themes } from '../data/themes'
import { allDecks } from '../data/vocabulary'
import { readingTexts } from '../data/reading'
import { dialogues } from '../data/dialogues'
import { writingTasks } from '../data/writing'
import { useProgress } from '../lib/store'
import { masteredCount, seenCount } from '../lib/progress'
import { pickExercises } from '../lib/select'
import { getProgress } from '../lib/store'
import type { Exercise, ThemeLesson } from '../types'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { btnPrimary, btnSecondary, card, ListLink, Page, ProgressBar, Rich, Section, SpeakButton } from '../components/ui'
import { GrammarPointView } from './GrammarLesson'

function themeIds(t: ThemeLesson): string[] {
  return [...t.exercises.map((e) => e.id), ...t.deckIds.flatMap((id) => allDecks.find((d) => d.id === id)?.items.map((i) => i.id) ?? [])]
}

export function Themes() {
  const data = useProgress()
  return (
    <Page title="Thèmes & culture" subtitle="Des leçons autour des fêtes et de la culture anglophone : références, traditions, expressions et exercices.">
      <div className="space-y-3">
        {themes.map((t) => {
          const ids = themeIds(t)
          return (
            <Link key={t.id} to={`/themes/${t.id}`} className="block overflow-hidden rounded-3xl bg-linear-to-br from-[#2a1145] via-[#5b1d6b] to-[#e8590c] p-5 text-white shadow-lg shadow-orange-500/20 dark:shadow-none">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{t.icon}</span>
                <div className="flex-1">
                  <p className="text-xl font-extrabold">{t.title}</p>
                  <p className="text-xs text-white/80">{masteredCount(data, ids)}/{ids.length} acquis</p>
                </div>
                <span className="text-2xl font-bold">›</span>
              </div>
              <p className="mt-3 text-sm text-white/90">{t.summary}</p>
            </Link>
          )
        })}
      </div>
      <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">D'autres thèmes arriveront au fil de l'année (Thanksgiving, Noël…).</p>
    </Page>
  )
}

export function ThemeDetail() {
  const { themeId } = useParams()
  const theme = themes.find((t) => t.id === themeId)
  const data = useProgress()
  const [run, setRun] = useState<Exercise[] | null>(null)

  if (!theme) return <Page title="Thème introuvable" back={{ to: '/themes', label: 'Thèmes' }}>{null}</Page>
  if (run) return <ExerciseRunner items={run} title={theme.title} onExit={() => setRun(null)} />

  const exIds = theme.exercises.map((e) => e.id)
  const mastered = masteredCount(data, exIds)
  const seen = seenCount(data, exIds)
  const q = `theme=${theme.id}`
  const decks = theme.deckIds.map((id) => allDecks.find((d) => d.id === id)).filter((d) => d !== undefined)
  const reading = readingTexts.find((r) => r.id === theme.readingId)
  const dialogue = dialogues.find((d) => d.id === theme.dialogueId)
  const tasks = writingTasks.filter((w) => theme.writingTaskIds.includes(w.id))

  return (
    <Page title={`${theme.icon} ${theme.title}`} back={{ to: '/themes', label: 'Thèmes' }}>
      <div className="rounded-3xl bg-linear-to-br from-[#2a1145] via-[#5b1d6b] to-[#e8590c] p-5 text-white shadow-lg shadow-orange-500/20 dark:shadow-none">
        <p className="text-sm leading-relaxed text-white/95">{theme.intro}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-white/85">
          <span>{theme.exercises.length} exercices</span>
          <span>{seen > 0 ? `${mastered} acquis · ${seen} travaillés` : 'pas encore commencé'}</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-white/20">
          <div className="h-full rounded-full bg-white" style={{ width: `${exIds.length ? (mastered / exIds.length) * 100 : 0}%` }} />
        </div>
        <button onClick={() => setRun(pickExercises(theme.exercises, getProgress(), 12))} className="mt-4 w-full rounded-2xl bg-white py-3 font-bold text-[#5b1d6b] shadow-sm">
          S'entraîner (12 exercices)
        </button>
      </div>

      <Section title="Références & culture">
        {theme.culture.map((p) => <GrammarPointView key={p.title} point={p} />)}
      </Section>

      <Section title="Vocabulaire & expressions">
        {decks.map((d) => (
          <ListLink key={d.id} to={`/vocabulaire/${d.id}?${q}`} icon={d.icon} title={d.title} subtitle={`${d.items.length} cartes · ${masteredCount(data, d.items.map((i) => i.id))} acquises`} />
        ))}
      </Section>

      <Section title="Exercices">
        <div className={card}>
          <p className="text-sm text-gray-600 dark:text-gray-300">Culture, vocabulaire, expressions, superstitions (first conditional), récit (temps du passé) et déductions (must have / can't have).</p>
          <div className="mt-3"><ProgressBar value={mastered} max={exIds.length} tone="green" /></div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button onClick={() => setRun(pickExercises(theme.exercises, getProgress(), 12))} className={btnPrimary}>Série de 12</button>
            <button onClick={() => setRun(theme.exercises)} className={btnSecondary}>Tout ({theme.exercises.length})</button>
          </div>
        </div>
      </Section>

      {(reading || dialogue) && (
        <Section title="Lire & écouter">
          {reading && <ListLink to={`/pratique/lecture/${reading.id}?${q}`} icon="📰" title={reading.title} subtitle={`Lecture · ${reading.questions.length} questions`} />}
          {dialogue && <ListLink to={`/pratique/ecoute/${dialogue.id}?${q}`} icon="🎧" title={dialogue.title} subtitle={`Dialogue · ${dialogue.questions.length} questions`} />}
        </Section>
      )}

      {theme.speaking.length > 0 && (
        <Section title="À l'oral">
          <p className="text-xs text-gray-500 dark:text-gray-400">Réponds à voix haute (1 à 2 minutes), idéalement en t'enregistrant.</p>
          {theme.speaking.map((sp) => (
            <div key={sp.id} className={card}>
              <div className="flex items-start justify-between gap-2">
                <p className="font-semibold">{sp.question}</p>
                <SpeakButton text={sp.question} small />
              </div>
              {sp.focus && <p className="mt-1 text-xs text-orange-700 dark:text-orange-300"><Rich text={`🎯 ${sp.focus}`} /></p>}
            </div>
          ))}
        </Section>
      )}

      {tasks.length > 0 && (
        <Section title="Écrire">
          {tasks.map((w) => (
            <ListLink key={w.id} to={`/pratique/ecrit/${w.id}?${q}`} icon="🖋️" title={w.title} subtitle={`${w.minWords}–${w.maxWords} mots · avec modèle`} />
          ))}
        </Section>
      )}
    </Page>
  )
}
