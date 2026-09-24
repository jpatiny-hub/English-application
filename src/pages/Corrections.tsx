import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { sessions } from '../data/sessions/index'
import { modules } from '../data/modules'
import { useProgress, getProgress } from '../lib/store'
import { markStep, seenCount } from '../lib/progress'
import { pickExercises } from '../lib/select'
import { formatDateFr, shuffle } from '../lib/text'
import type { FixExercise } from '../types'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { btnPrimary, btnSecondary, card, Page, Section } from '../components/ui'

export function Corrections() {
  const [params] = useSearchParams()
  const moduleId = params.get('module')
  const data = useProgress()
  const [run, setRun] = useState<{ items: FixExercise[]; title: string } | null>(null)

  const scoped = moduleId ? sessions.filter((s) => s.module === moduleId) : sessions
  const all = scoped.flatMap((s) => s.corrections)
  const failed = all.filter((c) => data.attempts[c.id] && !data.attempts[c.id].lastOk)
  const mod = modules.find((m) => m.id === moduleId)

  if (run) {
    return <ExerciseRunner items={run.items} title={run.title} onExit={() => setRun(null)} onFinish={() => markStep(moduleId, 'corrections')} />
  }

  return (
    <Page
      title="🩹 Mes erreurs de cours"
      subtitle={
        <>
          Chaque phrase corrigée par ton professeur devient un exercice : on te montre la version fautive typique, à toi de la réécrire correctement.
          {mod && <span className="mt-1 block font-medium text-indigo-600 dark:text-indigo-400">Module : {mod.title}</span>}
        </>
      }
      back={mod ? { to: `/cours/module/${mod.id}`, label: mod.title } : { to: '/pratique', label: 'Pratique' }}
    >
      <div className="space-y-2">
        <button onClick={() => setRun({ items: pickExercises(all, getProgress(), 15) as FixExercise[], title: 'Corrections' })} className={btnPrimary}>
          Session de 15 (les plus utiles d'abord)
        </button>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => setRun({ items: shuffle(all), title: 'Toutes les corrections' })} className={btnSecondary}>
            Toutes ({all.length})
          </button>
          <button disabled={failed.length === 0} onClick={() => setRun({ items: shuffle(failed), title: 'Corrections ratées' })} className={btnSecondary}>
            Ratées ({failed.length})
          </button>
        </div>
      </div>

      <Section title="Par séance">
        {scoped.map((s) => {
          const ids = s.corrections.map((c) => c.id)
          if (ids.length === 0) return null
          return (
            <button key={s.id} onClick={() => setRun({ items: s.corrections, title: `Cours du ${formatDateFr(s.date)}` })} className={`${card} flex w-full items-center justify-between text-left`}>
              <div>
                <p className="font-semibold">{formatDateFr(s.date)}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{s.title}</p>
              </div>
              <span className="text-xs text-gray-500">{seenCount(data, ids)}/{ids.length}</span>
            </button>
          )
        })}
      </Section>
    </Page>
  )
}
