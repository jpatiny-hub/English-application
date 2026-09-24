import type { CourseSession } from '../../types'

export const session: CourseSession = {
  id: 'c-2026-09-02',
  date: '2026-09-02',
  title: 'Requesting and Giving Opinions',
  module: 'opinions',
  vocabulary: [
    { id: 'v-a-delay', en: 'a delay', fr: 'un retard', level: 'B2', example: 'There was a two-week delay in the delivery.', note: 'Faux-ami : « un délai » (temps imparti) = a deadline / a time frame.' },
    { id: 'v-a-trail', en: 'a trail', fr: 'un sentier ; une piste, une trace', level: 'B2', example: 'We hiked a beautiful trail in the Ardennes.' },
    { id: 'v-a-venue', en: 'a venue', fr: 'un lieu (d\'événement), une salle', level: 'B2', example: 'Choosing the right venue is crucial for the event.' },
    { id: 'v-a-fundraising-event', en: 'a fundraising event', fr: 'un événement caritatif, une collecte de fonds', level: 'B2', example: 'We are organising a fundraising event for the hospital.' },
    { id: 'v-seamlessly', en: 'seamlessly', fr: 'sans accroc, de façon fluide', level: 'B2+', example: 'The new software integrates seamlessly with our system.' },
    { id: 'v-to-go-over-budget', en: 'to go over budget', fr: 'dépasser le budget', level: 'B2+', example: 'The project went over budget by 15%.' },
    { id: 'v-to-come-in-under-budget', en: 'to come in under budget', fr: 'rester en dessous du budget', level: 'C1', example: 'Thanks to careful planning, we came in under budget.' },
    { id: 'v-to-stretch-the-budget', en: 'to stretch the budget', fr: 'faire durer / étirer le budget', level: 'C1', example: 'We had to stretch the budget to include catering.' },
    { id: 'v-to-accommodate', en: 'to accommodate', fr: 'accueillir, loger ; s\'adapter à, satisfaire', level: 'B2+', example: 'The hall can accommodate 250 people.' },
    { id: 'v-to-be-worth-considering', en: 'to be worth considering', fr: 'mériter d\'être envisagé', level: 'B2+', example: 'The riverside hotel is worth considering.' },
    { id: 'v-a-proven-track-record', en: 'a proven track record', fr: 'des résultats probants, une expérience reconnue', level: 'C1', example: 'The caterer has a proven track record with large events.' },
    { id: 'v-an-advancement', en: 'an advancement', fr: 'une avancée, un progrès (= an improvement)', level: 'B2+', example: 'The event showcases advancements in the tech sector.' },
    { id: 'v-pros-and-cons', en: 'pros and cons / upsides and downsides', fr: 'avantages et inconvénients', level: 'B2', example: 'Let\'s weigh up the pros and cons.' },
  ],
  pronunciation: [
    { id: 'p-issue', word: 'issue', guide: 'ISH-oo', tip: 'Le « ss » se prononce « ch ». Deux syllabes.', example: 'We have some issues to solve.' },
  ],
  corrections: [
    {
      kind: 'fix', id: 'fix-0902-01', wrong: 'Last weekend, I have discovered a lot of new things.',
      answers: ['Last weekend, I discovered a lot of new things.'],
      explanation: '« Last weekend » = période terminée → PAST SIMPLE.',
      tags: ['past-simple', 'pp-vs-ps'],
    },
    {
      kind: 'fix', id: 'fix-0902-02', wrong: 'We had two anniversaries to attend.',
      answers: ['We had two birthdays to attend.', 'We had two birthday parties to attend.'],
      explanation: 'Faux-ami : un anniversaire (de naissance) = a birthday. « Anniversary » = anniversaire de mariage, d\'un événement.',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0902-03', wrong: 'There were much more people and more volunteers.',
      answers: ['There were a lot more people and more volunteers.', 'There were many more people and more volunteers.', 'There were far more people and more volunteers.'],
      explanation: 'Devant un nom pluriel dénombrable : MANY more / a lot more / far more. « Much more » = indénombrable (much more time).',
      tags: ['countable', 'comparison'],
    },
    {
      kind: 'fix', id: 'fix-0902-04', wrong: "We didn't assist to this party.",
      answers: ["We didn't attend this party.", "We didn't go to this party.", "We didn't attend that party.", "We didn't go to that party."],
      explanation: 'Faux-ami : « assister à » = attend (sans préposition). « Assist » = aider.',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0902-05', wrong: 'My daughters went back at school.',
      answers: ['My daughters went back to school.'],
      explanation: 'Mouvement vers un lieu : TO (go to school, go back to school).',
      tags: ['prepositions'],
    },
    {
      kind: 'fix', id: 'fix-0902-06', wrong: 'Humanoid robots resemble too much to humans.',
      answers: ['Humanoid robots look too much like humans.', 'Humanoid robots resemble humans too much.'],
      explanation: '« Resemble » sans préposition, ou plus naturel : look like. Et « too much » se place en fin de groupe.',
      tags: ['prepositions', 'word-order'],
    },
    {
      kind: 'fix', id: 'fix-0902-07', wrong: 'Actually, these types of robots have a lot of limitations.',
      answers: ['Currently, these types of robots have a lot of limitations.', 'At the moment, these types of robots have a lot of limitations.', 'At present, these types of robots have a lot of limitations.', 'Nowadays, these types of robots have a lot of limitations.'],
      explanation: 'Faux-ami : « actuellement » = currently / at the moment. « Actually » = en fait, en réalité.',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0902-08', wrong: 'There are already some robots who help in hospitals.',
      answers: ['There are already some robots that help in hospitals.', 'There are already some robots which help in hospitals.'],
      explanation: 'WHO pour les personnes, THAT/WHICH pour les choses (et les robots !).',
      tags: ['relatives'],
    },
    {
      kind: 'fix', id: 'fix-0902-09', wrong: 'The goal of this event is to show advancements of the tech sector.',
      answers: ['The goal of this event is to show advancements in the tech sector.', 'The goal of this event is to show advancement in the tech sector.'],
      explanation: 'Progrès DANS un domaine = advancement(s) IN.',
      tags: ['prepositions'],
    },
  ],
  notes: [
    {
      title: 'Good and bad things',
      explanation: 'Plusieurs façons de parler des avantages et inconvénients, du plus courant au plus soutenu.',
      examples: [
        { en: 'advantages and disadvantages' },
        { en: 'pros and cons' },
        { en: 'positive and negative aspects' },
        { en: 'upsides and downsides' },
        { en: 'benefits and drawbacks', note: 'Ajout pour aller vers le C1.' },
      ],
    },
  ],
  grammarLinks: ['g-pp-vs-ps', 'g-false-friends', 'g-relatives'],
}
