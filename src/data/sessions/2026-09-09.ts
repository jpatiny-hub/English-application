import type { CourseSession } from '../../types'

export const session: CourseSession = {
  id: 'c-2026-09-09',
  date: '2026-09-09',
  title: 'Requesting and Giving Opinions',
  module: 'opinions',
  vocabulary: [
    { id: 'v-a-caterer', en: 'a caterer', fr: 'un traiteur', level: 'B2', example: 'The caterer will provide lunch for 80 people.' },
    { id: 'v-to-bike', en: 'to bike', fr: 'faire du vélo, aller à vélo', level: 'B2', example: 'I bike to work when the weather is good.' },
    { id: 'v-a-theatre-play', en: 'a theatre play / a play', fr: 'une pièce de théâtre', level: 'B2', example: 'We went to see a play at the weekend.' },
    { id: 'v-fictional', en: 'fictional', fr: 'fictif, imaginaire', level: 'B2', example: 'The company in the video is fictional.' },
    { id: 'v-inflatable', en: 'inflatable', fr: 'gonflable', level: 'B2', example: 'They rented an inflatable castle for the party.' },
    { id: 'v-a-suspension-bridge', en: 'a suspension bridge', fr: 'un pont suspendu', level: 'B2', example: 'The Golden Gate is a suspension bridge.' },
    { id: 'v-work-life-balance', en: 'work-life balance', fr: "l'équilibre vie pro / vie privée", level: 'B2', example: 'Remote work has improved my work-life balance.' },
    { id: 'v-work-ethic', en: 'work ethic', fr: "l'éthique de travail, le sérieux au travail", level: 'B2+', example: 'She has a strong work ethic.' },
    { id: 'v-a-tendency', en: 'a tendency', fr: 'une tendance (à)', level: 'B2', example: 'He has a tendency to change his mind all the time.' },
    { id: 'v-convenient', en: 'convenient', fr: 'pratique, commode', level: 'B2', example: 'Working from home is more convenient for me.', note: 'Faux-ami : « convenable » = suitable / appropriate / decent.' },
  ],
  pronunciation: [
    { id: 'p-even', word: 'even', guide: 'EE-vuhn', tip: 'Le 1er « e » est long (« i » allongé) ; le 2e est presque muet.', example: "It's even better than I expected." },
  ],
  corrections: [
    {
      kind: 'fix', id: 'fix-0909-01', wrong: 'We will use it for the next week\'s project.',
      answers: ["We will use it for next week's project.", "We'll use it for next week's project."],
      explanation: 'Pas d\'article devant « next week\'s / last year\'s » : le génitif joue déjà le rôle de déterminant.',
      tags: ['articles'],
    },
    {
      kind: 'fix', id: 'fix-0909-02', wrong: 'He will no more be our boss.',
      answers: ['He will no longer be our boss.', "He won't be our boss anymore.", "He won't be our boss any longer.", 'He will not be our boss anymore.'],
      explanation: '« Ne… plus » (dans le temps) = no longer / not… anymore. « No more » = plus de (quantité) : no more coffee.',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0909-03', wrong: "I'm in the process to move.",
      answers: ["I'm in the process of moving.", 'I am in the process of moving.'],
      explanation: 'IN THE PROCESS OF + -ing (préposition + -ing).',
      tags: ['gerund-inf'],
    },
    {
      kind: 'fix', id: 'fix-0909-04', wrong: 'She is turning 80 years old the 25th of September.',
      answers: ['She is turning 80 years old on the 25th of September.', 'She is turning 80 on the 25th of September.', "She's turning 80 on the 25th of September.", "She's turning 80 years old on the 25th of September."],
      explanation: 'Une date précise : ON (on the 25th, on Monday). Et le présent continu pour un événement futur programmé.',
      tags: ['prepositions', 'future'],
    },
    {
      kind: 'fix', id: 'fix-0909-05', wrong: 'We had a great moment at that party.',
      answers: ['We had a great time at that party.'],
      explanation: '« Passer un bon moment » = have a great / good time.',
      tags: ['collocations'],
    },
    {
      kind: 'fix', id: 'fix-0909-06', wrong: 'On Saturday, my grandson has come to my house.',
      answers: ['On Saturday, my grandson came to my house.'],
      explanation: '« On Saturday » (passé) = moment précis terminé → PAST SIMPLE. Le passé composé français ≠ present perfect.',
      tags: ['past-simple', 'pp-vs-ps'],
    },
    {
      kind: 'fix', id: 'fix-0909-07', wrong: 'My daughter has come home yesterday.',
      answers: ['My daughter came home yesterday.'],
      explanation: '« Yesterday » → PAST SIMPLE, toujours.',
      tags: ['past-simple', 'pp-vs-ps'],
    },
    {
      kind: 'fix', id: 'fix-0909-08', wrong: 'I change my opinion all the time.',
      answers: ['I change my mind all the time.'],
      explanation: '« Changer d\'avis » = change your MIND.',
      tags: ['collocations'],
    },
    {
      kind: 'fix', id: 'fix-0909-09', wrong: 'About 50% are upset to come back to the office.',
      answers: ['About 50% are upset about coming back to the office.', 'About 50% are unhappy about coming back to the office.'],
      explanation: 'Upset ABOUT + -ing (préposition + -ing).',
      tags: ['prepositions', 'gerund-inf'],
    },
    {
      kind: 'fix', id: 'fix-0909-10', wrong: 'Working remotely allows to be more efficient.',
      answers: ['Working remotely allows you to be more efficient.', 'Working remotely allows us to be more efficient.', 'Working remotely allows people to be more efficient.', 'Working remotely allows employees to be more efficient.', 'Working remotely makes it possible to be more efficient.'],
      explanation: '« Permettre de » : ALLOW + quelqu\'un + TO. L\'anglais exige un complément (you, us, people…). Sinon : make it possible to…',
      tags: ['gerund-inf'],
    },
    {
      kind: 'fix', id: 'fix-0909-11', wrong: 'We will save money on the long term.',
      answers: ['We will save money in the long term.', 'We will save money in the long run.', "We'll save money in the long term.", "We'll save money in the long run."],
      explanation: '« À long terme » = IN the long term / IN the long run.',
      tags: ['prepositions'],
    },
    {
      kind: 'fix', id: 'fix-0909-12', wrong: 'I never tried an electric bike before, but I would like to.',
      answers: ["I have never tried an electric bike before, but I would like to.", "I've never tried an electric bike before, but I would like to.", "I've never tried an electric bike before, but I'd like to.", "I have never tried an electric bike before, but I'd like to."],
      explanation: 'Expérience de vie jusqu\'à maintenant (never… before) → PRESENT PERFECT.',
      tags: ['present-perfect', 'pp-vs-ps'],
    },
  ],
  notes: [
    {
      title: 'Something / someone is becoming…',
      explanation: 'Le présent continu exprime un changement en cours : is becoming, is getting, is growing.',
      examples: [
        { en: 'He is becoming too heavy to throw in the pool.' },
        { en: 'Remote work is becoming the norm.' },
      ],
    },
    {
      title: "I'm in the process of + V-ing",
      explanation: 'Pour dire « je suis en train de » (processus long) : in the process of + -ing.',
      examples: [{ en: "We're in the process of recruiting a new lab manager." }],
    },
  ],
  grammarLinks: ['g-pp-vs-ps', 'g-present', 'g-gerund-inf'],
}
