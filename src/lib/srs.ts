// Répétition espacée simplifiée (Leitner à 5 boîtes).
// Contrairement à l'appli espagnole, un contenu jamais travaillé n'est PAS « dû » :
// il est « nouveau ». On introduit les nouveautés à petite dose, et la révision
// ne propose que ce qui a déjà été vu. Ainsi, ajouter 200 mots d'un coup ne noie pas la révision.
export interface CardState {
  box: number // 1 à 5
  due: string // date ISO à partir de laquelle l'élément redevient à revoir
}

export type SrsData = Record<string, CardState>

const INTERVALS_DAYS = [0, 1, 3, 7, 16, 35] // index = boîte

export function isNew(state: CardState | undefined): boolean {
  return !state
}

export function isDue(state: CardState | undefined, now = Date.now()): boolean {
  if (!state) return false
  return new Date(state.due).getTime() <= now
}

export function reviewCard(state: CardState | undefined, correct: boolean): CardState {
  const currentBox = state?.box ?? 0
  const nextBox = correct ? Math.min(currentBox + 1, 5) : 1
  const days = correct ? (INTERVALS_DAYS[nextBox] ?? 0) : 0
  // Une erreur revient dès aujourd'hui (dans 10 minutes) pour être retravaillée.
  const offset = correct ? days * 86_400_000 : 10 * 60_000
  return { box: nextBox, due: new Date(Date.now() + offset).toISOString() }
}

/** 0 = jamais vu, 1-2 = en cours, 3-4 = acquis, 5 = maîtrisé. */
export function masteryOf(state: CardState | undefined): 'nouveau' | 'en cours' | 'acquis' | 'maîtrisé' {
  if (!state) return 'nouveau'
  if (state.box >= 5) return 'maîtrisé'
  if (state.box >= 3) return 'acquis'
  return 'en cours'
}
