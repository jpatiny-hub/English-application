import type { CourseSession } from '../../types'

export const session: CourseSession = {
  id: 'c-2026-06-24',
  date: '2026-06-24',
  title: 'Describing a Company',
  module: 'company',
  vocabulary: [
    { id: 'v-to-chase', en: 'to chase', fr: 'poursuivre, courir après ; relancer (qqn)', level: 'B2', example: 'I had to chase the supplier three times to get the invoice.' },
    { id: 'v-a-basement', en: 'a basement', fr: 'un sous-sol', level: 'B2', example: 'The archives are stored in the basement.' },
    { id: 'v-to-slide-down', en: 'to slide down', fr: 'glisser vers le bas, descendre en glissant', level: 'B2', example: 'The kids slid down the hill on a sledge.' },
    { id: 'v-insurance', en: 'insurance', fr: 'une assurance (indénombrable)', level: 'B2', example: 'Does your insurance cover damage caused by floods?' },
    { id: 'v-a-side-effect', en: 'a side effect', fr: 'un effet secondaire', level: 'B2', example: 'Headaches are a common side effect of this drug.' },
    { id: 'v-common', en: 'common', fr: 'courant, fréquent ; commun', level: 'B2', example: "It's common to have lunch at your desk here.", note: '« It\'s not common to… » est plus naturel que « It\'s not usual to… ».' },
    { id: 'v-mainly', en: 'mainly', fr: 'principalement', level: 'B2', example: 'Our clients are mainly hospitals and research centres.' },
    { id: 'v-a-dealership', en: 'a dealership', fr: 'une concession (automobile)', level: 'B2', example: 'He works at a car dealership in Liège.' },
    { id: 'v-turnover', en: 'turnover', fr: "chiffre d'affaires (UK) ; rotation du personnel", level: 'B2+', example: 'The company has an annual turnover of €40 million, but staff turnover is high.' },
  ],
  pronunciation: [
    { id: 'p-written', word: 'written', guide: 'RIT-uhn', tip: 'Le « w » est muet et le « i » est court, comme dans « bit ».', example: 'The report was written in English.' },
  ],
  corrections: [
    {
      kind: 'fix', id: 'fix-0624-01', wrong: 'The government has informations about the project.',
      answers: ['The government has information about the project.'],
      explanation: '« Information » est indénombrable : jamais de -s, jamais de « an ». Pour compter : a piece of information.',
      tags: ['countable'],
    },
    {
      kind: 'fix', id: 'fix-0624-02', wrong: 'We have to follow three groups of persons.',
      answers: ['We have to follow three groups of people.'],
      explanation: 'Le pluriel courant de « person » est « people ». « Persons » n\'existe que dans des textes juridiques.',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0624-03', wrong: 'He did a lot of movies on this subject.',
      answers: ['He made a lot of movies on this subject.', 'He made a lot of films on this subject.'],
      explanation: 'On « make » un film (on le crée). « Do » s\'emploie pour les tâches et activités (do the laundry, do research).',
      tags: ['word-choice', 'make-do'],
    },
    {
      kind: 'fix', id: 'fix-0624-04', wrong: 'We have some issue with the new software.',
      answers: ['We have some issues with the new software.', 'We have an issue with the new software.'],
      explanation: '« Issue » est dénombrable : an issue (un problème) ou some issues (des problèmes).',
      tags: ['countable'],
    },
    {
      kind: 'fix', id: 'fix-0624-05', wrong: 'I participated to a pétanque competition.',
      answers: ['I participated in a pétanque competition.', 'I took part in a pétanque competition.'],
      explanation: 'On dit « participate IN » / « take part IN » quelque chose (jamais « to »).',
      tags: ['prepositions'],
    },
    {
      kind: 'fix', id: 'fix-0624-06', wrong: 'Our company searches ways to produce cheaper vaccines.',
      answers: ['Our company looks for ways to produce cheaper vaccines.', 'Our company is looking for ways to produce cheaper vaccines.', 'Our company searches for ways to produce cheaper vaccines.'],
      explanation: '« Chercher » = look for (ou search FOR). « Search » seul signifie fouiller un lieu : the police searched the house.',
      tags: ['prepositions', 'word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0624-07', wrong: 'Very few companies work on the same level than us.',
      answers: ['Very few companies work at the same level as us.', 'Very few companies work on the same level as us.'],
      explanation: 'Après « the same », on utilise « as » (jamais « than ») : the same level as us.',
      tags: ['comparison'],
    },
    {
      kind: 'fix', id: 'fix-0624-08', wrong: 'You have to have a biochemical formation to work here.',
      answers: ['You have to have a biochemical background to work here.', 'You have to have a biochemistry background to work here.', 'You need a biochemical background to work here.'],
      explanation: 'Faux-ami : « formation » (parcours) = background / training / education. « Formation » en anglais = une formation géologique ou militaire.',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0624-09', wrong: 'In addition of that, there is also a problem with the supply chain.',
      answers: ['On top of that, there is also a problem with the supply chain.', 'In addition to that, there is also a problem with the supply chain.', 'Besides that, there is also a problem with the supply chain.'],
      explanation: '« In addition TO that » ou, plus naturel à l\'oral, « On top of that ».',
      tags: ['prepositions', 'linking'],
    },
    {
      kind: 'fix', id: 'fix-0624-10', wrong: 'When I arrived here, I was confused with the communication.',
      answers: ['When I arrived here, I was confused by the communication.'],
      explanation: 'Être déstabilisé PAR quelque chose : confused BY. (« Confused with » = confondu avec : I confused him with his brother.)',
      tags: ['prepositions'],
    },
  ],
  notes: [
    {
      title: 'To discuss vs to talk about',
      explanation: '« Discuss » est transitif direct : jamais de « about » derrière. « Talk » demande « about ». Les deux prennent « with someone ».',
      examples: [
        { en: 'JF is discussing clinical trials with the group.', note: '✗ discussing about clinical trials' },
        { en: 'JF is talking about clinical trials with the group.' },
      ],
    },
  ],
  grammarLinks: ['g-confusing', 'g-countable'],
}
