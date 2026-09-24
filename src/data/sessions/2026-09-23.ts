import type { CourseSession } from '../../types'

export const session: CourseSession = {
  id: 'c-2026-09-23',
  date: '2026-09-23',
  title: 'Making Assumptions and Formulating Suggestions',
  module: 'assumptions',
  vocabulary: [
    { id: 'v-a-celebration', en: 'a celebration', fr: 'une fête, une célébration', level: 'B2', example: 'There was a big celebration in the city centre.' },
    { id: 'v-to-do-the-laundry', en: 'to do the laundry', fr: 'faire la lessive', level: 'B2', example: 'I do the laundry on Sundays.' },
    { id: 'v-an-elevation', en: 'an elevation', fr: 'une altitude, une élévation', level: 'B2+', example: 'The village is at an elevation of 1,500 metres.' },
    { id: 'v-to-get-the-word-out', en: 'to get the word out', fr: 'faire passer le mot, faire connaître', level: 'C1', example: 'We used social media to get the word out about the event.' },
    { id: 'v-to-blend-in', en: 'to blend in', fr: 'se fondre dans la masse, s\'intégrer', level: 'B2+', example: 'He tried to blend in with the locals.' },
    { id: 'v-in-the-long-run', en: 'in the long run / in the long term', fr: 'à long terme, à la longue', level: 'B2+', example: 'In the long run, the investment will pay off.' },
    { id: 'v-solar-powered', en: 'solar-powered', fr: 'à énergie solaire', level: 'B2', example: 'They installed solar-powered lamps in the garden.' },
    { id: 'v-to-imply', en: 'to imply', fr: 'sous-entendre, laisser entendre ; impliquer (entraîner)', level: 'B2+', example: 'Are you implying that I made a mistake?' },
    { id: 'v-food-poisoning', en: 'food poisoning', fr: 'une intoxication alimentaire', level: 'B2', example: 'Half the guests got food poisoning.' },
    { id: 'v-to-ban', en: 'to ban', fr: 'interdire', level: 'B2', example: 'Some schools have banned phones during recess.' },
    { id: 'v-a-security-concern', en: 'a security concern', fr: 'un problème / une préoccupation de sécurité', level: 'B2+', example: 'Using personal USB sticks is a major security concern.' },
    { id: 'v-a-recess', en: 'a recess', fr: 'une récréation (US) ; une pause, des vacances parlementaires', level: 'B2+', example: 'Children need to play outside during recess.' },
    { id: 'v-social-skills', en: 'social skills', fr: 'les compétences sociales', level: 'B2', example: 'Phones can affect students\' social skills.' },
    { id: 'v-implicated-involved', en: 'to be implicated vs to be involved', fr: 'être impliqué (dans qqch de mal) vs être impliqué, participer', level: 'C1', example: 'He was implicated in the fraud. — She is involved in the new project.' },
  ],
  pronunciation: [
    { id: 'p-current', word: 'current', guide: 'KUR-uhnt', tip: 'Accent sur la 1re syllabe ; le « u » est comme dans « hurt ».', example: 'The current situation is difficult.' },
    { id: 'p-emergency', word: 'emergency', guide: 'ih-MUR-juhn-see', tip: 'Accent sur « MUR ».', example: 'In case of emergency, call 112.' },
  ],
  corrections: [
    {
      kind: 'fix', id: 'fix-0923-01', wrong: 'We begun building the Jurassic Park Lego set.',
      answers: ['We began building the Jurassic Park Lego set.', 'We began building Jurassic Park Lego set.', 'We began to build the Jurassic Park Lego set.'],
      explanation: 'Begin → BEGAN (past simple) → BEGUN (participe passé : we have begun).',
      tags: ['past-simple', 'irregular'],
    },
    {
      kind: 'fix', id: 'fix-0923-02', wrong: 'There had free concerts happening around the city.',
      answers: ['There were free concerts happening around the city.'],
      explanation: '« Il y avait » = there WAS / there WERE (selon le nombre). Jamais « there had ».',
      tags: ['past-simple'],
    },
    {
      kind: 'fix', id: 'fix-0923-03', wrong: 'They are a very politic engaged artist.',
      answers: ['They are a very politically engaged artist.', 'They are a very politically engaged performer.'],
      explanation: 'Un adverbe (politically) modifie un adjectif (engaged). « Politic » n\'est pas un adjectif courant ; l\'adjectif est « political ».',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0923-04', wrong: 'He is not agree with the content of the meeting.',
      answers: ["He doesn't agree with the content of the meeting.", 'He does not agree with the content of the meeting.', 'He disagrees with the content of the meeting.'],
      explanation: '« Agree » est un VERBE : he doesn\'t agree (✗ he is not agree).',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0923-05', wrong: 'He disagrees with the topics discussed during the meeting and he said nothing since.',
      answers: ["He disagrees with the topics discussed during the meeting and he hasn't said anything since.", "He disagrees with the topics discussed during the meeting and he has said nothing since.", "He disagrees with the topics discussed during the meeting and he hasn't said anything since then."],
      explanation: '« Since » (depuis, jusqu\'à maintenant) → PRESENT PERFECT.',
      tags: ['present-perfect', 'since-for'],
    },
    {
      kind: 'fix', id: 'fix-0923-06', wrong: 'It can affect the social competences of students.',
      answers: ["It can affect students' social skills.", 'It can affect the social skills of students.'],
      explanation: '« Compétences » (savoir-faire) = skills. « Competence » existe mais est plus technique.',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0923-07', wrong: 'It might be related to the fact he has a bigger issue to deal.',
      answers: ['It might be related to him having a bigger issue to deal with.', 'It might be related to the fact that he has a bigger issue to deal with.'],
      explanation: 'DEAL WITH (gérer) garde sa préposition, même en fin de phrase.',
      tags: ['prepositions', 'modals-deduction'],
    },
  ],
  notes: [
    {
      title: 'To begin > began > begun',
      explanation: 'Verbe irrégulier : base, prétérit, participe passé.',
      examples: [
        { en: 'We begin at nine.' },
        { en: 'We began building the set yesterday.' },
        { en: 'We have already begun.' },
      ],
    },
    {
      title: 'To be implicated vs to be involved',
      explanation: '« Implicated » = impliqué dans quelque chose de négatif (un scandale, un crime). « Involved » = neutre, participer à.',
      examples: [
        { en: 'Two managers were implicated in the scandal.' },
        { en: 'I am involved in the new vaccine project.' },
      ],
    },
  ],
  grammarLinks: ['g-past-simple', 'g-modals-deduction', 'g-confusing'],
}
