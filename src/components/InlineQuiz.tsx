import { useMemo, useState } from 'react'
import type { McqExercise } from '../types'
import { recordAnswer } from '../lib/progress'
import { shuffle } from '../lib/text'
import { btnPrimary } from './ui'

// Questions de compréhension affichées toutes ensemble (lecture, écoute).
export function InlineQuiz({ questions, onDone }: { questions: McqExercise[]; onDone?: (score: number) => void }) {
  const orders = useMemo(() => questions.map((q) => shuffle(q.options.map((_, i) => i))), [questions])
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [checked, setChecked] = useState(false)

  const score = questions.filter((q, i) => answers[i] === q.answer).length

  function check() {
    setChecked(true)
    questions.forEach((q, i) => recordAnswer(q, answers[i] === q.answer))
    onDone?.(score)
  }

  return (
    <div className="space-y-3">
      {questions.map((q, i) => (
        <div key={q.id} className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
          <p className="text-sm font-medium">{i + 1}. {q.prompt}</p>
          <div className="mt-2 space-y-2">
            {orders[i].map((oi) => {
              const selected = answers[i] === oi
              const ok = checked && oi === q.answer
              const ko = checked && selected && oi !== q.answer
              return (
                <button
                  key={oi}
                  disabled={checked}
                  onClick={() => setAnswers({ ...answers, [i]: oi })}
                  className={`block w-full rounded-lg border px-3 py-2 text-left text-sm ${
                    ok ? 'border-green-500 bg-green-50 dark:bg-green-900/30'
                      : ko ? 'border-red-500 bg-red-50 dark:bg-red-900/30'
                        : selected ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30'
                          : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  {q.options[oi]}
                </button>
              )
            })}
          </div>
          {checked && q.explanation && <p className="mt-2 text-xs text-indigo-800 dark:text-indigo-200">💡 {q.explanation}</p>}
        </div>
      ))}
      {!checked ? (
        <button onClick={check} disabled={Object.keys(answers).length < questions.length} className={btnPrimary}>
          Vérifier mes réponses
        </button>
      ) : (
        <p className="text-center font-semibold">Score : {score} / {questions.length}</p>
      )}
    </div>
  )
}
