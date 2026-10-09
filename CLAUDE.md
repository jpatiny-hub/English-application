# English B2 → C1 — notes pour les mises à jour

Appli personnelle d'anglais (PWA React/Vite/Tailwind, 100 % locale). L'utilisateur est francophone (région de Liège), niveau B2, vise le C1, travaille en biologie / industrie pharmaceutique. Grosses lacunes sur les temps du passé (past simple vs present perfect surtout). Interface en français, contenu en anglais.

## Règle n°1 : ne jamais casser la progression

- La progression (localStorage `english-app:progress`) est indexée par les `id` de contenu. **Ne jamais renommer, supprimer ou réutiliser un id existant.** On ajoute, on ne réécrit pas les ids.
- Corriger le texte d'un exercice existant est possible (même id) si le sens reste le même.
- Si la structure de `ProgressData` change : incrémenter `SCHEMA_VERSION` et ajouter une étape dans `migrate()` (`src/lib/store.ts`), sans jamais jeter de données.
- Toujours lancer `npm run check-data` puis `npm run build` avant de pousser.

## Ajouter une séance de cours (fiche « Vocabulary / Pronunciation / Mistakes / Others »)

1. Créer `src/data/sessions/AAAA-MM-JJ.ts` en copiant une séance existante. `id: 'c-AAAA-MM-JJ'`, `module` parmi `company | problems | opinions | assumptions | process | explanations` (ajouter un module dans `modules.ts` si nouveau thème).
2. `vocabulary` : ids `v-<mot-en-kebab>` (vérifier qu'il n'existe pas déjà ; sinon ne pas le dupliquer), traduction FR, exemple, niveau.
3. `pronunciation` : ids `p-<mot>` ; guide avec la syllabe accentuée en majuscules.
4. `corrections` : chaque phrase de « Mistakes » est la version CORRIGÉE. Inventer la version fautive typique d'un francophone (`wrong`), mettre la phrase corrigée + variantes correctes dans `answers`, expliquer en français, étiqueter (`tags` : voir `TAG_LABELS` dans `src/data/content.ts`, ex. `past-simple`, `pp-vs-ps`, `since-for`, `prepositions`, `false-friends`…). ids `fix-MMJJ-NN`. Si une erreur revient d'une séance à l'autre, le signaler dans l'explication plutôt que de dupliquer.
5. `notes` : la rubrique « Others » sous forme de `GrammarPoint` ; `grammarLinks` vers les leçons liées.
6. Importer la séance dans `src/data/sessions/index.ts`.
7. Si une fiche EN-B2 donne des KEY PHRASES / questions pour un module, les ajouter au module (`modules.ts`) ; passer `keyPhrasesFromCourse` à `true` quand les expressions viennent d'une fiche.
8. Ajouter une entrée dans `src/data/changelog.ts` (version = précédente + 1).

## Autres ajouts

- Vocabulaire : les cartes demandent d'écrire la traduction (`checkVocab` dans `src/lib/text.ts`) ; tolérance orthographique selon la longueur du mot, articles/accents ignorés, chaque segment séparé par « , ; / » de la traduction est accepté. Écrire les traductions FR/EN en gardant ce découpage.
- Exercices : format commun `Exercise` (`mcq | gap | fix | transform | card`) dans `src/types.ts`. Les `gap` ont `___` dans le prompt ; l'utilisateur tape seulement le trou.
- La comparaison des réponses est tolérante (casse, ponctuation, contractions, orthographe UK/US, une faute de frappe) : `src/lib/text.ts`. Donner plusieurs `answers` pour les formulations libres.
- La relecture automatique de l'atelier d'écriture (`src/lib/lint.ts`) peut recevoir de nouvelles règles pour les erreurs récurrentes.
- Garder la progression B2 → B2+ → C1 : chaque nouvel ensemble d'exercices devrait contenir un peu de C1.

## Robustesse d'affichage (ne pas retirer)

- `index.html` : `translate="no"` + `<meta name="google" content="notranslate">` — la traduction automatique de Chrome réécrit le DOM et faisait disparaître l'appli à chaque changement de page.
- `index.html` : script de secours qui recharge la page (au plus une fois / 20 s) si l'appli reste vide. ⚠️ HashRouter navigue via `history.pushState` (aucun `hashchange`) : le script enveloppe pushState/replaceState et observe `#root`. Après réparation, un bandeau s'affiche (`RecoveredToast`).
- Pas de `backdrop-blur` ni d'animation `active:scale` : suspects d'écrans vides sous Chrome (vidéo du 09.10, téléphone Samsung, mode sombre).
- `src/lib/diagnostics.ts` : garde-fous `removeChild` / `insertBefore` et journal d'erreurs (`english-app:errors`) affiché dans « Progrès → Diagnostic technique ». Si l'utilisateur signale un bug d'affichage, lui demander de copier ce journal.
- `ErrorBoundary` autour des routes (`src/App.tsx`).
