// Les « accès » (éditions) de l'appli : même moteur, même design, contenu et progression séparés.
// - Jojo : B2 → C1, cours Accent Lang (l'appli d'origine).
// - Jujularage : A1 → A2, bases + ses passions (bière, sport, biologie, CDMO).
// L'accès choisi est mémorisé sur l'appareil ; chaque accès a SA progression (clé de stockage distincte).
// Changer d'accès recharge l'appli : les données de contenu sont choisies au chargement.
import type { Level } from './types'

export type EditionId = 'jojo' | 'jujularage'

export interface Edition {
  id: EditionId
  name: string
  icon: string
  tagline: string
  /** Niveaux couverts, du plus facile au plus difficile. */
  levels: Level[]
  /** Clé de la progression dans le stockage local. Ne JAMAIS la changer. */
  storageKey: string
  /** Palette adaptée au daltonisme activée par défaut. */
  colorBlindDefault: boolean
}

export const EDITIONS: Record<EditionId, Edition> = {
  jojo: {
    id: 'jojo',
    name: 'Jojo',
    icon: '🫖',
    tagline: 'Du B2 vers le C1, un peu chaque jour.',
    levels: ['B2', 'B2+', 'C1'],
    storageKey: 'english-app:progress',
    colorBlindDefault: false,
  },
  jujularage: {
    id: 'jujularage',
    name: 'Jujularage',
    icon: '🍺',
    tagline: "De A1 vers A2, step by step. Cheers!",
    levels: ['A1', 'A2', 'B1'],
    storageKey: 'english-app:jujularage:progress',
    colorBlindDefault: true,
  },
}

export const EDITION_KEY = 'english-app:edition'

function isEditionId(v: unknown): v is EditionId {
  return v === 'jojo' || v === 'jujularage'
}

function readEdition(): EditionId | null {
  // Scripts Node (npm run check-data) : EDITION=jujularage
  if (typeof window === 'undefined') {
    const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.EDITION
    return isEditionId(env) ? env : 'jojo'
  }
  try {
    // Lien direct : …/?acces=jujularage
    const url = new URL(window.location.href)
    const param = url.searchParams.get('acces')
    if (isEditionId(param)) {
      localStorage.setItem(EDITION_KEY, param)
      url.searchParams.delete('acces')
      window.history.replaceState(null, '', url.pathname + url.search + url.hash)
    }
    const stored = localStorage.getItem(EDITION_KEY)
    return isEditionId(stored) ? stored : null
  } catch {
    return null
  }
}

/** Accès choisi (null tant que personne n'a choisi : l'écran de choix s'affiche). */
export const CHOSEN_EDITION: EditionId | null = readEdition()
export const EDITION: Edition = EDITIONS[CHOSEN_EDITION ?? 'jojo']
export const isJuju = EDITION.id === 'jujularage'

export function chooseEdition(id: EditionId) {
  try {
    localStorage.setItem(EDITION_KEY, id)
  } catch {
    // stockage indisponible : le choix ne sera pas mémorisé
  }
  window.location.hash = '#/'
  window.location.reload()
}
