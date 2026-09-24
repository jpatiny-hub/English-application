import type { CourseSession } from '../../types'

export const session: CourseSession = {
  id: 'c-2026-07-02',
  date: '2026-07-02',
  title: 'Describing a Company',
  module: 'company',
  vocabulary: [
    { id: 'v-to-assemble', en: 'to assemble', fr: 'assembler, monter ; (se) réunir', level: 'B2', example: 'The kits are assembled by hand in our workshop.' },
    { id: 'v-to-convince', en: 'to convince', fr: 'convaincre', level: 'B2', example: 'I had to be convincing enough to make people follow me.' },
    { id: 'v-to-go-grocery-shopping', en: 'to go grocery shopping', fr: 'faire les courses (alimentaires)', level: 'B2', example: 'We usually go grocery shopping on Saturday morning.' },
    { id: 'v-a-performance', en: 'a performance', fr: 'une représentation, un spectacle ; une performance', level: 'B2', example: "The band's performance was outstanding." },
    { id: 'v-to-suffer', en: 'to suffer (from)', fr: 'souffrir (de)', level: 'B2', example: 'I was suffering from the heat all day.' },
    { id: 'v-to-howl', en: 'to howl', fr: 'hurler (loup, chien, vent)', level: 'B2+', example: 'The dog howls every time it hears the siren.' },
    { id: 'v-a-breeder', en: 'a breeder', fr: 'un éleveur (d\'animaux)', level: 'B2', example: 'We bought our puppy from a breeder in Poland.' },
    { id: 'v-to-digitalize', en: 'to digitalize', fr: 'numériser, digitaliser', level: 'B2', example: 'We are digitalizing all our batch records.' },
    { id: 'v-to-retrieve', en: 'to retrieve', fr: 'récupérer, retrouver (des données, un objet)', level: 'B2+', example: 'The system lets you retrieve old results in seconds.' },
    { id: 'v-frustrating', en: 'frustrating', fr: 'frustrant, agaçant', level: 'B2', example: "It's frustrating when the software crashes during an analysis." },
  ],
  pronunciation: [
    { id: 'p-minutes', word: 'minutes', guide: 'MIN-its', tip: 'Deux syllabes seulement, et le « u » se réduit à un « i » bref.', example: 'The meeting lasted forty minutes.' },
    { id: 'p-prepare', word: 'prepare', guide: 'pri-PAIR', tip: "L'accent est sur la 2e syllabe, qui rime avec « air ».", example: 'We need to prepare the samples.' },
    { id: 'p-develop', word: 'develop', guide: 'di-VEL-uhp', tip: "Accent sur « VEL ». Le dernier « o » est presque avalé.", example: 'We develop new diagnostic tests.' },
    { id: 'p-answer', word: 'answer', guide: 'AN-ser', tip: 'Le « w » est muet.', example: "I don't know the answer." },
  ],
  corrections: [
    {
      kind: 'fix', id: 'fix-0702-01', wrong: 'I had to be enough convincing to make people follow.',
      answers: ['I had to be convincing enough to make people follow.'],
      explanation: '« Enough » se place APRÈS un adjectif ou un adverbe (convincing enough, fast enough) mais AVANT un nom (enough time).',
      tags: ['word-order'],
    },
    {
      kind: 'fix', id: 'fix-0702-02', wrong: 'I was suffering of the temperature.',
      answers: ['I was suffering from the temperature.', 'I was suffering from the heat.'],
      explanation: 'Souffrir DE = suffer FROM.',
      tags: ['prepositions'],
    },
    {
      kind: 'fix', id: 'fix-0702-03', wrong: "It's a busy city with a lot of things to make.",
      answers: ["It's a busy city with a lot of things to do."],
      explanation: 'Les activités se « do » : things to do, a lot to do. « Make » = fabriquer, créer.',
      tags: ['make-do'],
    },
    {
      kind: 'fix', id: 'fix-0702-04', wrong: 'The dog came from a country of Eastern Europe.',
      answers: ['The dog came from an Eastern European country.'],
      explanation: "En anglais, l'adjectif (ou le nom-adjectif) se place avant le nom : an Eastern European country. Attention : « an » devant un son voyelle.",
      tags: ['word-order'],
    },
    {
      kind: 'fix', id: 'fix-0702-05', wrong: 'They are responsible of performing the analysis.',
      answers: ['They are responsible for performing the analysis.'],
      explanation: 'Responsable DE = responsible FOR (+ nom ou verbe en -ing).',
      tags: ['prepositions', 'gerund-inf'],
    },
    {
      kind: 'fix', id: 'fix-0702-06', wrong: 'He has a lot of ideas and thinkings.',
      answers: ['He has a lot of ideas and thoughts.'],
      explanation: 'Le nom de « think » est « thought » (une pensée). « Thinking » = la réflexion, indénombrable.',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0702-07', wrong: 'Last year, we had some competitors that have developed similar services.',
      answers: ['Last year, we had some competitors that developed similar services.', 'Last year, we had some competitors which developed similar services.'],
      explanation: '« Last year » = période terminée → past simple, y compris dans la relative.',
      tags: ['past-simple', 'pp-vs-ps'],
    },
    {
      kind: 'fix', id: 'fix-0702-08', wrong: 'If in doing my job I can help people, I am happy.',
      answers: ['If by doing my job I can help people, I am happy.', "If by doing my job I can help people, I'm happy."],
      explanation: 'Le moyen (« en faisant ») se traduit par BY + -ing : by doing, by using, by heating.',
      tags: ['prepositions', 'gerund-inf'],
    },
    {
      kind: 'fix', id: 'fix-0702-09', wrong: 'Each persons in the team has a role.',
      answers: ['Each person in the team has a role.', 'Every person in the team has a role.'],
      explanation: '« Each » et « every » sont toujours suivis d\'un nom SINGULIER et d\'un verbe au singulier. Au pluriel : all the people.',
      tags: ['quantifiers'],
    },
    {
      kind: 'fix', id: 'fix-0702-10', wrong: 'If in the future the need for what we are producing will still be there, we will grow.',
      answers: ['If in the future the need for what we are producing is still there, we will grow.'],
      explanation: 'Après « if » (et when, as soon as…), on utilise le PRÉSENT pour parler du futur. Jamais « will » dans la subordonnée.',
      tags: ['conditionals', 'future'],
    },
    {
      kind: 'fix', id: 'fix-0702-11', wrong: 'The new site is very more convenient.',
      answers: ['The new site is way more convenient.', 'The new site is much more convenient.', 'The new site is significantly more convenient.', 'The new site is far more convenient.', 'The new site is a lot more convenient.'],
      explanation: '« Very » ne modifie pas un comparatif. Utilise much / far / a lot / significantly / (familier) way + comparatif.',
      tags: ['comparison'],
    },
    {
      kind: 'fix', id: 'fix-0702-12', wrong: "We work seriously but we don't take us very seriously.",
      answers: ["We work seriously but we don't take ourselves very seriously.", "We work seriously but we don't take ourselves too seriously."],
      explanation: 'Quand le sujet et le complément sont la même personne : pronom réfléchi (ourselves, myself, themselves).',
      tags: ['pronouns'],
    },
  ],
  notes: [
    {
      title: 'Each person / Every person / All the people',
      explanation: '« Each » insiste sur chaque individu pris séparément, « every » sur l\'ensemble sans exception ; les deux + singulier. « All (the) » + pluriel.',
      examples: [
        { en: 'Each person has a different role.' },
        { en: 'Every person in the building must wear a badge.' },
        { en: 'All the people in the lab were trained.' },
      ],
    },
    {
      title: 'Way more / significantly more',
      explanation: 'Pour renforcer un comparatif : way (familier), much, far, a lot, significantly (formel). Jamais « very more ».',
      examples: [
        { en: "It's way more convenient." },
        { en: 'The new process is significantly more efficient.' },
      ],
    },
  ],
  grammarLinks: ['g-most', 'g-comparison', 'g-conditionals'],
}
