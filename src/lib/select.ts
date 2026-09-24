import type { Exercise } from '../types'
import type { ProgressData } from './store'
import { shuffle } from './text'

/**
 * Choisit les exercices les plus utiles d'un ensemble :
 * 1) ceux à réviser (les plus en retard d'abord), 2) ceux ratés la dernière fois,
 * 3) les nouveaux, 4) le reste, du moins récemment vu au plus récent.
 */
export function pickExercises(pool: Exercise[], data: ProgressData, n: number): Exercise[] {
  const now = Date.now()
  const score = (ex: Exercise): number => {
    const s = data.srs[ex.id]
    const a = data.attempts[ex.id]
    if (s && new Date(s.due).getTime() <= now) return 0
    if (a && !a.lastOk) return 1
    if (!s) return 2
    return 3
  }
  const buckets: Exercise[][] = [[], [], [], []]
  for (const ex of pool) buckets[score(ex)].push(ex)
  buckets[0].sort((a, b) => data.srs[a.id].due.localeCompare(data.srs[b.id].due))
  buckets[3].sort((a, b) => (data.attempts[a.id]?.last ?? '').localeCompare(data.attempts[b.id]?.last ?? ''))
  const ordered = [...buckets[0], ...shuffle(buckets[1]), ...shuffle(buckets[2]), ...buckets[3]]
  return shuffle(ordered.slice(0, n))
}
