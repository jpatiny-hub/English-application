import type { CourseSession } from '../../types'

export const session: CourseSession = {
  id: 'c-2026-07-29',
  date: '2026-07-29',
  title: 'Listing Steps of a Process or Procedure',
  module: 'process',
  vocabulary: [
    { id: 'v-to-ease-into', en: 'to ease into something', fr: "s'habituer progressivement à, commencer en douceur", level: 'B2+', example: 'Ease into your training with short runs.' },
    { id: 'v-to-comment-on', en: 'to comment on', fr: 'commenter, faire des remarques sur', level: 'B2', example: 'Could you comment on the results?', note: '✗ comment the results' },
    { id: 'v-eye-catching', en: 'eye-catching', fr: 'accrocheur, qui attire l\'œil', level: 'B2', example: 'We need an eye-catching poster for the event.' },
    { id: 'v-to-confirm', en: 'to confirm', fr: 'confirmer', level: 'B2', example: 'Please confirm your attendance by Friday.' },
    { id: 'v-video-editing', en: 'video editing', fr: 'le montage vidéo', level: 'B2', example: 'Video editing takes much longer than filming.' },
    { id: 'v-to-gather', en: 'to gather', fr: 'rassembler, recueillir ; se rassembler', level: 'B2', example: 'You have to gather information for the episode.' },
    { id: 'v-to-send-out-invitations', en: 'to send out invitations', fr: 'envoyer les invitations', level: 'B2', example: 'We sent out the invitations three weeks in advance.' },
    { id: 'v-power-outage', en: 'a power outage / an electrical outage', fr: 'une panne de courant', level: 'B2', example: 'A power outage stopped the freezers overnight.' },
    { id: 'v-speed', en: 'speed', fr: 'la vitesse', level: 'B2', example: 'Increase the speed of the centrifuge gradually.' },
    { id: 'v-gradually', en: 'gradually', fr: 'progressivement', level: 'B2', example: 'Gradually increase your running distance.' },
  ],
  pronunciation: [
    { id: 'p-parade', word: 'parade', guide: 'puh-RAID', tip: 'Accent sur la 2e syllabe, qui rime avec « made ».', example: 'The parade went through the city centre.' },
    { id: 'p-idea', word: 'idea', guide: 'eye-DEE-uh', tip: 'Trois syllabes, accent sur « DEE ». Ne pas dire « i-dé ».', example: "That's a great idea." },
    { id: 'p-comfortable', word: 'comfortable', guide: 'KUMF-ter-buhl', tip: 'Accent sur la 1re syllabe ; le « or » central disparaît presque : 3 syllabes.', example: 'Make sure you are comfortable in your shoes.' },
    { id: 'p-ready', word: 'ready', guide: 'RED-ee', tip: '« ea » se prononce comme le « e » de « red ».', example: 'Are you ready to start?' },
    { id: 'p-tired', word: 'tired', guide: 'TY-erd', tip: 'Le « i » se prononce « aï ».', example: 'I was really tired after the run.' },
  ],
  corrections: [
    {
      kind: 'fix', id: 'fix-0729-01', wrong: 'We just drank a glass on terraces and at bars around the city.',
      answers: ['We just had drinks on terraces and at bars around the city.', 'We just had a drink on terraces and at bars around the city.'],
      explanation: '« Boire un verre » = have a drink / have drinks (ou « get a drink »).',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0729-02', wrong: 'The people wearing costumes were walking in front of the public.',
      answers: ['The people wearing costumes were walking in front of the audience.', 'The people wearing costumes were walking in front of the crowd.', 'The people wearing costumes were walking in front of the spectators.'],
      explanation: 'Le public d\'un spectacle = the audience (ou the crowd dans la rue). « The public » = la population en général.',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0729-03', wrong: 'The word was used for the first time in 1830s.',
      answers: ['The word was used for the first time in the 1830s.'],
      explanation: 'Les décennies prennent l\'article : in the 1830s, in the nineties.',
      tags: ['articles'],
    },
    {
      kind: 'fix', id: 'fix-0729-04', wrong: 'You have to gather informations for the episode.',
      answers: ['You have to gather information for the episode.'],
      explanation: '« Information » est indénombrable : jamais de -s.',
      tags: ['countable'],
    },
    {
      kind: 'fix', id: 'fix-0729-05', wrong: 'When you are satisfied of the writing, you can move on to the editing.',
      answers: ['When you are satisfied with the writing, you can move on to the editing.'],
      explanation: 'Satisfait DE = satisfied WITH (comme happy with, pleased with).',
      tags: ['prepositions'],
    },
    {
      kind: 'fix', id: 'fix-0729-06', wrong: 'You have to choose people who will participate to the meeting.',
      answers: ['You have to choose people who will participate in the meeting.', 'You have to choose people who will take part in the meeting.', 'You have to choose people who will attend the meeting.'],
      explanation: 'Participate IN something.',
      tags: ['prepositions'],
    },
    {
      kind: 'fix', id: 'fix-0729-07', wrong: "It's good to have a resume of the meeting.",
      answers: ["It's good to have a summary of the meeting.", 'It is good to have a summary of the meeting.'],
      explanation: 'Faux-ami : « un résumé » = a summary. « A résumé/resume » = un CV (en américain).',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0729-08', wrong: 'We need to know how much people to invite to the event.',
      answers: ['We need to know how many people to invite to the event.'],
      explanation: '« People » est dénombrable pluriel → how MANY. « How much » = indénombrable (how much time, how much money).',
      tags: ['countable'],
    },
    {
      kind: 'fix', id: 'fix-0729-09', wrong: 'We need a checklist to know what we need to make.',
      answers: ['We need a checklist to know what we need to do.'],
      explanation: 'Les tâches : DO (what we need to do).',
      tags: ['make-do'],
    },
    {
      kind: 'fix', id: 'fix-0729-10', wrong: 'You need to make runs and gradually increase your running distance.',
      answers: ['You need to go for runs and gradually increase your running distance.', 'You need to go running and gradually increase your running distance.'],
      explanation: 'Aller courir = go for a run / go running.',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0729-11', wrong: 'Make sure you are confortable in them.',
      answers: ['Make sure you are comfortable in them.', "Make sure you're comfortable in them."],
      explanation: 'Orthographe anglaise : comfortable (avec un M).',
      tags: ['spelling'],
    },
    {
      kind: 'fix', id: 'fix-0729-12', wrong: 'I thought that run was very easy.',
      answers: ['I thought running was very easy.', 'I thought that running was very easy.'],
      explanation: 'Une activité utilisée comme sujet prend la forme -ing (le gérondif) : Running is easy. Swimming is good for you.',
      tags: ['gerund-inf'],
    },
    {
      kind: 'fix', id: 'fix-0729-13', wrong: 'You might not attain your training goal.',
      answers: ['You might not reach your training goal.', 'You might not achieve your training goal.', 'You might not meet your training goal.'],
      explanation: 'Atteindre un objectif = reach / achieve / meet a goal. « Attain » existe mais est très soutenu.',
      tags: ['collocations'],
    },
  ],
  notes: [
    {
      title: 'To participate in something',
      explanation: 'Participate IN / take part IN / be involved IN. Pour une réunion ou un événement, on peut aussi dire simplement « attend » (sans préposition).',
      examples: [
        { en: 'Ten labs participated in the study.' },
        { en: 'Who will attend the meeting?', note: '✗ attend to the meeting' },
      ],
    },
  ],
  grammarLinks: ['g-prepositions', 'g-countable'],
}
