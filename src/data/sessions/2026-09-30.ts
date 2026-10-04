import type { CourseSession } from '../../types'

export const session: CourseSession = {
  id: 'c-2026-09-30',
  date: '2026-09-30',
  title: 'Asking for and Giving Explanations',
  module: 'explanations',
  vocabulary: [
    { id: 'v-to-remind', en: 'to remind (someone to do / of something)', fr: 'rappeler (à qqn de faire / qqch à qqn)', level: 'B2', example: 'Can you remind me to call the supplier?', note: '≠ remember (se souvenir). « Rappelle-moi » = remind me.' },
    { id: 'v-a-script', en: 'a script', fr: 'un script, un texte (pièce, film, présentation)', level: 'B2', example: 'The actors received the script a month before the show.' },
    { id: 'v-a-mix-up', en: 'a mix-up', fr: 'une confusion, un malentendu, une erreur', level: 'B2+', example: 'There was a mix-up with the hotel bookings.' },
    { id: 'v-a-showcase', en: 'a showcase', fr: 'une vitrine, une présentation (des meilleurs travaux)', level: 'B2+', example: 'The end-of-year showcase lets students present their work.' },
    { id: 'v-a-pond', en: 'a pond', fr: 'un étang, une mare', level: 'B2', example: 'There are ducks on the pond in the park.' },
    { id: 'v-a-rehearsal', en: 'a rehearsal', fr: 'une répétition (théâtre, concert)', level: 'B2', example: 'They have to be at every rehearsal and cannot miss any.', note: 'Faux-ami : « répétition » (d\'un mot) = repetition ; d\'un spectacle = rehearsal.' },
    { id: 'v-to-rehearse', en: 'to rehearse', fr: 'répéter (un spectacle, une présentation)', level: 'B2', example: 'I always rehearse my presentations out loud.' },
    { id: 'v-to-gain-weight', en: 'to gain weight / to put on weight', fr: 'prendre du poids', level: 'B2', example: 'He gained weight after he stopped running.', note: 'Le contraire : to lose weight.' },
    { id: 'v-to-affect', en: 'to affect', fr: 'affecter, avoir un effet sur', level: 'B2', example: 'Lack of sleep affects concentration.', note: 'Affect = verbe ; effect = nom (have an effect on).' },
    { id: 'v-to-prevent', en: 'to prevent (sb / sth from + -ing)', fr: 'empêcher ; prévenir (éviter)', level: 'B2', example: 'Regular checks prevent the machine from breaking down.' },
    { id: 'v-a-shopping-mall', en: 'a shopping mall / a shopping centre', fr: 'un centre commercial', level: 'B2', example: 'The new shopping mall opened last month.' },
    { id: 'v-a-user-interface', en: 'a user interface', fr: 'une interface utilisateur', level: 'B2', example: 'The new user interface is much easier to use.' },
    { id: 'v-a-trainer', en: 'a trainer', fr: 'un entraîneur, un formateur ; (UK) une basket', level: 'B2', example: 'My personal trainer made me run 10 km.' },
    { id: 'v-a-record', en: 'a record / to record', fr: 'un record ; un dossier, un relevé / enregistrer', level: 'B2', example: 'She broke the world record. — Keep a record of every deviation.', note: 'Nom : REC-ord ; verbe : re-CORD.' },
  ],
  pronunciation: [
    { id: 'p-liter', word: 'liter (UK: litre)', guide: 'LEE-ter', tip: 'Le « i » se prononce « ii » long.', example: 'Add one liter of water.' },
    { id: 'p-hidden', word: 'hidden', guide: 'HID-en', tip: 'Deux syllabes, le 2e « e » est presque muet.', example: 'There are hidden costs.' },
    { id: 'p-social', word: 'social', guide: 'SOH-shul', tip: '« ci » se prononce « ch » ; deux syllabes seulement.', example: 'Phones affect our social life.' },
    { id: 'p-determine', word: 'determine', guide: 'dih-TUR-min', tip: 'Finit par « min », pas « maïne ».', example: 'We need to determine the cause.' },
  ],
  corrections: [
    {
      kind: 'fix', id: 'fix-0930-01', wrong: 'The party was finished early.',
      answers: ['The party ended early.', 'The party finished early.'],
      explanation: '« End » et « finish » s\'emploient sans passif quand l\'événement se termine de lui-même : the party ended early.',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0930-02', wrong: 'We have a pass for the park, and we can go there all along the year.',
      answers: ['We have a pass for the park, and we can go there any time throughout the year.', 'We have a pass for the park, and we can go there all year round.', 'We have a pass for the park, and we can go there all year long.'],
      explanation: '« Toute l\'année » = all year round / throughout the year (✗ all along the year).',
      tags: ['collocations'],
    },
    {
      kind: 'fix', id: 'fix-0930-03', wrong: 'I went to see a football match, and I looked a theatre play on TV.',
      answers: ['I went to see a football match, and I watched a theatre play on TV.', 'I went to see a football match, and I watched a play on TV.'],
      explanation: 'Regarder un spectacle, la télé = WATCH. ⚠️ Déjà corrigé le 15.07 (look / watch).',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0930-04', wrong: 'There was a common door between the two apartments.',
      answers: ['There was a shared door between the two apartments.', 'There was a connecting door between the two apartments.'],
      explanation: '« Commun » (partagé) = shared. « Common » = courant, fréquent.',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0930-05', wrong: 'There are several different histories in the play.',
      answers: ['There are several different stories in the play.'],
      explanation: 'Faux-ami : une histoire (récit) = a story. « History » = l\'Histoire (matière, passé).',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0930-06', wrong: 'Everyone came with his dogs.',
      answers: ['Everyone came with their dogs.', 'Everybody came with their dogs.'],
      explanation: 'Après everyone / everybody / someone, le possessif neutre est THEIR (sans supposer le genre).',
      tags: ['pronouns'],
    },
    {
      kind: 'fix', id: 'fix-0930-07', wrong: 'I prefer this one than the previous one.',
      answers: ['I prefer this one to the previous one.'],
      explanation: 'PREFER A TO B (✗ than). Avec des verbes : I prefer walking to driving / I\'d rather walk than drive.',
      tags: ['prepositions', 'comparison'],
    },
    {
      kind: 'fix', id: 'fix-0930-08', wrong: 'We often have the children of our neighbours playing in our garden behind the house.',
      answers: ["We often have our neighbours' children playing in our backyard.", "We often have our neighbors' children playing in our backyard.", "We often have our neighbours' children playing in our back garden."],
      explanation: 'Génitif saxon pour les personnes (our neighbours\' children — apostrophe après le s du pluriel). Le jardin de derrière = the backyard (US) / the back garden (UK).',
      tags: ['word-order'],
    },
    {
      kind: 'fix', id: 'fix-0930-09', wrong: 'My mother has had 80 years on Friday.',
      answers: ['My mother turned 80 on Friday.', 'My mother turned 80 years old on Friday.'],
      explanation: '« Avoir X ans » (anniversaire) = TURN X. Et « on Friday » (passé terminé) → past simple. ⚠️ Même piège que le 15.07 et le 09.09.',
      tags: ['word-choice', 'past-simple', 'pp-vs-ps'],
    },
    {
      kind: 'fix', id: 'fix-0930-10', wrong: 'They have to be at every rehearsal and cannot miss none.',
      answers: ['They have to be at every rehearsal and cannot miss any.', "They have to be at every rehearsal and can't miss any."],
      explanation: 'Pas de double négation en anglais : not… ANY (ou no / none sans not).',
      tags: ['quantifiers'],
    },
    {
      kind: 'fix', id: 'fix-0930-11', wrong: "I think that people don't speak together.",
      answers: ["I think people don't talk to each other.", "I think that people don't talk to each other.", "I think people don't speak to each other."],
      explanation: '« Se parler » = talk to each other (réciproque : each other). « Speak together » ne se dit pas.',
      tags: ['pronouns'],
    },
    {
      kind: 'fix', id: 'fix-0930-12', wrong: "It's possible that they focus too much on doing perfectly their work.",
      answers: ["It's possible that they focus too much on doing their work perfectly.", 'It is possible that they focus too much on doing their work perfectly.'],
      explanation: 'L\'adverbe ne se place jamais entre le verbe et son complément : do your work perfectly (✗ do perfectly your work).',
      tags: ['word-order'],
    },
    {
      kind: 'fix', id: 'fix-0930-13', wrong: 'Almost everybody do that.',
      answers: ['Almost everybody does that.', 'Almost everyone does that.'],
      explanation: '« Everybody / everyone » est grammaticalement singulier : verbe à la 3e personne (does).',
      tags: ['quantifiers'],
    },
    {
      kind: 'fix', id: 'fix-0930-14', wrong: "As long as the work is done well, I don't have to justify nothing.",
      answers: ["As long as the work is done well, I don't have to justify anything.", 'As long as the work is done well, I do not have to justify anything.', "As long as the work is well done, I don't have to justify anything."],
      explanation: 'Double négation interdite : don\'t… ANYTHING (ou I have to justify nothing, plus rare).',
      tags: ['quantifiers'],
    },
  ],
  notes: [
    {
      title: 'Prefer A to B',
      explanation: 'Note ajoutée par l\'appli à partir des corrections. Préférer = prefer + TO ; avec deux verbes, on peut aussi dire would rather… than.',
      examples: [
        { en: 'I prefer this one to the previous one.' },
        { en: 'I prefer walking to driving.' },
        { en: "I'd rather walk than drive." },
      ],
    },
    {
      title: 'Pas de double négation',
      explanation: 'Note ajoutée par l\'appli. Une seule négation par proposition : not + any / anything / anybody, ou bien no / nothing / nobody seuls.',
      examples: [
        { en: "They can't miss any rehearsal.", note: '✗ can\'t miss none' },
        { en: "I don't have to justify anything.", note: '= I have to justify nothing (plus rare)' },
      ],
    },
    {
      title: 'Everyone + their / verbe au singulier',
      explanation: 'Note ajoutée par l\'appli. Everyone, everybody, someone, nobody : verbe au singulier, mais possessif « their ».',
      examples: [
        { en: 'Almost everybody does that.' },
        { en: 'Everyone came with their dogs.' },
      ],
    },
  ],
  grammarLinks: ['g-indirect-questions', 'g-most', 'g-confusing'],
}
