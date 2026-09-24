import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { sessions } from '../data/sessions/index'
import { modules } from '../data/modules'
import { grammarLessons } from '../data/grammar'
import { vocabCard } from '../data/content'
import { useProgress } from '../lib/store'
import { masteryOf } from '../lib/srs'
import { formatDateFr } from '../lib/text'
import type { Exercise } from '../types'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { GrammarPointView } from './GrammarLesson'
import { btnPrimary, btnSecondary, card, ListLink, Page, Pill, Section, SpeakButton } from '../components/ui'

export function SessionDetail() {
  const { sessionId } = useParams()
  const session = sessions.find((s) => s.id === sessionId)
  const data = useProgress()
  const [run, setRun] = useState<{ items: Exercise[]; title: string } | null>(null)

  if (!session) return <Page title="Séance introuvable" back={{ to: '/cours', label: 'Cours' }}>{null}</Page>

  if (run) return <ExerciseRunner items={run.items} title={run.title} onExit={() => setRun(null)} />

  const mod = modules.find((m) => m.id === session.module)
  const direction = data.settings.cardDirection

  return (
    <Page
      title={formatDateFr(session.date)}
      subtitle={<>{mod?.icon} {session.title}</>}
      back={{ to: '/cours', label: 'Cours' }}
    >
      <div className="grid grid-cols-2 gap-2">
        {session.corrections.length > 0 && (
          <button onClick={() => setRun({ items: session.corrections, title: `Corrections du ${formatDateFr(session.date)}` })} className={btnPrimary}>
            🩹 Corrections ({session.corrections.length})
          </button>
        )}
        {session.vocabulary.length > 0 && (
          <button
            onClick={() =>
              setRun({
                items: session.vocabulary.map((v) => vocabCard(v, direction === 'mixte' ? (Math.random() < 0.5 ? 'en-fr' : 'fr-en') : direction)),
                title: `Vocabulaire du ${formatDateFr(session.date)}`,
              })
            }
            className={btnSecondary}
          >
            🗂️ Vocabulaire ({session.vocabulary.length})
          </button>
        )}
      </div>

      {session.vocabulary.length > 0 && (
        <Section title="Vocabulary">
          {session.vocabulary.map((v) => {
            const m = masteryOf(data.srs[v.id])
            return (
              <div key={v.id} className={`${card} p-3`}>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-semibold">{v.en}</p>
                    <p className="text-sm text-indigo-700 dark:text-indigo-300">{v.fr}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {m !== 'nouveau' && <Pill tone={m === 'en cours' ? 'amber' : 'green'}>{m}</Pill>}
                    <SpeakButton text={v.en} small />
                  </div>
                </div>
                {v.example && <p className="mt-1 text-xs italic text-gray-500 dark:text-gray-400">« {v.example} »</p>}
                {v.note && <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">⚠️ {v.note}</p>}
              </div>
            )
          })}
        </Section>
      )}

      {session.pronunciation.length > 0 && (
        <Section title="Pronunciation">
          {session.pronunciation.map((p) => (
            <div key={p.id} className={`${card} flex items-center justify-between gap-2 p-3`}>
              <div>
                <p className="font-semibold">{p.word} <span className="font-mono text-sm text-indigo-600 dark:text-indigo-400">/{p.guide}/</span></p>
                {p.tip && <p className="text-xs text-gray-500 dark:text-gray-400">{p.tip}</p>}
              </div>
              <SpeakButton text={p.example ? `${p.word}. ${p.example}` : p.word} small />
            </div>
          ))}
        </Section>
      )}

      {session.corrections.length > 0 && (
        <Section title="Mistakes → corrections">
          {session.corrections.map((c) => (
            <details key={c.id} className={`${card} p-3`}>
              <summary className="cursor-pointer text-sm">
                <span className="text-red-600 dark:text-red-400">✗ {c.wrong}</span>
                <span className="ml-1 text-xs text-gray-400">(voir)</span>
              </summary>
              <div className="mt-2 flex items-start justify-between gap-2">
                <p className="text-sm font-semibold text-green-700 dark:text-green-400">✓ {c.answers[0]}</p>
                <SpeakButton text={c.answers[0]} small />
              </div>
              {c.explanation && <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">💡 {c.explanation}</p>}
            </details>
          ))}
        </Section>
      )}

      {session.notes.length > 0 && (
        <Section title="Others (notes du cours)">
          {session.notes.map((n) => <GrammarPointView key={n.title} point={n} />)}
        </Section>
      )}

      {(session.grammarLinks?.length ?? 0) > 0 && (
        <Section title="Pour approfondir">
          {session.grammarLinks!.map((id) => {
            const l = grammarLessons.find((g) => g.id === id)
            return l ? <ListLink key={id} to={`/grammaire/${id}`} icon="📖" title={l.title} subtitle={l.summary} /> : null
          })}
        </Section>
      )}

      {mod && (
        <Section title="Module">
          <ListLink to={`/cours/module/${mod.id}`} icon={mod.icon} title={mod.title} subtitle="Expressions clés, oral, écrit, lecture…" />
        </Section>
      )}
    </Page>
  )
}
