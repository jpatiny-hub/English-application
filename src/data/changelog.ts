import type { ChangelogEntry } from '../types'

// Journal des mises à jour de contenu. À chaque ajout, créer une nouvelle entrée avec
// `version` = précédente + 1 : l'accueil affichera une bannière « Nouveautés ».
export const changelog: ChangelogEntry[] = [
  {
    version: 2,
    date: '2026-10-04',
    title: 'Cours du 30.09 et fiche « Making Assumptions »',
    changes: [
      'Nouveau module « Asking for and Giving Explanations » (cours du 30.09) : 14 mots, 4 prononciations, 14 corrections, expressions clés, dialogue, texte et sujet d\'écrit.',
      'Nouvelle leçon : questions indirectes et demandes polies (« Could you explain why… »).',
      'Module « Making Assumptions » : expressions clés de la fiche B2, 7 nouveaux sujets d\'oral, dialogue sur le produit solaire et 10 nouveaux exercices.',
      "Correctif : l'appli ne peut plus être traduite automatiquement par le navigateur (cause probable des pages vides) et se relance seule si une page reste vide.",
    ],
  },
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
