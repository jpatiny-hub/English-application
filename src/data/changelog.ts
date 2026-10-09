import type { ChangelogEntry } from '../types'

// Journal des mises à jour de contenu. À chaque ajout, créer une nouvelle entrée avec
// `version` = précédente + 1 : l'accueil affichera une bannière « Nouveautés ».
export const changelog: ChangelogEntry[] = [
  {
    version: 4,
    date: '2026-10-09',
    title: 'Correctif des pages vides',
    changes: [
      "Le filet de sécurité surveille maintenant chaque changement de page : si l'écran reste vide, l'appli se recharge seule et te le signale.",
      'Effets graphiques suspects supprimés (flou de la barre du bas, animations au toucher) et protection étendue à toute l\'appli.',
    ],
  },
  {
    version: 3,
    date: '2026-10-08',
    title: 'Cours du 07.10 et vocabulaire à écrire',
    changes: [
      'Cours du 07.10 (Asking for and Giving Explanations) : 6 mots, 4 prononciations, 22 corrections et la note « The more…, the more… ».',
      "Vocabulaire : tu écris maintenant la traduction au lieu de retourner la carte. Les petites fautes d'orthographe sont acceptées et signalées ; « Je ne sais pas » montre la réponse.",
      '4 nouveaux exercices sur « The + comparatif…, the + comparatif… », 3 sujets d\'oral et 3 exercices d\'expressions dans le module « Explanations ».',
    ],
  },
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
