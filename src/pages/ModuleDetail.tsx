import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { modules } from '../data/modules'
import { sessions } from '../data/sessions/index'
import { grammarLessons } from '../data/grammar'
import { useProgress } from '../lib/store'
import { markStep } from '../lib/progress'
import { formatDateFr } from '../lib/text'
import type { ModuleId, ModuleStep } from '../types'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { btnPrimary, card, LevelBadge, ListLink, Page, Section, SpeakButton } from '../components/ui'

interface StepDef {
  step: ModuleStep
  icon: string
  label: string
  description: string
}

export const MODULE_STEPS: StepDef[] = [
  { step: 'phrases', icon: '💬', label: 'Expressions clés', description: 'Les formules de la fiche, à connaître par cœur' },
  { step: 'vocabulaire', icon: '🗂️', label: 'Vocabulaire', description: 'Les mots vus pendant les séances' },
  { step: 'corrections', icon: '🩹', label: 'Mes corrections', description: 'Les phrases corrigées en séance' },
  { step: 'grammaire', icon: '📖', label: 'Grammaire', description: 'Les points de langue liés au thème' },
  { step: 'prononciation', icon: '🗣️', label: 'Prononciation', description: 'Les mots à bien prononcer' },
  { step: 'ecoute', icon: '🎧', label: 'Écoute', description: 'Un dialogue et ses questions' },
  { step: 'lecture', icon: '📰', label: 'Lecture', description: 'Un texte sur le thème' },
  { step: 'oral', icon: '🎤', label: 'Expression orale', description: 'Répondre aux questions de discussion' },
  { step: 'ecrit', icon: '🖋️', label: 'Expression écrite', description: 'Un sujet de rédaction avec modèle' },
]

export function ModuleDetail() {
  const { moduleId } = useParams()
  const mod = modules.find((m) => m.id === moduleId)
  const data = useProgress()
  const [drill, setDrill] = useState(false)

  if (!mod) {
    return <Page title="Module introuvable" back={{ to: '/cours', label: 'Cours' }}>{null}</Page>
  }

  if (drill) {
    return (
      <ExerciseRunner
        items={mod.exercises}
        title={`Expressions · ${mod.title}`}
        onExit={() => setDrill(false)}
        onFinish={() => markStep(mod.id, 'phrases')}
      />
    )
  }

  const modSessions = sessions.filter((s) => s.module === mod.id)
  const q = `module=${mod.id}`

  function stepLink(step: ModuleStep): string {
    if (!mod) return '/'
    switch (step) {
      case 'phrases': return '#phrases'
      case 'vocabulaire': return `/vocabulaire/module-${mod.id}`
      case 'corrections': return `/pratique/corrections?${q}`
      case 'grammaire': return '#grammaire'
      case 'prononciation': return `/pratique/oral?${q}&tab=prononciation`
      case 'ecoute': return `/pratique/ecoute/${mod.dialogueId}?${q}`
      case 'lecture': return `/pratique/lecture/${mod.readingId}?${q}`
      case 'oral': return `/pratique/oral?${q}&tab=libre`
      case 'ecrit': return `/pratique/ecrit?${q}`
    }
  }

  return (
    <Page title={`${mod.icon} ${mod.title}`} subtitle={`${mod.titleFr} — ${mod.description}`} back={{ to: '/cours', label: 'Cours' }}>
      <div className="space-y-2">
        {MODULE_STEPS.map((def) => {
          const key = `${mod.id}:${def.step}`
          const done = !!data.steps[key]
          const to = stepLink(def.step)
          const inner = (
            <>
              <span className="text-xl">{def.icon}</span>
              <div>
                <p className={`font-semibold ${done ? 'text-gray-400 line-through' : ''}`}>{def.label}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{def.description}</p>
              </div>
            </>
          )
          return (
            <div key={def.step} className={`${card} flex items-center gap-3 p-3`}>
              <button
                onClick={() => markStep(mod.id, def.step, !done)}
                aria-label={done ? 'Marquer comme non fait' : 'Marquer comme fait'}
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 text-sm ${
                  done ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300 text-transparent dark:border-gray-600'
                }`}
              >
                ✓
              </button>
              {to.startsWith('#') ? (
                <a href={to} onClick={(e) => { e.preventDefault(); document.getElementById(to.slice(1))?.scrollIntoView({ behavior: 'smooth' }) }} className="flex flex-1 items-center gap-3">{inner}</a>
              ) : (
                <Link to={to} className="flex flex-1 items-center gap-3">{inner}</Link>
              )}
            </div>
          )
        })}
      </div>
      <p className="mt-3 text-center text-xs text-gray-400">Les étapes se cochent seules une fois l'exercice terminé. Tu peux aussi les cocher toi-même.</p>

      <div id="phrases" />
      <Section title="Expressions clés">
        {!mod.keyPhrasesFromCourse && (
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Pas de fiche d'expressions pour ce thème dans tes cours : celles-ci ont été rédigées pour l'appli sur le même modèle.
          </p>
        )}
        {mod.keyPhrases.map((g) => (
          <details key={g.title} className={card}>
            <summary className="flex cursor-pointer items-center justify-between">
              <span>
                <span className="font-semibold">{g.title}</span>
                <span className="block text-xs text-gray-500 dark:text-gray-400">{g.titleFr}</span>
              </span>
              <span className="text-gray-400">▾</span>
            </summary>
            <ul className="mt-3 space-y-2">
              {g.phrases.map((p) => (
                <li key={p} className="flex items-center justify-between gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm dark:bg-gray-800">
                  <span>{p}</span>
                  <SpeakButton text={p.replace(/…/g, ',')} small />
                </li>
              ))}
            </ul>
          </details>
        ))}
        <button onClick={() => setDrill(true)} className={btnPrimary}>S'entraîner aux expressions ({mod.exercises.length})</button>
      </Section>

      <div id="grammaire" />
      <Section title="Grammaire liée">
        {mod.grammarLessonIds.map((id) => {
          const l = grammarLessons.find((g) => g.id === id)
          if (!l) return null
          return <ListLink key={id} to={`/grammaire/${id}?${q}`} title={l.title} subtitle={l.summary} right={<LevelBadge level={l.level} />} />
        })}
      </Section>

      <Section title="Séances de ce module">
        {modSessions.map((s) => (
          <ListLink key={s.id} to={`/cours/seance/${s.id}`} title={formatDateFr(s.date)} subtitle={`${s.vocabulary.length} mots · ${s.corrections.length} corrections`} />
        ))}
      </Section>
    </Page>
  )
}

export function moduleTitle(id: ModuleId | undefined): string {
  return modules.find((m) => m.id === id)?.title ?? ''
}
