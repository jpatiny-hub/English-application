import type { ChangelogEntry } from '../types'

// Journal des mises à jour de contenu. À chaque ajout, créer une nouvelle entrée avec
// `version` = précédente + 1 : l'accueil affichera une bannière « Nouveautés ».
export const changelog: ChangelogEntry[] = [
  {
    version: 1,
    date: '2026-09-24',
    title: 'Première version',
    changes: [
      '12 séances de cours intégrées (24.06 → 23.09) : vocabulaire, prononciation, corrections et notes.',
      '5 modules thématiques avec les expressions clés des fiches B2.',
      '26 leçons de grammaire, dont 10 sur les temps (past simple, present perfect, past perfect, futurs…).',
      '97 verbes irréguliers, 6 paquets de vocabulaire « découverte », 30 mots de prononciation.',
      "Atelier d'écriture (12 sujets avec modèles), reformulation, lecture, écoute, dictée et oral.",
    ],
  },
]

export const CONTENT_VERSION = Math.max(...changelog.map((c) => c.version))
