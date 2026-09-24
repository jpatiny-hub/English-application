import type { CourseSession } from '../../types'

export const session: CourseSession = {
  id: 'c-2026-07-15',
  date: '2026-07-15',
  title: 'Making Assumptions and Formulating Suggestions',
  module: 'assumptions',
  vocabulary: [
    { id: 'v-to-recover', en: 'to recover', fr: 'se rétablir, guérir ; récupérer', level: 'B2', example: 'It took him six months to recover from his knee injury.' },
    { id: 'v-to-enjoy', en: 'to enjoy', fr: 'apprécier, aimer', level: 'B2', example: 'I really enjoy running in the morning.', note: 'Toujours suivi de -ing (enjoy running) ou d\'un complément (enjoy the film, enjoy yourself). ✗ I enjoy to run.' },
    { id: 'v-an-injury', en: 'an injury', fr: 'une blessure', level: 'B2', example: 'He had a serious injury last season.' },
    { id: 'v-to-get-injured', en: 'to get injured', fr: 'se blesser', level: 'B2', example: 'He got injured during a match and broke his knee.' },
  ],
  pronunciation: [
    { id: 'p-arranged', word: 'arranged', guide: 'uh-RAYNJD', tip: 'Une seule syllabe accentuée « RAYNJD » : le -ed ne forme pas de syllabe.', example: 'The meeting was arranged for Monday.' },
    { id: 'p-knee', word: 'knee', guide: 'nee', tip: 'Le « k » devant « n » est muet (knee, know, knife, knowledge).', example: 'He broke his knee.' },
    { id: 'p-pleasure', word: 'pleasure', guide: 'PLEZH-er', tip: 'Le « s » se prononce comme le « j » de « jour ».', example: 'He plays for pleasure.' },
  ],
  corrections: [
    {
      kind: 'fix', id: 'fix-0715-01', wrong: 'He went to France with the father of his girlfriend.',
      answers: ["He went to France with his girlfriend's father."],
      explanation: 'Pour les personnes, on préfère le génitif saxon : my girlfriend\'s father plutôt que « the father of my girlfriend ».',
      tags: ['word-order'],
    },
    {
      kind: 'fix', id: 'fix-0715-02', wrong: 'The players must find agents when they have 16 years.',
      answers: ['The players must find agents when they turn 16.', 'The players must find agents when they turn 16 years old.', 'The players must find agents when they are 16.', 'The players must find agents when they are 16 years old.'],
      explanation: "L'âge s'exprime avec BE (I am 40) ; « avoir X ans » (anniversaire) = turn X.",
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0715-03', wrong: 'He got injured during a match and broke himself the knee.',
      answers: ['He got injured during a match and broke his knee.'],
      explanation: 'Pour les parties du corps, l\'anglais utilise le possessif : break YOUR leg, wash YOUR hands.',
      tags: ['pronouns'],
    },
    {
      kind: 'fix', id: 'fix-0715-04', wrong: "That's why I don't look soccer matches.",
      answers: ["That's why I don't watch soccer matches.", "That's why I don't watch football matches."],
      explanation: 'Regarder un match, un film, la télé = WATCH. « Look at » = poser les yeux sur quelque chose d\'immobile.',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0715-05', wrong: 'He plays for the pleasure.',
      answers: ['He plays for pleasure.', 'He plays for fun.'],
      explanation: 'Expression figée sans article : for pleasure, for fun, for work.',
      tags: ['articles'],
    },
    {
      kind: 'fix', id: 'fix-0715-06', wrong: 'The discussion is about the utilisation of cell phones in schools.',
      answers: ['The discussion is about the use of cell phones in schools.', 'The discussion is about the use of mobile phones in schools.'],
      explanation: '« Utilisation » existe mais sonne très technique ; « the use of » est le choix naturel.',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0715-07', wrong: "It wasn't as strict than the other school.",
      answers: ["It wasn't as strict as the other school."],
      explanation: 'Comparaison d\'égalité : AS + adjectif + AS. « Than » s\'utilise uniquement avec un comparatif (stricter than).',
      tags: ['comparison'],
    },
    {
      kind: 'fix', id: 'fix-0715-08', wrong: "The manager doesn't make a correct planning.",
      answers: ["The manager doesn't create a proper project timeline.", "The manager doesn't make a proper plan.", "The manager doesn't create a proper schedule.", "The manager doesn't make a proper schedule.", "The manager doesn't draw up a proper schedule."],
      explanation: 'Faux-ami : « un planning » = a schedule / a timeline / a plan. « Correct » pour dire « convenable » = proper.',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0715-09', wrong: 'There are not enough persons to complete the project.',
      answers: ['There are not enough people to complete the project.', "There aren't enough people to complete the project."],
      explanation: '« People » est le pluriel naturel de « person ».',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0715-10', wrong: 'He should concentrate himself more precisely on each task.',
      answers: ['He should focus more precisely on each task.', 'He should concentrate more precisely on each task.'],
      explanation: '« Se concentrer » n\'est pas pronominal en anglais : focus on / concentrate on.',
      tags: ['pronouns'],
    },
    {
      kind: 'fix', id: 'fix-0715-11', wrong: 'He should have a discussion with each people.',
      answers: ['He should have a discussion with each person.', 'He should have a discussion with every person.', 'He should have a discussion with everyone.'],
      explanation: '« Each » + nom singulier : each person.',
      tags: ['quantifiers'],
    },
  ],
  notes: [
    {
      title: 'As + adjective + as (comparaison d\'égalité)',
      explanation: 'Affirmatif : as + adj + as. Négatif : not as + adj + as (= moins… que). Le 2e « as » est suivi d\'un nom ou d\'un pronom possessif.',
      examples: [
        { en: 'My house is not as beautiful as your house.' },
        { en: 'My car is not as cheap as yours / your car.' },
      ],
    },
  ],
  grammarLinks: ['g-comparison', 'g-suggestions'],
}
