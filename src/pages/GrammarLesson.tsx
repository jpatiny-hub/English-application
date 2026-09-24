import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { grammarLessons } from '../data/grammar'
import { useProgress } from '../lib/store'
import { markStep, recordLesson, seenCount, masteredCount } from '../lib/progress'
import type { GrammarPoint } from '../types'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { btnPrimary, card, LevelBadge, Page, ProgressBar, Rich, SpeakButton } from '../components/ui'

export function GrammarPointView({ point }: { point: GrammarPoint }) {
  return (
    <div className={card}>
      <p className="font-semibold">{point.title}</p>
      <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300"><Rich text={point.explanation} /></p>
      {point.table && (
        <div className="mt-3 overflow-x-auto">
          <table className="w-full border-collapse text-left text-xs">
            <thead>
              <tr>
                {point.table.head.map((h, i) => (
                  <th key={i} className="border-b border-gray-200 px-2 py-1.5 font-semibold dark:border-gray-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {point.table.rows.map((row, i) => (
                <tr key={i} className="odd:bg-gray-50 dark:odd:bg-gray-800/50">
                  {row.map((cell, j) => (
                    <td key={j} className={`px-2 py-1.5 align-top ${j === 0 ? 'font-medium' : ''}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {point.examples.length > 0 && (
        <div className="mt-3 space-y-2">
          {point.examples.map((ex, j) => (
            <div key={j} className="flex items-center justify-between gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm dark:bg-gray-800">
              <div>
                <p className="font-medium">{ex.en}</p>
                {ex.fr && <p className="text-xs text-gray-500 dark:text-gray-400">{ex.fr}</p>}
                {ex.note && <p className="text-xs text-amber-700 dark:text-amber-400">{ex.note}</p>}
              </div>
              <SpeakButton text={ex.en.replace(/\(.*?\)/g, '')} small />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function GrammarLessonPage() {
  const { lessonId } = useParams()
  const [params] = useSearchParams()
  const moduleId = params.get('module')
  const lesson = grammarLessons.find((l) => l.id === lessonId)
  const data = useProgress()
  const [running, setRunning] = useState(params.get('mode') === 'revision')

  if (!lesson) return <Page title="Leçon introuvable" back={{ to: '/grammaire', label: 'Grammaire' }}>{null}</Page>

  if (running) {
    return (
      <ExerciseRunner
        items={lesson.exercises}
        title={lesson.title}
        onExit={() => setRunning(false)}
        onFinish={(correct, total) => {
          recordLesson(lesson.id, correct / total)
          markStep(moduleId, 'grammaire')
        }}
      />
    )
  }

  const ids = lesson.exercises.map((e) => e.id)
  const seen = seenCount(data, ids)
  const mastered = masteredCount(data, ids)
  const back = lesson.group === 'temps' ? { to: '/temps', label: 'Labo des temps' } : { to: '/grammaire', label: 'Grammaire' }

  return (
    <Page title={lesson.title} subtitle={<span className="flex items-center gap-2"><LevelBadge level={lesson.level} /> {lesson.summary}</span>} back={back}>
      <div className="space-y-3">
        {lesson.points.map((p) => <GrammarPointView key={p.title} point={p} />)}
      </div>

      <div className={`${card} mt-5`}>
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold">{lesson.exercises.length} exercices</span>
          <span className="text-xs text-gray-500">{seen > 0 ? `${mastered} acquis · ${seen} travaillés` : 'jamais travaillé'}</span>
        </div>
        <div className="mt-2"><ProgressBar value={mastered} max={ids.length} tone="green" /></div>
        <button onClick={() => setRunning(true)} className={`${btnPrimary} mt-3`}>S'entraîner</button>
      </div>
    </Page>
  )
}
