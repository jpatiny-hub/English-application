import type { CourseSession } from '../../types'

export const session: CourseSession = {
  id: 'c-2026-07-22',
  date: '2026-07-22',
  title: 'Listing Steps of a Process or Procedure',
  module: 'process',
  vocabulary: [
    { id: 'v-to-install', en: 'to install', fr: 'installer', level: 'B2', example: 'The technician installed the new centrifuge yesterday.' },
    { id: 'v-to-pack', en: 'to pack', fr: 'faire ses bagages ; emballer', level: 'B2', example: "Don't forget to pack your sunscreen." },
    { id: 'v-household-chores', en: 'household chores', fr: 'les tâches ménagères', level: 'B2', example: 'We share the household chores at home.' },
    { id: 'v-to-throw-out', en: 'to throw out', fr: 'jeter (à la poubelle)', level: 'B2', example: 'Throw out any expired reagents.' },
    { id: 'v-from-time-to-time', en: 'from time to time', fr: 'de temps en temps', level: 'B2', example: 'From time to time, we check the calibration.' },
    { id: 'v-a-precaution', en: 'a precaution', fr: 'une précaution', level: 'B2', example: 'As a precaution, wear gloves at all times.' },
    { id: 'v-to-caramelize', en: 'to caramelize', fr: 'caraméliser', level: 'B2', example: 'Let the onions caramelize slowly.' },
    { id: 'v-to-resemble', en: 'to resemble', fr: 'ressembler à', level: 'B2+', example: 'The final product resembles a thick paste.', note: 'Pas de préposition : resemble something (✗ resemble to). Plus courant à l\'oral : look like.' },
    { id: 'v-to-digest', en: 'to digest', fr: 'digérer', level: 'B2', example: 'It takes time to digest all this information.' },
    { id: 'v-to-get-lost', en: 'to get lost', fr: 'se perdre', level: 'B2', example: 'We could get lost somewhere along the way.' },
    { id: 'v-a-handle', en: 'a handle', fr: 'une poignée, une anse', level: 'B2', example: 'Hold the flask by the handle.' },
    { id: 'v-optimal', en: 'optimal', fr: 'optimal', level: 'B2', example: 'The optimal temperature is 37 °C.' },
    { id: 'v-visual-aids', en: 'visual aids', fr: 'supports visuels', level: 'B2', example: 'Use visual aids to make your presentation clearer.' },
  ],
  pronunciation: [
    { id: 'p-culture', word: 'culture', guide: 'KUL-cher', tip: 'Accent sur la 1re syllabe ; « -ture » se prononce « cher ».', example: 'We heat the culture to 37 degrees.' },
    { id: 'p-precise', word: 'precise', guide: 'pri-SICE', tip: 'Accent sur la 2e syllabe, qui rime avec « nice ».', example: 'We need precise measurements.' },
    { id: 'p-details', word: 'details', guide: 'DEE-tails', tip: 'Accent sur la 1re syllabe (en américain) ; « tails » comme « queue ».', example: 'Check the details before you start.' },
  ],
  corrections: [
    {
      kind: 'fix', id: 'fix-0722-01', wrong: 'The global result was really good.',
      answers: ['The overall result was really good.'],
      explanation: '« Global » = mondial. Pour « le résultat global / d\'ensemble » : overall. ⚠️ Erreur récurrente : corrigée dans 4 séances (22.07, 29.07, 05.08, 12.08) !',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0722-02', wrong: "It's near of Liège.",
      answers: ["It's near Liège.", "It's close to Liège.", 'It is near Liège.', 'It is close to Liège.'],
      explanation: '« Near » s\'utilise sans préposition ; « close » demande « to ».',
      tags: ['prepositions'],
    },
    {
      kind: 'fix', id: 'fix-0722-03', wrong: 'We need to go to the clean room to control the samples.',
      answers: ['We need to go to the clean room to check the samples.'],
      explanation: 'Faux-ami : « contrôler » (vérifier) = check. « Control » = maîtriser, commander (control the temperature).',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0722-04', wrong: 'One of the most common problem that may occur is contamination.',
      answers: ['One of the most common problems that may occur is contamination.'],
      explanation: '« One of the… » est toujours suivi d\'un nom PLURIEL (un parmi plusieurs), mais le verbe reste au singulier (is).',
      tags: ['countable'],
    },
    {
      kind: 'fix', id: 'fix-0722-05', wrong: "It's the start of the fermentation processus in the bioreactor.",
      answers: ["It's the start of the fermentation process in the bioreactor.", 'It is the start of the fermentation process in the bioreactor.'],
      explanation: '« Processus » n\'existe pas en anglais : process (pluriel : processes).',
      tags: ['false-friends'],
    },
    {
      kind: 'fix', id: 'fix-0722-06', wrong: 'It can be done in heating the culture.',
      answers: ['It can be done by heating the culture.'],
      explanation: 'Le moyen : BY + -ing (it can be done BY heating).',
      tags: ['passive', 'gerund-inf'],
    },
    {
      kind: 'fix', id: 'fix-0722-07', wrong: 'Before to go on vacation, there are several things you need to do.',
      answers: ['Before going on vacation, there are several things you need to do.', 'Before going on holiday, there are several things you need to do.', 'Before you go on vacation, there are several things you need to do.'],
      explanation: 'Après une préposition (before, after, without, by…), le verbe prend -ing. Jamais « before to ».',
      tags: ['gerund-inf'],
    },
    {
      kind: 'fix', id: 'fix-0722-08', wrong: 'We need to book an accommodation.',
      answers: ['We need to book accommodation.', 'We need to make a reservation at a hotel.', 'We need to book a hotel.', 'We need to book some accommodation.'],
      explanation: '« Accommodation » (logement) est indénombrable en anglais britannique : pas de « an ».',
      tags: ['countable'],
    },
    {
      kind: 'fix', id: 'fix-0722-09', wrong: 'We need to buy some products like solar cream.',
      answers: ['We need to buy some products like sunscreen.', 'We need to buy some products like sun cream.', 'We need to buy some products like suncream.'],
      explanation: 'La crème solaire = sunscreen (ou sun cream). « Solar » s\'utilise pour l\'énergie (solar panels, solar-powered).',
      tags: ['word-choice'],
    },
    {
      kind: 'fix', id: 'fix-0722-10', wrong: 'We could lose ourselves somewhere along the way.',
      answers: ['We could get lost somewhere along the way.'],
      explanation: 'Se perdre (en chemin) = get lost.',
      tags: ['word-choice'],
    },
  ],
  notes: [
    {
      title: 'Passif + by + verbe en -ing',
      explanation: 'Structure très utile pour décrire une procédure ou une solution : Sujet + can be + participe passé + by + verbe-ing.',
      examples: [
        { en: 'The problem can be solved by changing the process.' },
        { en: 'The quality can be improved by checking the equipment regularly.' },
        { en: 'The risk can be reduced by following the safety instructions.' },
        { en: 'The product can be protected by storing it at the correct temperature.' },
      ],
    },
  ],
  grammarLinks: ['g-passive', 'g-gerund-inf', 'g-false-friends'],
}
