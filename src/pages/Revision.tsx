import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getExercise } from '../data/content'
import { grammarLessons } from '../data/grammar'
import { allVocab } from '../data/vocabulary'
import { useProgress } from '../lib/store'
import { lastFailedIds } from '../lib/progress'
import { isDue } from '../lib/srs'
import { shuffle } from '../lib/text'
import type { Exercise } from '../types'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { btnPrimary, btnSecondary, card, ListLink, Page, Section } from '../components/ui'
import { toCards } from './Vocabulary'

const SESSION_SIZE = 25

export function Revision() {
  const data = useProgress()
  const [run, setRun] = useState<{ items: Exercise[]; title: string } | null>(null)

  if (run) return <ExerciseRunner items={run.items} title={run.title} onExit={() => setRun(null)} />

  const now = Date.now()
  const dueAll = Object.entries(data.srs)
    .filter(([id, s]) => !id.startsWith('lesson:') && isDue(s, now))
    .sort((a, b) => a[1].due.localeCompare(b[1].due))
    .map(([id]) => id)
  const vocabIds = new Set(allVocab.map((v) => v.id))
  const dueVocab = dueAll.filter((id) => vocabIds.has(id))
  const dueExercises = dueAll.filter((id) => !vocabIds.has(id) && getExercise(id))
  const dueLessons = grammarLessons.filter((l) => isDue(data.srs[`lesson:${l.id}`], now))
  const failed = lastFailedIds(data).filter((id) => getExercise(id) && !vocabIds.has(id))

  function buildMixed(): Exercise[] {
    const cards = toCards(allVocab.filter((v) => dueVocab.includes(v.id)), data.settings.cardDirection)
    const exercises = dueExercises.map((id) => getExercise(id)!.exercise)
    // Moitié vocabulaire, moitié exercices quand c'est possible.
    const half = Math.ceil(SESSION_SIZE / 2)
    const ex = exercises.slice(0, Math.max(half, SESSION_SIZE - cards.length))
    const cd = cards.slice(0, SESSION_SIZE - ex.length)
    return shuffle([...ex, ...cd])
  }

  const nothing = dueVocab.length === 0 && dueExercises.length === 0 && dueLessons.length === 0

  return (
    <Page title="🔁 Révision" subtitle="Répétition espacée : ce que tu as déjà travaillé revient juste avant que tu l'oublies. Une erreur revient le jour même.">
      {nothing ? (
        <div className={`${card} text-center text-sm text-gray-500 dark:text-gray-400`}>
          {Object.keys(data.srs).length === 0
            ? 'Rien à réviser pour l\'instant : commence par un cours, le Labo des temps ou du vocabulaire. Tout ce que tu travailles reviendra ici au bon moment.'
            : 'Rien à réviser pour l\'instant, bravo ! Reviens demain.'}
        </div>
      ) : (
        <div className="rounded-2xl bg-indigo-600 p-4 text-white">
          <p className="text-sm opacity-90">Session du jour</p>
          <p className="text-2xl font-bold">{dueExercises.length + dueVocab.length} éléments à revoir</p>
          <p className="text-xs opacity-90">{dueExercises.length} exercices · {dueVocab.length} mots</p>
          {dueExercises.length + dueVocab.length > 0 && (
            <button onClick={() => setRun({ items: buildMixed(), title: 'Révision du jour' })} className="mt-3 w-full rounded-xl bg-white py-2.5 font-semibold text-indigo-700">
              Commencer ({Math.min(SESSION_SIZE, dueExercises.length + dueVocab.length)})
            </button>
          )}
        </div>
      )}

      {(dueExercises.length > 0 || dueVocab.length > 0) && (
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button
            disabled={dueExercises.length === 0}
            onClick={() => setRun({ items: dueExercises.slice(0, SESSION_SIZE).map((id) => getExercise(id)!.exercise), title: 'Exercices à revoir' })}
            className={btnSecondary}
          >
            Exercices ({dueExercises.length})
          </button>
          <button
            disabled={dueVocab.length === 0}
            onClick={() => setRun({ items: toCards(allVocab.filter((v) => dueVocab.includes(v.id)).slice(0, 30), data.settings.cardDirection), title: 'Vocabulaire à revoir' })}
            className={btnSecondary}
          >
            Vocabulaire ({dueVocab.length})
          </button>
        </div>
      )}

      {dueLessons.length > 0 && (
        <Section title="Leçons à revoir">
          {dueLessons.map((l) => (
            <ListLink key={l.id} to={`/grammaire/${l.id}?mode=revision`} title={l.title} subtitle={`Niveau de maîtrise ${data.srs[`lesson:${l.id}`]?.box ?? 0}/5`} />
          ))}
        </Section>
      )}

      {failed.length > 0 && (
        <Section title="Mes dernières erreurs">
          <button onClick={() => setRun({ items: shuffle(failed.slice(0, 20).map((id) => getExercise(id)!.exercise)), title: 'Mes erreurs' })} className={btnPrimary}>
            Retravailler mes {Math.min(20, failed.length)} dernières erreurs
          </button>
          <div className="space-y-1">
            {failed.slice(0, 5).map((id) => {
              const r = getExercise(id)!
              return (
                <Link key={id} to={r.source.link} className="block truncate rounded-lg bg-white px-3 py-2 text-xs text-gray-600 dark:bg-gray-900 dark:text-gray-300">
                  {r.source.label}
                </Link>
              )
            })}
          </div>
        </Section>
      )}
    </Page>
  )
}
