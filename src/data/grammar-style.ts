import type { GrammarLesson } from '../types'

// Style et rédaction : pour « le bon écrit » et les bonnes formulations.
export const styleLessons: GrammarLesson[] = [
  {
    id: 'g-linking',
    order: 24,
    group: 'style',
    tag: 'linking',
    level: 'B2+',
    title: 'Connecteurs logiques et articulation du discours',
    summary: 'However, whereas, although, despite, as a result… Ce qui fait passer un texte de B2 à C1.',
    points: [
      {
        title: 'Ajouter',
        explanation: 'In addition (to), Moreover, Furthermore (formel), On top of that (oral), Besides, What is more, Not only… but also.',
        examples: [
          { en: 'On top of that, there is also a problem with the supply chain.', note: 'Cours du 24.06' },
          { en: 'Furthermore, the new process reduces waste.' },
        ],
      },
      {
        title: 'Opposer, concéder',
        explanation: 'However (en début de phrase, suivi d\'une virgule), Nevertheless, Although / Even though + proposition, Despite / In spite of + nom ou -ing, Whereas / While (comparaison), On the other hand.',
        examples: [
          { en: 'Although the project was difficult, we finished on time.' },
          { en: 'Despite the delay, the event was a success.', note: '✗ despite of' },
          { en: 'Despite having little money, she didn\'t want us to pay for her.' },
          { en: 'Remote work suits me, whereas my colleague prefers the office.' },
        ],
      },
      {
        title: 'Cause et conséquence',
        explanation: 'Cause : because (+ proposition), because of / due to / owing to (+ nom), since, as. Conséquence : so, therefore, as a result, consequently, which means that, this leads to.',
        examples: [
          { en: 'The delivery was late due to a strike.' },
          { en: 'The freezer stopped. As a result, we lost the samples.' },
          { en: 'This is mainly due to the fact that people save time commuting.' },
        ],
      },
      {
        title: 'But',
        explanation: 'to / in order to / so as to + base verbale ; so that + proposition ; in order not to.',
        examples: [
          { en: 'Label the tubes so that nobody mixes them up.' },
          { en: 'We changed the procedure in order to prevent it from happening again.' },
        ],
      },
      {
        title: 'Structurer et conclure',
        explanation: 'Firstly / To begin with, Secondly, Finally ; In other words ; For instance ; Overall, All things considered, To sum up, In conclusion.',
        examples: [
          { en: 'All things considered, hybrid work seems to be the best compromise.' },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-linking-01', prompt: '___ the bad weather, the event was a success.', answers: ['Despite', 'In spite of'] },
      { kind: 'gap', id: 'g-linking-02', prompt: '___ it was raining, the event was a success.', answers: ['Although', 'Even though', 'Though'] },
      { kind: 'gap', id: 'g-linking-03', prompt: 'The flight was cancelled ___ a strike.', answers: ['due to', 'because of', 'owing to'] },
      { kind: 'gap', id: 'g-linking-04', prompt: 'I prefer tea, ___ my husband drinks coffee all day.', answers: ['whereas', 'while'] },
      { kind: 'gap', id: 'g-linking-05', prompt: 'The machine broke down. As a ___, production stopped for two days.', answers: ['result', 'consequence'] },
      { kind: 'gap', id: 'g-linking-06', prompt: 'We sent the invitations early so ___ people could plan ahead.', answers: ['that'] },
      {
        kind: 'mcq', id: 'g-linking-07', prompt: 'Which sentence is correct?',
        options: ['Despite the delay, we finished on time.', 'Despite of the delay, we finished on time.', 'Despite the delay was long, we finished on time.', 'Although the delay, we finished on time.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-linking-08', prompt: 'Which connector introduces a CONSEQUENCE in formal writing?',
        options: ['Therefore', 'Whereas', 'Although', 'Despite'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-linking-09', instruction: 'Relie les deux phrases avec « Although ».',
        prompt: 'The project was difficult. We delivered it on time.',
        answers: ['Although the project was difficult, we delivered it on time.', 'We delivered it on time although the project was difficult.', 'We delivered the project on time although it was difficult.', 'Although it was difficult, we delivered the project on time.', 'Although the project was difficult, we delivered the project on time.'],
      },
      {
        kind: 'transform', id: 'g-linking-10', instruction: 'Réécris avec « Despite » + -ing.',
        prompt: 'She had little money, but she didn\'t want us to pay for her.',
        answers: ['Despite having little money, she didn\'t want us to pay for her.', 'Despite having little money, she did not want us to pay for her.'],
      },
    ],
  },
  {
    id: 'g-register',
    order: 25,
    group: 'style',
    tag: 'register',
    level: 'B2+',
    title: 'Registre : du familier au professionnel',
    summary: 'Adapter son anglais au contexte : e-mail à un collègue, à un client, rapport officiel.',
    points: [
      {
        title: 'Verbes à particule → verbes « latins » (plus formels)',
        explanation: 'En anglais, le registre formel remplace souvent les phrasal verbs par un verbe unique d\'origine latine — souvent proche du français !',
        examples: [],
        table: {
          head: ['Neutre / oral', 'Formel / écrit'],
          rows: [
            ['find out', 'discover, determine'],
            ['look into', 'investigate, examine'],
            ['put off', 'postpone'],
            ['set up', 'establish'],
            ['get rid of', 'eliminate, remove'],
            ['go up / go down', 'increase / decrease'],
            ['carry on', 'continue'],
            ['point out', 'indicate, highlight'],
            ['sort out', 'resolve'],
            ['need', 'require'],
            ['get', 'obtain, receive'],
            ['help', 'assist'],
          ],
        },
      },
      {
        title: 'E-mails : ouvrir et fermer',
        explanation: 'Formel : Dear Mr/Ms X, … I am writing to… / Please find attached… / I look forward to hearing from you. / Kind regards, Best regards. Neutre : Hi X, … Just a quick note to… / Let me know if… / Thanks, Best.',
        examples: [
          { en: 'I am writing to inform you that the delivery will be delayed.' },
          { en: 'Please do not hesitate to contact me should you have any questions.', note: 'C1 : inversion avec should' },
          { en: 'I look forward to hearing from you.', note: '-ing après to !' },
        ],
      },
      {
        title: 'Adoucir (hedging) : très anglo-saxon',
        explanation: 'Pour éviter d\'être trop direct : It seems that…, It might be worth…, I was wondering if…, Would it be possible to…?, slightly, somewhat, a little.',
        examples: [
          { en: 'I was wondering if you could send me the data.', note: 'plutôt que « Send me the data. »' },
          { en: 'There seems to be a slight problem with the invoice.' },
        ],
      },
    ],
    exercises: [
      {
        kind: 'mcq', id: 'g-register-01', prompt: 'Formal equivalent of “put off the meeting”:',
        options: ['postpone the meeting', 'delay off the meeting', 'cancel out the meeting', 'set back the meeting'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-register-02', prompt: 'Formal equivalent of “look into the problem”:',
        options: ['investigate the problem', 'look the problem', 'watch the problem', 'regard the problem'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-register-03', prompt: 'Most appropriate ending for an e-mail to a new client:',
        options: ['I look forward to hearing from you. Kind regards,', 'Bye!', 'See ya, cheers', 'Waiting for your answer. Kisses,'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-register-04', prompt: 'Most polite request:',
        options: ['I was wondering if you could send me the report.', 'Send me the report.', 'You must send me the report.', 'I want the report now.'], answer: 0,
      },
      { kind: 'gap', id: 'g-register-05', prompt: 'I look forward to ___ (hear) from you.', answers: ['hearing'] },
      { kind: 'gap', id: 'g-register-06', prompt: 'Please find ___ the report you requested.', answers: ['attached', 'enclosed'] },
      {
        kind: 'transform', id: 'g-register-07', instruction: 'Rends cette phrase formelle (e-mail à un client).',
        prompt: 'We need to put off the meeting because we have to sort out a problem.',
        answers: ['We need to postpone the meeting because we have to resolve an issue.', 'We have to postpone the meeting because we need to resolve an issue.', 'We need to postpone the meeting as we have to resolve an issue.', 'We need to postpone the meeting because we have to resolve a problem.'],
        explanation: 'put off → postpone ; sort out → resolve ; problem → issue (plus neutre).',
      },
      {
        kind: 'transform', id: 'g-register-08', instruction: 'Adoucis cette demande avec « Would it be possible to… ».',
        prompt: 'Send me the results by Friday.',
        answers: ['Would it be possible to send me the results by Friday?', 'Would it be possible for you to send me the results by Friday?'],
      },
    ],
  },
  {
    id: 'g-inversion',
    order: 26,
    group: 'style',
    tag: 'inversion',
    level: 'C1',
    title: 'Mettre en relief : inversion et phrases clivées',
    summary: 'Les structures qui font sonner un texte « C1 » : Not only…, Rarely have I…, What I mean is…, It was X that…',
    points: [
      {
        title: 'Phrases clivées : What… is / It is… that',
        explanation: 'Pour insister sur un élément. Très naturel à l\'oral comme à l\'écrit.',
        examples: [
          { en: 'What sets us apart is our expertise.' },
          { en: 'What I really enjoy is working with patients.' },
          { en: 'It was the manager who made the decision.' },
          { en: "It's the lack of communication that causes most problems." },
        ],
      },
      {
        title: 'Inversion après une expression négative (formel)',
        explanation: 'Never, Rarely, Seldom, Not only, Under no circumstances, Only then, No sooner… than, Hardly… when + auxiliaire + sujet.',
        examples: [
          { en: 'Not only did we finish on time, but we also came in under budget.' },
          { en: 'Rarely have I seen such a well-organised event.' },
          { en: 'Under no circumstances should you open the door during the run.' },
          { en: 'No sooner had we started than the power went out.' },
        ],
      },
      {
        title: 'Inversion conditionnelle (très formel)',
        explanation: 'Should you… = If you should… ; Had I known… = If I had known… ; Were we to… = If we were to…',
        examples: [
          { en: 'Should you have any questions, please contact me.' },
          { en: 'Had we checked the equipment, this would not have happened.' },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-inversion-01', prompt: 'Not only ___ we finish on time, but we also saved money.', answers: ['did'] },
      { kind: 'gap', id: 'g-inversion-02', prompt: 'Rarely ___ I seen such enthusiasm.', answers: ['have'] },
      { kind: 'gap', id: 'g-inversion-03', prompt: '___ you need any help, don\'t hesitate to ask.', answers: ['Should'] },
      { kind: 'gap', id: 'g-inversion-04', prompt: '___ I known, I would have come earlier.', answers: ['Had'] },
      {
        kind: 'mcq', id: 'g-inversion-05', prompt: 'Which sentence is correct?',
        options: ['Never have I worked with such a talented team.', 'Never I have worked with such a talented team.', 'Never I worked with such a talented team.', 'Never did I have worked with such a talented team.'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-inversion-06', instruction: 'Réécris en commençant par « What… is… ».',
        prompt: 'I like the flexibility of remote work.',
        answers: ['What I like is the flexibility of remote work.', 'What I like about remote work is the flexibility.'],
      },
      {
        kind: 'transform', id: 'g-inversion-07', instruction: 'Réécris avec une inversion commençant par « Not only… ».',
        prompt: 'The new process is faster and it is also cheaper.',
        answers: ['Not only is the new process faster, but it is also cheaper.', "Not only is the new process faster, but it's also cheaper.", 'Not only is the new process faster, it is also cheaper.'],
      },
      {
        kind: 'transform', id: 'g-inversion-08', instruction: 'Réécris en commençant par « It was… who… ».',
        prompt: 'Linda suggested the solution.',
        answers: ['It was Linda who suggested the solution.', 'It was Linda that suggested the solution.'],
      },
    ],
  },
]
