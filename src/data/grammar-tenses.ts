import type { GrammarLesson } from '../types'

// Les temps : priorité n°1 (past simple, present perfect et temps « autres que le présent »).
export const tenseLessons: GrammarLesson[] = [
  {
    id: 'g-present',
    order: 1,
    group: 'temps',
    tag: 'present',
    level: 'B2',
    title: 'Present simple vs present continuous',
    summary: 'Le point de départ : habitudes et vérités (simple) contre actions en cours et changements (continuous).',
    points: [
      {
        title: 'Present simple : habitudes, vérités, programmes',
        explanation: 'Pour ce qui est vrai en général, ce qui se répète, et les horaires officiels. Attention au -s à la 3e personne.',
        examples: [
          { en: 'Our company develops diagnostic tests.', fr: 'Notre entreprise développe des tests diagnostiques.' },
          { en: 'I usually bike to work.', fr: "D'habitude, je vais au travail à vélo." },
          { en: 'The train leaves at 7:42.', fr: 'Le train part à 7 h 42 (horaire).' },
        ],
      },
      {
        title: 'Present continuous : maintenant, période actuelle, changement',
        explanation: "Action en cours maintenant ou autour de maintenant (cette semaine, ce mois-ci), et évolution en cours : « is becoming », « is getting », « is growing ».",
        examples: [
          { en: "I'm working on a new protocol this month.", fr: 'Je travaille sur un nouveau protocole ce mois-ci.' },
          { en: 'Remote work is becoming the norm.', fr: 'Le télétravail devient la norme.' },
          { en: 'He is becoming too heavy to throw in the pool.', note: 'Vu au cours du 09.09' },
        ],
      },
      {
        title: 'Verbes d\'état : pas de forme continue',
        explanation: 'Les verbes qui décrivent un état (know, believe, want, need, like, prefer, mean, belong, consist, seem, understand) restent au simple.',
        examples: [
          { en: 'Our team consists of twelve people.', note: '✗ is consisting' },
          { en: 'I know what you mean.', note: '✗ I am knowing' },
          { en: 'I think it\'s a good idea. / I\'m thinking about changing jobs.', note: 'think = avis (simple) / réfléchir (continuous)' },
        ],
      },
      {
        title: 'Present continuous pour le futur programmé',
        explanation: 'Un rendez-vous ou un projet déjà organisé : présent continu + marqueur de temps.',
        examples: [
          { en: "She's turning 80 on the 25th of September.", note: 'Vu au cours du 09.09' },
          { en: "We're meeting the client on Friday." },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-present-01', prompt: 'Our lab ___ (produce) about 2,000 samples a week.', answers: ['produces'] },
      { kind: 'gap', id: 'g-present-02', prompt: "Sorry, I can't talk now — I ___ (drive).", answers: ["'m driving", 'am driving'] },
      { kind: 'gap', id: 'g-present-03', prompt: 'Housing ___ (become) more and more expensive in Barcelona.', answers: ['is becoming'] },
      { kind: 'gap', id: 'g-present-04', prompt: 'I ___ (not / understand) what you mean.', answers: ["don't understand", 'do not understand'] },
      { kind: 'gap', id: 'g-present-05', prompt: 'This month, we ___ (test) a new purification method.', answers: ['are testing', "'re testing"] },
      { kind: 'gap', id: 'g-present-06', prompt: 'The meeting ___ (start) at 9 every Monday.', answers: ['starts'] },
      {
        kind: 'mcq', id: 'g-present-07', prompt: 'Choose the correct sentence.',
        options: ['Our team consists of ten people.', 'Our team is consisting of ten people.', 'Our team consist of ten people.', 'Our team is consist of ten people.'], answer: 0,
        explanation: '« Consist » est un verbe d\'état → simple, et -s à la 3e personne.',
      },
      {
        kind: 'mcq', id: 'g-present-08', prompt: 'What are you doing this weekend? — I ___ my parents.',
        options: ["'m visiting", 'visit', 'will visiting', 'visiting'], answer: 0,
        explanation: 'Projet déjà organisé → present continuous.',
      },
      {
        kind: 'fix', id: 'g-present-09', wrong: 'I am needing more time to finish the report.',
        answers: ['I need more time to finish the report.'],
        explanation: '« Need » est un verbe d\'état : pas de forme en -ing.',
      },
      {
        kind: 'fix', id: 'g-present-10', wrong: 'The prices rise a lot at the moment.',
        answers: ['The prices are rising a lot at the moment.', 'Prices are rising a lot at the moment.'],
        explanation: '« At the moment » + évolution en cours → present continuous.',
      },
    ],
  },
  {
    id: 'g-past-simple',
    order: 2,
    group: 'temps',
    tag: 'past-simple',
    level: 'B2',
    title: 'Le past simple (prétérit)',
    summary: 'LE temps du récit : une action terminée, à un moment passé précis ou évident. Ton temps le plus important à consolider.',
    points: [
      {
        title: 'Quand l\'utiliser ?',
        explanation: "Dès que l'action est TERMINÉE et située dans un moment passé qui est terminé lui aussi — même s'il n'est pas dit explicitement (on raconte une histoire, on parle d'une personne décédée, d'un voyage fini…). C'est souvent l'équivalent du PASSÉ COMPOSÉ français : « je suis allé » = I went.",
        examples: [
          { en: 'I went to see my parents last weekend.', fr: 'Je suis allé voir mes parents le week-end dernier.' },
          { en: 'We had a great time at that party.', fr: 'On a passé un super moment à cette fête.' },
          { en: 'She went back to Poland, but before she left, we spent two days with her.', note: 'Vu au cours du 19.08' },
        ],
      },
      {
        title: 'Les marqueurs typiques',
        explanation: 'yesterday, last week/month/year, … ago, in 2019, on Saturday, when I was a child, at that time, then. Avec ces mots : JAMAIS de present perfect.',
        examples: [
          { en: 'My daughter came home yesterday.', note: '✗ has come home yesterday' },
          { en: 'Six years ago, I worked in a laboratory.', note: '✗ I have worked … ago' },
          { en: 'The word was used for the first time in the 1830s.' },
        ],
      },
      {
        title: 'Formes',
        explanation: 'Verbes réguliers : -ed (worked, decided, stopped, studied). Verbes irréguliers : à apprendre (went, came, began, spent, left, thought…). Négation et question avec DID + base verbale.',
        examples: [
          { en: 'We began building the Lego set.', note: 'begin → began → begun' },
          { en: "I didn't manage to exchange the gift.", note: 'didn\'t + base (✗ didn\'t managed)' },
          { en: 'Did you attend the meeting?', note: 'Did + sujet + base' },
        ],
        table: {
          head: ['', 'Affirmation', 'Négation', 'Question'],
          rows: [
            ['Régulier', 'I worked', "I didn't work", 'Did you work?'],
            ['Irrégulier', 'I went', "I didn't go", 'Did you go?'],
            ['Be', 'I was / we were', "I wasn't / we weren't", 'Were you…?'],
          ],
        },
      },
      {
        title: 'Prononciation du -ed',
        explanation: '/t/ après un son sourd (worked, stopped), /d/ après un son sonore (played, called), /ɪd/ seulement après t ou d (wanted, decided). « Arranged » = une seule syllabe accentuée !',
        examples: [{ en: 'worked /wɜːkt/ — played /pleɪd/ — decided /dɪˈsaɪdɪd/' }],
      },
      {
        title: 'Il y avait… = there was / there were',
        explanation: '« Il y avait » ne se traduit jamais par « there had ».',
        examples: [{ en: 'There were free concerts happening around the city.', note: 'Vu au cours du 23.09' }],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-past-simple-01', prompt: 'Last year, we ___ (go) on a lot of safaris.', answers: ['went'] },
      { kind: 'gap', id: 'g-past-simple-02', prompt: 'She ___ (leave) the company three months ago.', answers: ['left'] },
      { kind: 'gap', id: 'g-past-simple-03', prompt: 'We ___ (not / attend) the conference in June.', answers: ["didn't attend", 'did not attend'] },
      { kind: 'transform', id: 'g-past-simple-04', instruction: 'Construis la question au past simple.', prompt: 'you / see / the email from the CEO / yesterday?', answers: ['Did you see the email from the CEO yesterday?'] },
      { kind: 'gap', id: 'g-past-simple-05', prompt: 'I ___ (think) running was very easy.', answers: ['thought'] },
      { kind: 'gap', id: 'g-past-simple-06', prompt: 'We ___ (begin) the project in January.', answers: ['began'] },
      { kind: 'gap', id: 'g-past-simple-07', prompt: 'They ___ (spend) the whole weekend in the lab.', answers: ['spent'] },
      { kind: 'gap', id: 'g-past-simple-08', prompt: 'There ___ (be) a lot more people than last year.', answers: ['were'] },
      { kind: 'gap', id: 'g-past-simple-09', prompt: 'He ___ (break) his knee during a match.', answers: ['broke'] },
      { kind: 'gap', id: 'g-past-simple-10', prompt: 'The delivery ___ (arrive) two days late.', answers: ['arrived'] },
      {
        kind: 'mcq', id: 'g-past-simple-11', prompt: 'Choose the correct sentence.',
        options: ["I didn't managed to call him.", "I didn't manage to call him.", "I not managed to call him.", "I don't managed to call him."], answer: 1,
        explanation: 'Après DID / DIDN\'T, le verbe est à la base verbale : didn\'t manage.',
      },
      {
        kind: 'mcq', id: 'g-past-simple-12', prompt: '« Hier, j\'ai terminé le rapport. »',
        options: ['Yesterday, I finished the report.', 'Yesterday, I have finished the report.', 'Yesterday, I had finished the report.', 'Yesterday, I was finish the report.'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-past-simple-13', instruction: 'Traduis en anglais.',
        prompt: 'On est allés au théâtre samedi et on a passé une super soirée.',
        answers: ['We went to the theatre on Saturday and we had a great evening.', 'We went to the theatre on Saturday and had a great evening.', 'We went to the theater on Saturday and we had a great evening.', 'We went to the theatre on Saturday and we had a great time.', 'We went to the theatre on Saturday and had a great time.'],
      },
      {
        kind: 'transform', id: 'g-past-simple-14', instruction: 'Mets la phrase à la forme négative.',
        prompt: 'We found a solution quickly.',
        answers: ["We didn't find a solution quickly.", 'We did not find a solution quickly.'],
      },
      {
        kind: 'transform', id: 'g-past-simple-15', instruction: 'Pose la question qui correspond à la partie soulignée : « She moved to Poland IN 2020 ».',
        prompt: 'She moved to Poland in 2020. → When…?',
        answers: ['When did she move to Poland?'],
      },
    ],
  },
  {
    id: 'g-past-continuous',
    order: 3,
    group: 'temps',
    tag: 'past-continuous',
    level: 'B2',
    title: 'Past continuous vs past simple',
    summary: "Planter le décor (was doing) puis raconter l'événement (did). Indispensable pour bien raconter.",
    points: [
      {
        title: 'Past continuous : action en cours à un moment du passé',
        explanation: 'was/were + -ing. C\'est souvent l\'équivalent de l\'IMPARFAIT français quand il décrit une action en cours.',
        examples: [
          { en: 'Six years ago, I was working in a laboratory.', fr: 'Il y a six ans, je travaillais dans un laboratoire.', note: 'Vu au cours du 05.08' },
          { en: 'The people wearing costumes were walking in front of the audience.' },
        ],
      },
      {
        title: 'Action longue interrompue par une action courte',
        explanation: 'L\'action de fond au past continuous, l\'événement qui l\'interrompt au past simple (souvent avec when). « While » introduit l\'action longue.',
        examples: [
          { en: 'I was running the analysis when the power went out.', fr: "Je faisais tourner l'analyse quand le courant a été coupé." },
          { en: 'While we were waiting, the manager arrived.' },
        ],
      },
      {
        title: 'Deux actions simultanées',
        explanation: 'While + past continuous des deux côtés.',
        examples: [{ en: 'While I was cooking, my daughter was doing her homework.' }],
      },
      {
        title: 'Imparfait ≠ toujours past continuous',
        explanation: "Pour une HABITUDE passée, l'imparfait se traduit par le past simple, used to ou would — pas par le past continuous. Pour un ÉTAT (être, avoir, savoir), past simple.",
        examples: [
          { en: 'When I was a student, I worked every summer.', fr: 'Quand j\'étais étudiant, je travaillais chaque été.' },
          { en: 'I knew the answer.', note: '✗ I was knowing' },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-past-continuous-01', prompt: 'I ___ (check) the samples when the alarm went off.', answers: ['was checking'] },
      { kind: 'gap', id: 'g-past-continuous-02', prompt: 'While we ___ (drive) to Liège, it started to rain.', answers: ['were driving'] },
      { kind: 'gap', id: 'g-past-continuous-03', prompt: 'She got injured while she ___ (play) football.', answers: ['was playing'] },
      { kind: 'gap', id: 'g-past-continuous-04', prompt: 'At 10 p.m. yesterday, I ___ (write) my report.', answers: ['was writing'] },
      { kind: 'gap', id: 'g-past-continuous-05', prompt: 'We were having lunch when the client ___ (call).', answers: ['called'] },
      {
        kind: 'mcq', id: 'g-past-continuous-06', prompt: 'When I arrived, the meeting ___.',
        options: ['had already started', 'was starting already since', 'already starts', 'has already started'], answer: 0,
        explanation: 'Le début de la réunion est ANTÉRIEUR à mon arrivée → past perfect. (Avant-goût de la leçon suivante !)',
        tags: ['past-perfect'],
      },
      {
        kind: 'mcq', id: 'g-past-continuous-07', prompt: '« Quand j\'étais enfant, j\'allais à la mer chaque été. »',
        options: ['When I was a child, I went to the seaside every summer.', 'When I was a child, I was going to the seaside every summer.', 'When I was being a child, I went to the seaside every summer.', 'When I have been a child, I went to the seaside every summer.'], answer: 0,
        explanation: 'Habitude passée → past simple (ou used to / would). Pas de past continuous.',
      },
      {
        kind: 'mcq', id: 'g-past-continuous-08', prompt: 'Which sentence is correct?',
        options: ['I was knowing the answer.', 'I knew the answer.', 'I was know the answer.', 'I have known the answer yesterday.'], answer: 1,
        explanation: '« Know » est un verbe d\'état : jamais en -ing.',
      },
      {
        kind: 'transform', id: 'g-past-continuous-09', instruction: 'Relie avec « when » : action longue + interruption.',
        prompt: 'I was working in the clean room. The fire alarm rang.',
        answers: ['I was working in the clean room when the fire alarm rang.', 'When the fire alarm rang, I was working in the clean room.'],
      },
      {
        kind: 'transform', id: 'g-past-continuous-10', instruction: 'Traduis en anglais.',
        prompt: 'Il neigeait quand nous sommes partis.',
        answers: ['It was snowing when we left.'],
      },
    ],
  },
  {
    id: 'g-present-perfect',
    order: 4,
    group: 'temps',
    tag: 'present-perfect',
    level: 'B2',
    title: 'Le present perfect',
    summary: 'Un pont entre le passé et le présent : ce qui compte, c\'est le lien avec MAINTENANT.',
    points: [
      {
        title: 'Formation',
        explanation: 'HAVE / HAS + participe passé (3e colonne des verbes irréguliers).',
        examples: [
          { en: 'I have finished. / She has left. / They have begun.' },
          { en: "I haven't seen them for a year." },
          { en: 'Have you ever been to Canada?' },
        ],
      },
      {
        title: '1. Expérience de vie (sans date)',
        explanation: 'Ce qu\'on a déjà (ou jamais) fait dans sa vie jusqu\'à maintenant. Marqueurs : ever, never, before, already, once, twice, several times.',
        examples: [
          { en: "I have never tried an electric bike before.", note: 'Vu au cours du 09.09' },
          { en: 'Have you ever had to deal with a complaint?' },
        ],
      },
      {
        title: '2. Situation qui dure jusqu\'à maintenant',
        explanation: 'Commencée dans le passé et toujours vraie. Avec for / since. En français : PRÉSENT + « depuis » → en anglais : PRESENT PERFECT.',
        examples: [
          { en: 'I have worked here since 2018.', fr: 'Je travaille ici depuis 2018.' },
          { en: "I haven't seen them for a year.", fr: 'Je ne les ai pas vus depuis un an.' },
        ],
      },
      {
        title: '3. Résultat présent / nouvelle récente',
        explanation: 'Une action passée dont le résultat compte maintenant. Marqueurs : just, already, yet, recently, so far, over the years.',
        examples: [
          { en: 'The delivery has just arrived.', fr: 'La livraison vient d\'arriver.' },
          { en: "Over the years, I have become a specialist in dealing with complaints.", note: 'Vu au cours du 12.08' },
          { en: "Have you sent the report yet? — No, I haven't finished it yet." },
        ],
      },
      {
        title: '4. Période non terminée',
        explanation: 'today, this week, this month, this year (si on est encore dedans).',
        examples: [
          { en: 'I have drunk three coffees this morning.', note: 'On est encore le matin.' },
          { en: 'We have hired two new technicians this year.' },
        ],
      },
      {
        title: 'Been vs gone',
        explanation: '« He has been to Spain » = il y est allé et revenu (expérience). « He has gone to Spain » = il y est parti et y est encore.',
        examples: [{ en: "She has gone to Poland. (Elle n'est pas là.) / She has been to Poland twice." }],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-present-perfect-01', prompt: 'I ___ (never / be) to the United States.', answers: ['have never been', "'ve never been"] },
      { kind: 'gap', id: 'g-present-perfect-02', prompt: 'The results ___ (just / arrive).', answers: ['have just arrived'] },
      { kind: 'transform', id: 'g-present-perfect-03', instruction: 'Construis la question au present perfect.', prompt: 'you / ever / work / in a clean room?', answers: ['Have you ever worked in a clean room?'] },
      { kind: 'gap', id: 'g-present-perfect-04', prompt: "We ___ (not / receive) the invoice yet.", answers: ["haven't received", 'have not received'] },
      { kind: 'gap', id: 'g-present-perfect-05', prompt: 'She ___ (work) here since 2019.', answers: ['has worked', "'s worked", 'has been working', "'s been working"] },
      { kind: 'gap', id: 'g-present-perfect-06', prompt: 'Over the years, the company ___ (grow) a lot.', answers: ['has grown', "'s grown"] },
      { kind: 'gap', id: 'g-present-perfect-07', prompt: 'I ___ (already / send) the invitations.', answers: ['have already sent', "'ve already sent"] },
      { kind: 'gap', id: 'g-present-perfect-08', prompt: 'We ___ (make) a lot of progress so far.', answers: ['have made', "'ve made"] },
      {
        kind: 'mcq', id: 'g-present-perfect-09', prompt: 'Your colleague isn\'t here. She is in Poland now. → She ___ to Poland.',
        options: ['has gone', 'has been', 'went since', 'is been'], answer: 0,
        explanation: 'Gone = elle y est partie et y est encore.',
      },
      {
        kind: 'mcq', id: 'g-present-perfect-10', prompt: '« Je travaille ici depuis cinq ans. »',
        options: ['I have worked here for five years.', 'I work here since five years.', 'I work here for five years.', 'I am working here since five years.'], answer: 0,
        explanation: 'Présent + « depuis » en français → present perfect en anglais.',
        tags: ['since-for'],
      },
      {
        kind: 'mcq', id: 'g-present-perfect-11', prompt: 'Which sentence is correct?',
        options: ['Have you finished the report yet?', 'Did you finished the report yet?', 'Have you finish the report yet?', 'Are you finished the report yet?'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-present-perfect-12', instruction: 'Traduis en anglais.',
        prompt: 'Je ne les ai pas vus depuis un an.',
        answers: ["I haven't seen them for a year.", 'I have not seen them for a year.', "I haven't seen them in a year."],
        tags: ['since-for'],
      },
      {
        kind: 'transform', id: 'g-present-perfect-13', instruction: 'Traduis en anglais.',
        prompt: "Tu as déjà dû gérer une réclamation ?",
        answers: ['Have you ever had to deal with a complaint?', 'Have you ever had to handle a complaint?'],
      },
    ],
  },
  {
    id: 'g-pp-vs-ps',
    order: 5,
    group: 'temps',
    tag: 'pp-vs-ps',
    level: 'B2',
    title: 'Past simple ou present perfect ? Le piège du passé composé',
    summary: 'LA difficulté n°1 des francophones. Une seule question à se poser : le moment est-il terminé ?',
    points: [
      {
        title: 'La règle d\'or',
        explanation: "Le passé composé français se traduit le plus souvent par le PAST SIMPLE. Pose-toi la question : « Quand ? » Si la réponse est un moment passé terminé (hier, samedi, en 2019, il y a 6 ans, pendant les vacances, lors de la réunion…), c'est le past simple. Si la réponse est « à un moment de ma vie, peu importe quand » ou « jusqu'à maintenant », c'est le present perfect.",
        examples: [
          { en: "I went to Spain last summer.", fr: "Je suis allé en Espagne l'été dernier. (quand ? l'été dernier → terminé)" },
          { en: "I've been to Spain three times.", fr: 'Je suis allé trois fois en Espagne. (dans ma vie → pas de moment précis)' },
        ],
        table: {
          head: ['Past simple', 'Present perfect'],
          rows: [
            ['Moment terminé : yesterday, last…, … ago, in 2019, on Monday, when…', 'Jusqu\'à maintenant : ever, never, yet, already, just, so far, since, for, recently'],
            ['Récit, histoire, suite d\'événements', 'Expérience, bilan, résultat actuel'],
            ['Question « When…? »', 'Question « Have you ever…? » / « How long…? »'],
            ['La personne / la période n\'existe plus', 'La période continue (this year, today…)'],
          ],
        },
      },
      {
        title: 'Le mélange typique d\'une conversation',
        explanation: "On annonce avec le present perfect (bilan, sans date), puis dès qu'on donne des détails (quand, où, comment), on bascule au past simple.",
        examples: [
          { en: "I've had a problem with the supplier. They sent the wrong reagents last week, so I called them and they replaced them.", note: 'Annonce → present perfect ; détails → past simple' },
          { en: 'Have you ever had to deal with a complaint? — Yes, I have. A customer called me in June and…' },
        ],
      },
      {
        title: 'Les erreurs de tes cours',
        explanation: 'Toutes ces phrases ont été corrigées en séance : un marqueur de temps passé terminé impose le past simple.',
        examples: [
          { en: 'On Saturday, my grandson came to my house.', note: '✗ has come' },
          { en: 'My daughter came home yesterday.', note: '✗ has come' },
          { en: 'Last weekend, I discovered a lot of new things.', note: '✗ have discovered' },
          { en: 'I met her baby for the first time last week.', note: '✗ have met' },
          { en: "I haven't seen them for a year.", note: '✗ didn\'t see them since… (ici la situation dure → present perfect)' },
        ],
      },
      {
        title: 'Astuce : « just » et « already » en anglais américain',
        explanation: "À l'oral américain, on entend « I just finished » ou « Did you eat yet? ». En anglais britannique (et à l'écrit soigné), on préfère le present perfect. Dans l'appli, les deux sont souvent acceptés quand c'est le cas.",
        examples: [{ en: "I've just finished. (UK) / I just finished. (US)" }],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-pp-vs-ps-01', prompt: 'I ___ (visit) Barcelona twice. The last time, I ___ (go) with my daughters. (sépare les deux réponses par « / »)', answers: ['have visited / went', "'ve visited / went"] },
      { kind: 'gap', id: 'g-pp-vs-ps-02', prompt: 'We ___ (hire) a new technician last month.', answers: ['hired'] },
      { kind: 'gap', id: 'g-pp-vs-ps-03', prompt: 'We ___ (hire) three new technicians this year.', answers: ['have hired', "'ve hired"] },
      { kind: 'transform', id: 'g-pp-vs-ps-04', instruction: 'Construis la question (past simple ou present perfect ?).', prompt: 'When / you / start / working here?', answers: ['When did you start working here?', 'When did you start to work here?'], explanation: '« When » demande un moment précis → past simple.' },
      { kind: 'transform', id: 'g-pp-vs-ps-05', instruction: 'Construis la question (past simple ou present perfect ?).', prompt: 'How long / you / work / here? (tu y travailles toujours)', answers: ['How long have you worked here?', 'How long have you been working here?'], explanation: '« How long » + situation qui dure → present perfect (simple ou continuous).' },
      { kind: 'gap', id: 'g-pp-vs-ps-06', prompt: 'I ___ (lose) my badge. I can\'t get into the lab!', answers: ['have lost', "'ve lost"] },
      { kind: 'gap', id: 'g-pp-vs-ps-07', prompt: 'I ___ (lose) my badge yesterday, but I found it this morning.', answers: ['lost'] },
      { kind: 'gap', id: 'g-pp-vs-ps-08', prompt: 'Shakespeare ___ (write) 39 plays.', answers: ['wrote'], explanation: 'La personne est décédée → période terminée → past simple.' },
      { kind: 'gap', id: 'g-pp-vs-ps-09', prompt: 'My colleague ___ (write) three articles so far.', answers: ['has written', "'s written"] },
      { kind: 'gap', id: 'g-pp-vs-ps-10', prompt: 'We ___ (go) to the flea market on Sunday and ___ (buy) a lamp. (sépare par « / »)', answers: ['went / bought'] },
      {
        kind: 'mcq', id: 'g-pp-vs-ps-11', prompt: '« J\'ai rencontré son bébé pour la première fois la semaine dernière. »',
        options: ['I met her baby for the first time last week.', 'I have met her baby for the first time last week.', 'I have been meeting her baby last week.', 'I had met her baby for the first time last week.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-pp-vs-ps-12', prompt: '« Je n\'ai jamais essayé un vélo électrique. »',
        options: ["I've never tried an electric bike.", 'I never tried an electric bike yesterday.', "I didn't never try an electric bike.", "I haven't never tried an electric bike."], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-pp-vs-ps-13', prompt: 'A: Have you ever been to Canada? B: Yes, I ___ there in 2015.',
        options: ['went', 'have gone', 'have been', 'was going'], answer: 0,
        explanation: 'La question générale est au present perfect, mais la réponse datée (in 2015) bascule au past simple.',
      },
      {
        kind: 'mcq', id: 'g-pp-vs-ps-14', prompt: 'Which sentence is correct?',
        options: ['We have spent the last two days with her before she left.', 'We spent the last two days with her before she left.', 'We have been spending the last two days with her before she left.', 'We had spend the last two days with her before she left.'], answer: 1,
      },
      {
        kind: 'mcq', id: 'g-pp-vs-ps-15', prompt: 'It\'s 11 a.m. — I ___ three coffees this morning.',
        options: ['have had', 'had', 'have', 'was having'], answer: 0,
        explanation: 'La matinée n\'est pas terminée → present perfect.',
      },
      {
        kind: 'mcq', id: 'g-pp-vs-ps-16', prompt: 'It\'s 4 p.m. — I ___ three coffees this morning.',
        options: ['had', 'have had', 'have', 'was having'], answer: 0,
        explanation: 'La matinée est terminée → past simple.',
      },
      {
        kind: 'fix', id: 'g-pp-vs-ps-17', wrong: 'I have seen this film when I was a child.',
        answers: ['I saw this film when I was a child.'],
        explanation: '« When I was a child » = période terminée → past simple.',
      },
      {
        kind: 'fix', id: 'g-pp-vs-ps-18', wrong: 'Did you ever visit a biotech plant?',
        answers: ['Have you ever visited a biotech plant?'],
        explanation: 'Expérience de vie, sans date → Have you ever…? (L\'américain accepte parfois « Did you ever… », mais c\'est moins standard.)',
      },
      {
        kind: 'fix', id: 'g-pp-vs-ps-19', wrong: 'The company exists since 1998.',
        answers: ['The company has existed since 1998.', 'The company has been around since 1998.'],
        explanation: 'Présent + « depuis » en français → present perfect.',
        tags: ['since-for'],
      },
      {
        kind: 'transform', id: 'g-pp-vs-ps-20', instruction: 'Traduis en anglais.',
        prompt: "Samedi, mon petit-fils est venu chez moi et on a joué dans le jardin.",
        answers: ['On Saturday, my grandson came to my house and we played in the garden.', 'On Saturday, my grandson came to my place and we played in the garden.', 'On Saturday my grandson came to my house and we played in the garden.'],
      },
      {
        kind: 'transform', id: 'g-pp-vs-ps-21', instruction: 'Traduis en anglais.',
        prompt: "Nous avons fait beaucoup de progrès depuis janvier.",
        answers: ['We have made a lot of progress since January.', "We've made a lot of progress since January."],
      },
      {
        kind: 'transform', id: 'g-pp-vs-ps-22', instruction: 'Traduis en anglais.',
        prompt: "L'année dernière, nous avons eu des problèmes avec le fournisseur.",
        answers: ['Last year, we had problems with the supplier.', 'Last year, we had some problems with the supplier.', 'Last year, we had issues with the supplier.', 'Last year we had problems with the supplier.'],
      },
    ],
  },
  {
    id: 'g-since-for',
    order: 6,
    group: 'temps',
    tag: 'since-for',
    level: 'B2',
    title: 'Since, for, ago & present perfect continuous',
    summary: 'Exprimer la durée sans se tromper : depuis, pendant, il y a — et insister sur la durée d\'une activité.',
    points: [
      {
        title: 'Since / for / ago / during',
        explanation: 'SINCE = point de départ. FOR = durée (y compris au passé). AGO = il y a (avec le past simple). DURING = pendant (répond à « quand ? », pas à « combien de temps ? »).',
        examples: [
          { en: 'I have been making candles since 2019.' },
          { en: 'I have been making candles for 7 years.' },
          { en: 'I started making candles 7 years ago.' },
          { en: 'He drove to work every day for a year.', note: '✗ during one year' },
          { en: 'I fell asleep during the presentation.' },
        ],
        table: {
          head: ['', 'Since', 'For', 'Ago'],
          rows: [
            ['Sens', 'depuis (point de départ)', 'depuis / pendant (durée)', 'il y a'],
            ['Exemple', 'since 2019, since Monday, since I arrived', 'for 7 years, for two hours', '7 years ago'],
            ['Temps', 'present perfect (ou past perfect)', 'tous les temps', 'past simple'],
          ],
        },
      },
      {
        title: 'Present perfect continuous : insister sur la durée d\'une activité',
        explanation: 'HAVE/HAS BEEN + -ing. Pour une activité commencée dans le passé qui continue (ou vient de s\'arrêter), en insistant sur sa durée ou sa continuité. Réponds à « How long have you been…? ».',
        examples: [
          { en: 'He has been living there for the past 20 years.', note: 'Vu au cours du 12.08' },
          { en: 'He has been driving from home to work every day for the past 2-3 months.', note: 'Vu au cours du 19.08' },
          { en: "I'm exhausted — I've been running experiments all day." },
        ],
      },
      {
        title: 'Simple ou continuous ?',
        explanation: 'Continuous = durée de l\'activité (how long). Simple = résultat, quantité (how many / how much), ou verbe d\'état.',
        examples: [
          { en: "I've been writing the report all morning.", note: 'durée' },
          { en: "I've written three pages.", note: 'résultat chiffré' },
          { en: "I've known her for ten years.", note: 'verbe d\'état → simple' },
        ],
      },
      {
        title: 'Past perfect continuous (niveau B2+)',
        explanation: 'Même logique, mais depuis un moment du PASSÉ : had been + -ing.',
        examples: [{ en: 'I had been working at JBC since 2011 when I decided to quit.', note: 'Exemple du cours du 19.08' }],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-since-for-01', prompt: "I've been working here ___ 2018.", answers: ['since'] },
      { kind: 'gap', id: 'g-since-for-02', prompt: "I've been working here ___ eight years.", answers: ['for'] },
      { kind: 'gap', id: 'g-since-for-03', prompt: 'I started working here eight years ___.', answers: ['ago'] },
      { kind: 'gap', id: 'g-since-for-04', prompt: 'I worked at JBC ___ 10 years.', answers: ['for'] },
      { kind: 'gap', id: 'g-since-for-05', prompt: 'Nobody spoke ___ the presentation.', answers: ['during'] },
      { kind: 'gap', id: 'g-since-for-06', prompt: 'She ___ (wait) for the results since this morning.', answers: ['has been waiting', "'s been waiting"] },
      { kind: 'transform', id: 'g-since-for-07', instruction: 'Construis la question au present perfect continuous.', prompt: 'How long / you / learn / English?', answers: ['How long have you been learning English?'] },
      { kind: 'gap', id: 'g-since-for-08', prompt: "I ___ (know) him since we were at university.", answers: ['have known', "'ve known"], explanation: '« Know » = verbe d\'état → present perfect simple.' },
      { kind: 'gap', id: 'g-since-for-09', prompt: "We ___ (try) to solve this problem for weeks!", answers: ['have been trying', "'ve been trying"] },
      { kind: 'gap', id: 'g-since-for-10', prompt: "She's tired because she ___ (run).", answers: ['has been running', "'s been running"] },
      {
        kind: 'mcq', id: 'g-since-for-11', prompt: '« Il vit là depuis 20 ans. »',
        options: ['He has been living there for 20 years.', 'He lives there since 20 years.', 'He is living there for 20 years.', 'He lived there since 20 years.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-since-for-12', prompt: 'Since when have you been making candles?',
        options: ['Since 2019.', 'For 2019.', 'Since 7 years.', '2019 ago.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-since-for-13', prompt: "I've ___ three reports this week.",
        options: ['written', 'been writing', 'wrote', 'writing'], answer: 0,
        explanation: 'Quantité / résultat (three reports) → present perfect simple.',
      },
      {
        kind: 'transform', id: 'g-since-for-14', instruction: 'Traduis en anglais (present perfect continuous).',
        prompt: 'Nous attendons la livraison depuis deux semaines.',
        answers: ['We have been waiting for the delivery for two weeks.', "We've been waiting for the delivery for two weeks."],
      },
      {
        kind: 'transform', id: 'g-since-for-15', instruction: 'Réécris avec « for » sans changer le sens (on est en 2026).',
        prompt: 'I have lived in Liège since 2016.',
        answers: ['I have lived in Liège for ten years.', "I've lived in Liège for ten years.", 'I have been living in Liège for ten years.', "I've been living in Liège for ten years.", 'I have lived in Liège for 10 years.', "I've lived in Liège for 10 years."],
      },
    ],
  },
  {
    id: 'g-past-perfect',
    order: 7,
    group: 'temps',
    tag: 'past-perfect',
    level: 'B2+',
    title: 'Le past perfect (plus-que-parfait)',
    summary: 'Le « passé du passé » : indispensable pour raconter un incident et ses causes.',
    points: [
      {
        title: 'Formation et usage',
        explanation: 'HAD + participe passé. Pour une action ANTÉRIEURE à un autre moment du passé. Souvent l\'équivalent du plus-que-parfait français (j\'avais fait).',
        examples: [
          { en: 'When I arrived, the meeting had already started.', fr: 'Quand je suis arrivé, la réunion avait déjà commencé.' },
          { en: "The freezer had stopped during the night, so we lost all the samples." },
        ],
      },
      {
        title: 'Past simple ou past perfect ?',
        explanation: 'Si les actions sont racontées dans l\'ordre, le past simple suffit. Le past perfect sert quand on revient en arrière.',
        examples: [
          { en: 'I finished the report and sent it.', note: 'dans l\'ordre → past simple' },
          { en: 'I sent the report that I had finished the day before.', note: 'retour en arrière → past perfect' },
        ],
      },
      {
        title: 'Marqueurs et structures',
        explanation: 'already, just, never… before, by the time, after, before, when. Et avec les regrets : I wish I had…, If I had known…',
        examples: [
          { en: 'By the time the technician arrived, we had fixed the problem ourselves.' },
          { en: "I had never seen so many tourists before." },
          { en: "I wish I had backed up the data." },
        ],
      },
      {
        title: 'Past perfect continuous',
        explanation: 'HAD BEEN + -ing : durée d\'une activité jusqu\'à un moment du passé.',
        examples: [{ en: 'I had been working at JBC since 2011 when I decided to quit.' }],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-past-perfect-01', prompt: 'When we arrived at the station, the train ___ (already / leave).', answers: ['had already left'] },
      { kind: 'gap', id: 'g-past-perfect-02', prompt: 'We lost the samples because the freezer ___ (stop) during the night.', answers: ['had stopped'] },
      { kind: 'gap', id: 'g-past-perfect-03', prompt: 'I ___ (never / see) so many tourists before I went to Barcelona.', answers: ['had never seen'] },
      { kind: 'gap', id: 'g-past-perfect-04', prompt: 'By the time the manager replied, we ___ (find) a solution.', answers: ['had found', "'d found"] },
      { kind: 'gap', id: 'g-past-perfect-05', prompt: 'She ___ (work) there for ten years when she got promoted.', answers: ['had been working', 'had worked'] },
      { kind: 'gap', id: 'g-past-perfect-06', prompt: "He was exhausted because he ___ (run) all morning.", answers: ['had been running'] },
      {
        kind: 'mcq', id: 'g-past-perfect-07', prompt: 'I couldn\'t get into the lab because I ___ my badge at home.',
        options: ['had left', 'have left', 'left since', 'was leaving'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-past-perfect-08', prompt: '« Si j\'avais su, je serais venu. »',
        options: ['If I had known, I would have come.', 'If I knew, I would have come.', 'If I would have known, I had come.', 'If I have known, I would come.'], answer: 0,
        tags: ['conditionals'],
      },
      {
        kind: 'mcq', id: 'g-past-perfect-09', prompt: 'Which sentence tells the events in order (no past perfect needed)?',
        options: ['I checked the data and then called the client.', 'I had checked the data and then had called the client.', 'I have checked the data and then called the client.', 'I was checking the data and then had called the client.'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-past-perfect-10', instruction: 'Relie avec « because » en utilisant le past perfect.',
        prompt: 'The analysis failed. Someone had not calibrated the machine. → The analysis failed because…',
        answers: ["The analysis failed because nobody had calibrated the machine.", "The analysis failed because someone hadn't calibrated the machine.", 'The analysis failed because someone had not calibrated the machine.', "The analysis failed because the machine hadn't been calibrated.", 'The analysis failed because the machine had not been calibrated.'],
      },
      {
        kind: 'transform', id: 'g-past-perfect-11', instruction: 'Traduis en anglais.',
        prompt: "Quand je suis arrivé, tout le monde était déjà parti.",
        answers: ['When I arrived, everyone had already left.', 'When I arrived, everybody had already left.', 'When I got there, everyone had already left.'],
      },
    ],
  },
  {
    id: 'g-used-to',
    order: 8,
    group: 'temps',
    tag: 'used-to',
    level: 'B2+',
    title: 'Used to, would, be used to, get used to',
    summary: 'Parler de ses anciennes habitudes — et de ce à quoi on s\'habitue.',
    points: [
      {
        title: 'Used to + base verbale : habitude ou état révolu',
        explanation: 'Ce qui était vrai avant et ne l\'est plus. Négation : didn\'t use to. Question : Did you use to…?',
        examples: [
          { en: 'I used to work in a laboratory.', fr: 'Avant, je travaillais dans un labo (plus maintenant).' },
          { en: "I didn't use to like coffee." },
          { en: 'I used to see couples that… / Sometimes I see couples that…', note: 'Vu au cours du 19.08' },
        ],
      },
      {
        title: 'Would + base verbale : habitude passée (récit)',
        explanation: 'Pour des ACTIONS répétées dans un récit nostalgique. Pas pour les états (✗ I would live in Paris).',
        examples: [{ en: 'Every summer, we would go to the seaside and my grandfather would take us fishing.' }],
      },
      {
        title: 'Be used to + -ing / nom : être habitué à',
        explanation: 'Attention : ici « to » est une préposition → -ing.',
        examples: [
          { en: "I'm used to working in English.", fr: "J'ai l'habitude de travailler en anglais." },
          { en: "She isn't used to the cold." },
        ],
      },
      {
        title: 'Get used to + -ing / nom : s\'habituer à',
        explanation: 'Le processus d\'adaptation.',
        examples: [
          { en: "It took me months to get used to driving on the left." },
          { en: "You'll get used to it." },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-used-to-01', prompt: 'I ___ (work) in a laboratory, but now I work in quality control.', answers: ['used to work'] },
      { kind: 'gap', id: 'g-used-to-02', prompt: "I'm used to ___ (speak) English at work.", answers: ['speaking'] },
      { kind: 'gap', id: 'g-used-to-03', prompt: 'It took me a while to get used to ___ (wear) a mask in the clean room.', answers: ['wearing'] },
      { kind: 'gap', id: 'g-used-to-04', prompt: 'Did you ___ live in Brussels?', answers: ['use to'] },
      { kind: 'gap', id: 'g-used-to-05', prompt: "She didn't ___ like meetings, but now she enjoys them.", answers: ['use to'] },
      {
        kind: 'mcq', id: 'g-used-to-06', prompt: '« J\'ai l\'habitude de me lever tôt. »',
        options: ["I'm used to getting up early.", 'I used to get up early.', "I'm used to get up early.", 'I use to getting up early.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-used-to-07', prompt: 'Which sentence is NOT correct?',
        options: ['When I was a child, I would live in Namur.', 'When I was a child, I used to live in Namur.', 'When I was a child, I lived in Namur.', 'When I was a child, we would play outside every day.'], answer: 0,
        explanation: '« Would » ne s\'utilise pas pour un état (live, be, have, know).',
      },
      {
        kind: 'mcq', id: 'g-used-to-08', prompt: '« Tu t\'y habitueras. »',
        options: ["You'll get used to it.", "You'll be used it.", "You'll used to it.", "You'll use to it."], answer: 0,
      },
      {
        kind: 'transform', id: 'g-used-to-09', instruction: 'Réécris avec « used to ».',
        prompt: 'Before, I drank a lot of coffee. Now I drink tea.',
        answers: ['I used to drink a lot of coffee. Now I drink tea.', 'I used to drink a lot of coffee, but now I drink tea.'],
      },
      {
        kind: 'transform', id: 'g-used-to-10', instruction: 'Traduis en anglais.',
        prompt: "Je ne suis pas habitué à travailler de chez moi.",
        answers: ["I'm not used to working from home.", 'I am not used to working from home.', "I'm not used to working remotely."],
      },
    ],
  },
  {
    id: 'g-future',
    order: 9,
    group: 'temps',
    tag: 'future',
    level: 'B2+',
    title: 'Les futurs : will, going to, present continuous',
    summary: "Choisir la bonne forme selon qu'on décide, prévoit, a organisé… et le piège du « will » après if/when.",
    points: [
      {
        title: 'Will : décision immédiate, promesse, prédiction',
        explanation: 'Décision prise sur le moment, offre, promesse, prédiction fondée sur une opinion (I think / probably).',
        examples: [
          { en: "I'll call the supplier right now." },
          { en: 'I think there will be fewer accidents in the future.' },
          { en: 'He will no longer be our boss.', note: 'Vu au cours du 09.09' },
        ],
      },
      {
        title: 'Going to : intention déjà décidée, prédiction évidente',
        explanation: 'Projet déjà en tête, ou prédiction fondée sur un indice présent.',
        examples: [
          { en: "We're going to launch the new product in March." },
          { en: "Look at those clouds — it's going to rain." },
        ],
      },
      {
        title: 'Present continuous : rendez-vous organisé',
        explanation: 'Quelque chose de planifié avec d\'autres personnes, une date fixée.',
        examples: [{ en: "We're meeting the auditors on Tuesday." }],
      },
      {
        title: '⚠️ Pas de « will » après if, when, as soon as, before, until, once',
        explanation: 'Dans une subordonnée de temps ou de condition, le futur s\'exprime avec le PRÉSENT (ou le present perfect).',
        examples: [
          { en: "If the need is still there, we will grow.", note: '✗ If the need will still be there — cours du 02.07' },
          { en: "I'll send it as soon as I've finished.", note: '✗ as soon as I will finish' },
          { en: 'When you are satisfied with the writing, you can move on.' },
        ],
      },
      {
        title: 'Futur dans le passé : would',
        explanation: 'Dans un récit au passé, « will » devient « would ».',
        examples: [{ en: "I thought it would make me feel uncomfortable.", note: '✗ it will make — cours du 12.08' }],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-future-01', prompt: "The phone's ringing. — Don't worry, I ___ (get) it.", answers: ["'ll get", 'will get'] },
      { kind: 'gap', id: 'g-future-02', prompt: 'We ___ (move) to a new building next year — the contract is signed.', answers: ['are moving', "'re moving", 'are going to move', "'re going to move"] },
      { kind: 'gap', id: 'g-future-03', prompt: "I'll call you when I ___ (arrive).", answers: ['arrive'] },
      { kind: 'gap', id: 'g-future-04', prompt: 'If it ___ (rain) tomorrow, we will cancel the picnic.', answers: ['rains'] },
      { kind: 'gap', id: 'g-future-05', prompt: 'As soon as the results ___ (come) in, I will let you know.', answers: ['come'] },
      { kind: 'gap', id: 'g-future-06', prompt: "I knew the meeting ___ (be) long.", answers: ['would be'] },
      { kind: 'gap', id: 'g-future-07', prompt: 'Look at the queue! We ___ (be) late.', answers: ["'re going to be", 'are going to be'] },
      {
        kind: 'mcq', id: 'g-future-08', prompt: 'Which sentence is correct?',
        options: ['I will send it once I have checked it.', 'I will send it once I will have checked it.', 'I send it once I will check it.', 'I will send it once I will check it.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-future-09', prompt: "She ___ 80 on the 25th of September. (c'est une date prévue)",
        options: ['is turning', 'turns will', 'is going turn', 'will turning'], answer: 0,
      },
      {
        kind: 'fix', id: 'g-future-10', wrong: 'We will save money when we will work remotely.',
        answers: ['We will save money when we work remotely.', "We'll save money when we work remotely."],
        explanation: 'Pas de « will » après « when ».',
      },
      {
        kind: 'transform', id: 'g-future-11', instruction: 'Traduis en anglais.',
        prompt: "Je t'enverrai le rapport dès que je l'aurai fini.",
        answers: ["I'll send you the report as soon as I've finished it.", 'I will send you the report as soon as I have finished it.', "I'll send you the report as soon as I finish it.", 'I will send you the report as soon as I finish it.'],
      },
    ],
  },
  {
    id: 'g-future-advanced',
    order: 10,
    group: 'temps',
    tag: 'future',
    level: 'C1',
    title: 'Future continuous & future perfect',
    summary: 'Pour aller vers le C1 : se projeter à un moment précis du futur, ou faire le bilan à une date future.',
    points: [
      {
        title: 'Future continuous : will be + -ing',
        explanation: 'Action en cours à un moment précis du futur. Aussi pour demander poliment les plans de quelqu\'un.',
        examples: [
          { en: 'This time next week, I will be lying on a beach.' },
          { en: 'In 2050, robots will be doing most of the repetitive tasks.' },
          { en: 'Will you be using the centrifuge this afternoon?', note: 'question polie' },
        ],
      },
      {
        title: 'Future perfect : will have + participe passé',
        explanation: 'Action qui sera terminée AVANT un moment futur. Marqueur typique : by (by Friday, by 2030, by the time…).',
        examples: [
          { en: 'By Friday, we will have finished the validation.' },
          { en: 'By 2030, the company will have doubled its revenue.' },
        ],
      },
      {
        title: 'Future perfect continuous (C1+)',
        explanation: 'will have been + -ing : durée à un moment du futur.',
        examples: [{ en: 'In June, I will have been working here for ten years.' }],
      },
      {
        title: 'Autres façons de parler du futur (C1)',
        explanation: 'be about to (sur le point de), be due to (prévu pour), be likely to (probable), be bound to (forcément).',
        examples: [
          { en: 'The results are due to be published in May.' },
          { en: "Prices are likely to rise." },
          { en: "It's bound to go over budget." },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-future-advanced-01', prompt: 'By the end of the month, we ___ (complete) the audit.', answers: ['will have completed', "'ll have completed"] },
      { kind: 'gap', id: 'g-future-advanced-02', prompt: "Don't call at 3 — I ___ (present) the results to the board.", answers: ['will be presenting', "'ll be presenting"] },
      { kind: 'gap', id: 'g-future-advanced-03', prompt: 'In 2050, most people ___ (work) remotely.', answers: ['will be working', 'will work'] },
      { kind: 'gap', id: 'g-future-advanced-04', prompt: 'By 2030, the city ___ (ban) all tourist rentals.', answers: ['will have banned'] },
      { kind: 'gap', id: 'g-future-advanced-05', prompt: 'Hurry up, the train is ___ to leave!', answers: ['about'] },
      {
        kind: 'mcq', id: 'g-future-advanced-06', prompt: 'Next June, I ___ here for ten years.',
        options: ['will have been working', 'will be working since', 'am working', 'will work since'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-future-advanced-07', prompt: 'Polite question: ___ the meeting room this afternoon?',
        options: ['Will you be using', 'Are you use', 'Will you have used', 'Do you will use'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-future-advanced-08', instruction: 'Réécris avec le future perfect et « by ».',
        prompt: 'We will finish the project before December.',
        answers: ['By December, we will have finished the project.', 'We will have finished the project by December.', "We'll have finished the project by December.", "By December, we'll have finished the project."],
      },
      {
        kind: 'transform', id: 'g-future-advanced-09', instruction: 'Réécris avec « be likely to ».',
        prompt: 'Prices will probably rise next year.',
        answers: ['Prices are likely to rise next year.'],
      },
    ],
  },
]
