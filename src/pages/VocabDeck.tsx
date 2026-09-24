import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { allDecks } from '../data/vocabulary'
import { modules } from '../data/modules'
import { sessions } from '../data/sessions/index'
import { useProgress } from '../lib/store'
import { dueIds, markStep, masteredCount, newIds } from '../lib/progress'
import { masteryOf } from '../lib/srs'
import { shuffle } from '../lib/text'
import type { CardExercise, VocabDeck } from '../types'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { btnPrimary, btnSecondary, card, LevelBadge, Page, Pill, SpeakButton } from '../components/ui'
import { toCards } from './Vocabulary'

function findDeck(deckId: string | undefined): VocabDeck | undefined {
  if (deckId?.startsWith('module-')) {
    const mod = modules.find((m) => `module-${m.id}` === deckId)
    if (!mod) return undefined
    return {
      id: deckId,
      title: `Vocabulaire · ${mod.title}`,
      icon: mod.icon,
      description: 'Tous les mots des séances de ce module',
      kind: 'cours',
      items: sessions.filter((s) => s.module === mod.id).flatMap((s) => s.vocabulary),
    }
  }
  return allDecks.find((d) => d.id === deckId)
}

export function VocabDeckPage() {
  const { deckId } = useParams()
  const deck = findDeck(deckId)
  const data = useProgress()
  const [run, setRun] = useState<CardExercise[] | null>(null)
  const moduleId = deckId?.startsWith('module-') ? deckId.slice(7) : null

  if (!deck) return <Page title="Paquet introuvable" back={{ to: '/vocabulaire', label: 'Vocabulaire' }}>{null}</Page>

  if (run) {
    return (
      <ExerciseRunner
        items={run}
        title={deck.title}
        onExit={() => setRun(null)}
        onFinish={() => markStep(moduleId, 'vocabulaire')}
      />
    )
  }

  const ids = deck.items.map((i) => i.id)
  const fresh = newIds(data, ids)
  const due = dueIds(data, ids)
  const dir = data.settings.cardDirection

  return (
    <Page title={`${deck.icon} ${deck.title}`} subtitle={`${deck.description} · ${masteredCount(data, ids)}/${ids.length} acquis`} back={{ to: '/vocabulaire', label: 'Vocabulaire' }}>
      <div className="grid grid-cols-2 gap-2">
        <button
          disabled={fresh.length === 0 && due.length === 0}
          onClick={() => {
            const pick = [...deck.items.filter((i) => due.includes(i.id)), ...deck.items.filter((i) => fresh.includes(i.id)).slice(0, data.settings.newCardsPerSession)]
            setRun(toCards(shuffle(pick), dir))
          }}
          className={btnPrimary}
        >
          {due.length > 0 ? `Réviser (${due.length})` : `Apprendre (${Math.min(fresh.length, data.settings.newCardsPerSession)})`}
        </button>
        <button onClick={() => setRun(toCards(shuffle(deck.items), dir))} className={btnSecondary}>
          Tout le paquet ({deck.items.length})
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {deck.items.map((v) => {
          const m = masteryOf(data.srs[v.id])
          return (
            <div key={v.id} className={`${card} p-3`}>
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-semibold">{v.en} <LevelBadge level={v.level} /></p>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">{v.fr}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  {m !== 'nouveau' && <Pill tone={m === 'en cours' ? 'amber' : 'green'}>{m}</Pill>}
                  <SpeakButton text={v.example ? `${v.en}. ${v.example}` : v.en} small />
                </div>
              </div>
              {v.example && <p className="mt-1 text-xs italic text-gray-500 dark:text-gray-400">« {v.example} »</p>}
              {v.note && <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">⚠️ {v.note}</p>}
            </div>
          )
        })}
      </div>
    </Page>
  )
}
