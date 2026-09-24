import type { Exercise, ModuleId, ModuleStep } from '../types'
import { getProgress, updateProgress, type ProgressData } from './store'
import { isDue, reviewCard } from './srs'
import { todayKey } from './text'

/** Enregistre une réponse : répétition espacée, historique, statistiques par étiquette, activité du jour. */
export function recordAnswer(ex: Exercise, correct: boolean) {
  const now = new Date().toISOString()
  const day = todayKey()
  updateProgress((d) => {
    const prev = d.attempts[ex.id]
    const tagStats = { ...d.tagStats }
    for (const tag of ex.tags ?? []) {
      const t = tagStats[tag] ?? { ok: 0, ko: 0 }
      tagStats[tag] = correct ? { ...t, ok: t.ok + 1 } : { ...t, ko: t.ko + 1 }
    }
    return {
      ...d,
      srs: { ...d.srs, [ex.id]: reviewCard(d.srs[ex.id], correct) },
      attempts: {
        ...d.attempts,
        [ex.id]: {
          ok: (prev?.ok ?? 0) + (correct ? 1 : 0),
          ko: (prev?.ko ?? 0) + (correct ? 0 : 1),
          last: now,
          lastOk: correct,
        },
      },
      tagStats,
      activity: { ...d.activity, [day]: (d.activity[day] ?? 0) + 1 },
    }
  })
}

/** Pour les éléments sans exercice (leçon relue, texte lu…) : compte seulement l'activité. */
export function recordActivity(count = 1) {
  const day = todayKey()
  updateProgress((d) => ({ ...d, activity: { ...d.activity, [day]: (d.activity[day] ?? 0) + count } }))
}

/** Planifie une leçon entière dans la révision (réussie si ≥ 70 %). */
export function recordLesson(lessonId: string, ratio: number) {
  updateProgress((d) => ({ ...d, srs: { ...d.srs, [`lesson:${lessonId}`]: reviewCard(d.srs[`lesson:${lessonId}`], ratio >= 0.7) } }))
}

export function markStep(moduleId: ModuleId | string | null | undefined, step: ModuleStep, done = true) {
  if (!moduleId) return
  updateProgress((d) => ({ ...d, steps: { ...d.steps, [`${moduleId}:${step}`]: done } }))
}

export function streak(data: ProgressData): number {
  let count = 0
  const d = new Date()
  // Si rien aujourd'hui, la série peut encore continuer : on commence à hier.
  if (!data.activity[todayKey(d)]) d.setDate(d.getDate() - 1)
  while (data.activity[todayKey(d)]) {
    count++
    d.setDate(d.getDate() - 1)
  }
  return count
}

export function dueIds(data: ProgressData, ids: string[]): string[] {
  const now = Date.now()
  return ids.filter((id) => isDue(data.srs[id], now))
}

export function newIds(data: ProgressData, ids: string[]): string[] {
  return ids.filter((id) => !data.srs[id])
}

export function masteredCount(data: ProgressData, ids: string[]): number {
  return ids.filter((id) => (data.srs[id]?.box ?? 0) >= 3).length
}

export function seenCount(data: ProgressData, ids: string[]): number {
  return ids.filter((id) => data.srs[id]).length
}

/** Taux de réussite par étiquette, trié du plus faible au plus fort (au moins `min` réponses). */
export function weakTags(data: ProgressData, min = 4): { tag: string; rate: number; total: number }[] {
  return Object.entries(data.tagStats)
    .map(([tag, s]) => ({ tag, total: s.ok + s.ko, rate: s.ok / Math.max(1, s.ok + s.ko) }))
    .filter((t) => t.total >= min)
    .sort((a, b) => a.rate - b.rate)
}

/** Exercices ratés à la dernière tentative. */
export function lastFailedIds(data: ProgressData): string[] {
  return Object.entries(data.attempts)
    .filter(([, a]) => !a.lastOk)
    .sort((a, b) => b[1].last.localeCompare(a[1].last))
    .map(([id]) => id)
}

export function daysSince(iso: string | null): number | null {
  if (!iso) return null
  return Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000)
}

export function totalAnswers(data: ProgressData): number {
  return Object.values(data.activity).reduce((a, b) => a + b, 0)
}

export function hasAnyProgress(): boolean {
  return Object.keys(getProgress().attempts).length > 0
}
