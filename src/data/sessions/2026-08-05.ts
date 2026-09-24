import type { CourseSession } from '../../types'

export const session: CourseSession = {
  id: 'c-2026-08-05',
  date: '2026-08-05',
  title: 'Identifying Problems and Required Actions',
  module: 'problems',
  vocabulary: [
    { id: 'v-a-hallway', en: 'a hallway', fr: 'un couloir ; une entrée (maison)', level: 'B2', example: 'The fire extinguisher is at the end of the hallway.' },
    { id: 'v-spices', en: 'spices', fr: 'des épices', level: 'B2', example: 'Add the spices at the end of the cooking.' },
    { id: 'v-bell-pepper', en: 'a bell pepper', fr: 'un poivron', level: 'B2', example: 'Cut the bell pepper into thin strips.' },
    { id: 'v-breadcrumbs', en: 'breadcrumbs', fr: 'de la chapelure', level: 'B2', example: 'You roll the chicken in panko breadcrumbs.' },
    { id: 'v-flea-market', en: 'a flea market', fr: 'un marché aux puces, une brocante', level: 'B2', example: 'I found this lamp at a flea market.' },
    { id: 'v-to-portray', en: 'to portray', fr: 'dépeindre, représenter ; incarner (un rôle)', level: 'B2+', example: 'The film portrays scientists as lonely geniuses.' },
    { id: 'v-to-mitigate', en: 'to mitigate', fr: 'atténuer, réduire (un risque, un impact)', level: 'C1', example: 'We introduced monthly checks to mitigate the risk of it happening again.' },
    { id: 'v-to-relate', en: 'to relate (to)', fr: "s'identifier à, comprendre ; se rapporter à", level: 'B2+', example: 'I can really relate to what she said about working remotely.' },
    { id: 'v-relatable', en: 'relatable', fr: "auquel on peut s'identifier", level: 'B2+', example: 'He is very relatable, so people trust him.' },
    { id: 'v-to-exchange', en: 'to exchange', fr: 'échanger', level: 'B2', example: "I didn't manage to exchange the gift before the expiry date." },
    { id: 'v-a-delivery', en: 'a delivery', fr: 'une livraison', level: 'B2', example: 'The delivery was two days late.' },
    { id: 'v-urgency', en: 'urgency', fr: "l'urgence (le caractère urgent)", level: 'B2', example: 'There is a sense of urgency in the team.', note: 'Aux urgences (hôpital) = the emergency room / A&E.' },
    { id: 'v-to-return', en: 'to return', fr: 'rendre, retourner (un article) ; revenir', level: 'B2', example: 'The customer returned the faulty device.' },
    { id: 'v-thrift-shop', en: 'a thrift shop / thrift store', fr: 'une friperie, un magasin de seconde main', level: 'B2', example: 'She buys most of her clothes in thrift shops.' },
  ],
  pronunciation: [
    { id: 'p-recipe', word: 'recipe', guide: 'RESS-uh-pee', tip: 'Trois syllabes ! Le « e » final se prononce « i ».', example: "It's my grandmother's recipe." },
    { id: 'p-surgeon', word: 'surgeon', guide: 'SUR-juhn', tip: 'Accent sur « SUR » ; « geon » = « djeun » bref.', example: 'The surgeon operated on his knee.' },
  ],
  corrections: [
    {
      kind: 'fix', id: 'fix-0805-01', wrong: 'It was mostly popular by the younger generation.',
      answers: ['It was mostly popular with the younger generation.'],
      explanation: 'Populaire AUPRÈS DE = popular WITH.',
      tags: ['prepositions', 'quantifiers'],
    },
    {
      kind: 'fix', id: 'fix-0805-02', wrong: 'We did a picnic in the park.',
      answers: ['We had a picnic in the park.'],
      explanation: 'Collocation : HAVE a picnic, have a party, have lunch, have a meeting.',
      tags: ['collocations', 'make-do'],
    },
    {
      kind: 'fix', id: 'fix-0805-03', wrong: "I didn't see them since a year.",
      answers: ["I haven't seen them for a year.", 'I have not seen them for a year.', "I haven't seen them in a year."],
      explanation: 'Action qui dure jusqu\'à maintenant → PRESENT PERFECT. Et une durée → FOR (since = point de départ).',
      tags: ['present-perfect', 'since-for', 'pp-vs-ps'],
    },
    {
      kind: 'fix', id: 'fix-0805-04', wrong: 'Six years ago, I have worked in a laboratory.',
      answers: ['Six years ago, I worked in a laboratory.', 'Six years ago, I was working in a laboratory.', 'I used to work in a laboratory six years ago.'],
      explanation: '« Ago » = moment terminé du passé → PAST SIMPLE (ou past continuous pour la situation en cours à ce moment). Jamais de present perfect avec « ago ».',
      tags: ['past-simple', 'pp-vs-ps', 'past-continuous'],
    },
    {
      kind: 'fix', id: 'fix-0805-05', wrong: 'He wanted to help as much as he can.',
      answers: ['He wanted to help as much as he could.', 'He wanted to help as much as possible.'],
      explanation: 'Concordance des temps : le récit est au passé (wanted) → can devient could.',
      tags: ['past-simple'],
    },
    {
      kind: 'fix', id: 'fix-0805-06', wrong: 'To avoid that it happens again, we changed the procedure.',
      answers: ['To prevent it from happening again, we changed the procedure.', 'To mitigate the risk of it happening again, we changed the procedure.', 'To stop it from happening again, we changed the procedure.', 'To avoid it happening again, we changed the procedure.'],
      explanation: '« Éviter que cela se reproduise » = prevent it FROM happening again (ou mitigate the risk of it happening again). Pas de « avoid that ».',
      tags: ['gerund-inf'],
    },
    {
      kind: 'fix', id: 'fix-0805-07', wrong: "I didn't arrive to exchange the gift before the expiry date.",
      answers: ["I didn't manage to exchange the gift before the expiry date.", "I wasn't able to exchange the gift before the expiry date."],
      explanation: '« Je ne suis pas arrivé à » = I didn\'t MANAGE to. « Arrive » = arriver quelque part.',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0805-08', wrong: "I don't do good with too much input.",
      answers: ["I don't do well with too much input."],
      explanation: '« Well » est l\'adverbe (do well = bien s\'en sortir). « Good » est l\'adjectif.',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0805-09', wrong: 'She has to move so that people can forget about what happened.',
      answers: ['She has to move out so that people can forget about what happened.', 'She has to move away so that people can forget about what happened.'],
      explanation: 'Quitter son logement avec ses affaires = move OUT. (move on = tourner la page ; move to = déménager vers).',
      tags: ['phrasal-verbs'],
    },
  ],
  notes: [
    {
      title: 'Most vs mostly',
      explanation: '« Most » = la plupart / le plus (déterminant, pronom ou superlatif). « Mostly » = principalement, surtout (adverbe qui modifie un verbe, un adjectif ou toute la phrase).',
      examples: [
        { en: 'Most people like music.', fr: 'La plupart des gens…' },
        { en: 'Most of the cake is gone.', note: '« most of » + the/my/this…' },
        { en: 'I invited ten people, but most couldn\'t come.', note: 'pronom' },
        { en: 'She is the most intelligent student.', note: 'superlatif' },
        { en: 'I mostly work from home.', fr: 'Je travaille surtout depuis chez moi.' },
        { en: 'The audience was mostly teenagers.' },
        { en: 'Most of my friends live abroad.', fr: 'Plus de la moitié de mes amis…' },
        { en: 'My friends mostly live abroad.', fr: "Vivre à l'étranger est la situation principale de mes amis." },
      ],
    },
    {
      title: 'Move out / move on / move to',
      explanation: 'Trois « phrasal verbs » à ne pas confondre.',
      examples: [
        { en: 'to move out', fr: 'quitter son logement avec ses affaires' },
        { en: 'to move on', fr: 'tourner la page, passer à autre chose' },
        { en: 'to move to (a different place / city / apartment)', fr: 'déménager à / vers' },
      ],
    },
    {
      title: 'Used to / past continuous',
      explanation: 'Pour une situation passée terminée : « I used to work in a lab » (habitude/état révolu) ou « Six years ago, I was working in a lab » (en cours à ce moment).',
      examples: [
        { en: 'Six years ago, I was working in a laboratory.' },
        { en: 'I used to work in a laboratory.' },
        { en: "I haven't seen them for a year.", note: 'Present perfect : la situation dure jusqu\'à maintenant.' },
      ],
    },
  ],
  grammarLinks: ['g-most', 'g-pp-vs-ps', 'g-used-to', 'g-confusing'],
}
