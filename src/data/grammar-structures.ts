import type { GrammarLesson } from '../types'

export const structureLessons: GrammarLesson[] = [
  {
    id: 'g-conditionals',
    order: 11,
    group: 'structures',
    tag: 'conditionals',
    level: 'B2+',
    title: 'Les conditionnels (0, 1, 2, 3 et mixtes)',
    summary: 'Faire des hypothèses : réelles, imaginaires ou regrettées. Au cœur de « Making Assumptions ».',
    points: [
      {
        title: 'Vue d\'ensemble',
        explanation: 'La règle d\'or : jamais de « would » ni de « will » dans la proposition en IF.',
        examples: [],
        table: {
          head: ['Type', 'If…', 'Proposition principale', 'Sens'],
          rows: [
            ['0', 'présent', 'présent', 'vérité générale'],
            ['1', 'présent', 'will + base', 'futur réel / probable'],
            ['2', 'prétérit (were)', 'would + base', 'hypothèse imaginaire au présent'],
            ['3', 'had + participe', 'would have + participe', 'passé irréel (regret)'],
            ['Mixte', 'had + participe', 'would + base', 'passé irréel → conséquence présente'],
          ],
        },
      },
      {
        title: 'Type 0 et 1 : le réel',
        explanation: '0 = toujours vrai. 1 = situation possible dans le futur.',
        examples: [
          { en: 'If you heat the culture, the cells grow faster.' },
          { en: "If the delivery arrives late, we'll postpone the test." },
          { en: 'If in the future the need is still there, we will grow.', note: 'Cours du 02.07' },
        ],
      },
      {
        title: 'Type 2 : l\'imaginaire',
        explanation: 'Situation irréelle ou peu probable. « If I were » (pour toutes les personnes, en langage soigné).',
        examples: [
          { en: 'If we adopted a 4-day week, people would be more motivated.' },
          { en: 'If I were you, I would talk to him directly.' },
        ],
      },
      {
        title: 'Type 3 : le passé qu\'on ne peut pas changer',
        explanation: 'Regrets, reproches, analyses après coup (idéal pour « Identifying problems » : ce qui aurait pu être évité).',
        examples: [
          { en: 'If we had checked the equipment, the problem would not have happened.' },
          { en: "If I had known, I would have come." },
        ],
      },
      {
        title: 'Mixte et variantes (C1)',
        explanation: 'Passé irréel → présent. Et alternatives à « if » : unless (= if not), provided that / as long as (à condition que), otherwise (sinon).',
        examples: [
          { en: 'If I had studied medicine, I would be a surgeon now.' },
          { en: "We won't finish on time unless we hire someone." },
          { en: 'That could work, provided that the budget allows it.' },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-conditionals-01', prompt: 'If the supplier ___ (not / deliver) by Friday, we will cancel the order.', answers: ["doesn't deliver", 'does not deliver'] },
      { kind: 'gap', id: 'g-conditionals-02', prompt: 'If I ___ (have) more time, I would learn Spanish too.', answers: ['had'] },
      { kind: 'gap', id: 'g-conditionals-03', prompt: 'If we had followed the procedure, we ___ (not / lose) the samples.', answers: ["wouldn't have lost", 'would not have lost'] },
      { kind: 'gap', id: 'g-conditionals-04', prompt: 'If I ___ (be) you, I would accept the offer.', answers: ['were', 'was'] },
      { kind: 'gap', id: 'g-conditionals-05', prompt: "What would you do if you ___ (win) the lottery?", answers: ['won'] },
      { kind: 'gap', id: 'g-conditionals-06', prompt: 'If she had taken the job in Canada, she ___ (live) in Montreal now.', answers: ['would be living', 'would live'] },
      { kind: 'gap', id: 'g-conditionals-07', prompt: "We won't finish on time ___ we get more help.", answers: ['unless'] },
      {
        kind: 'mcq', id: 'g-conditionals-08', prompt: 'Which sentence is correct?',
        options: ['If it rains, we will stay inside.', 'If it will rain, we will stay inside.', 'If it would rain, we stay inside.', 'If it rained, we will stay inside.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-conditionals-09', prompt: '« Si j\'avais su, je serais venu plus tôt. »',
        options: ['If I had known, I would have come earlier.', 'If I would have known, I would have come earlier.', 'If I knew, I would come earlier.', 'If I had known, I would come earlier yesterday.'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-conditionals-10', instruction: 'Réécris avec le 3e conditionnel.',
        prompt: "We didn't check the freezer, so we lost the samples.",
        answers: ['If we had checked the freezer, we would not have lost the samples.', "If we had checked the freezer, we wouldn't have lost the samples.", "If we'd checked the freezer, we wouldn't have lost the samples."],
      },
      {
        kind: 'transform', id: 'g-conditionals-11', instruction: 'Réécris avec « unless ».',
        prompt: "If we don't reduce costs, we will go over budget.",
        answers: ['Unless we reduce costs, we will go over budget.', "Unless we reduce costs, we'll go over budget.", 'We will go over budget unless we reduce costs.'],
      },
      {
        kind: 'transform', id: 'g-conditionals-12', instruction: 'Traduis en anglais.',
        prompt: 'Si nous adoptions la semaine de quatre jours, les employés seraient plus motivés.',
        answers: ['If we adopted a four-day week, employees would be more motivated.', 'If we adopted the four-day week, employees would be more motivated.', 'If we adopted a 4-day week, employees would be more motivated.', 'If we adopted a four-day workweek, employees would be more motivated.', 'If we adopted a four-day week, the employees would be more motivated.'],
      },
    ],
  },
  {
    id: 'g-modals-deduction',
    order: 12,
    group: 'structures',
    tag: 'modals-deduction',
    level: 'C1',
    title: 'Modaux de déduction et de regret',
    summary: 'must, might, can\'t (+ have + participe) pour supposer ; should have pour les reproches et regrets.',
    points: [
      {
        title: 'Au présent : degré de certitude',
        explanation: 'MUST = j\'en suis presque sûr (oui). MIGHT / MAY / COULD = c\'est possible. CAN\'T = j\'en suis presque sûr (non). ⚠️ « Mustn\'t » n\'exprime pas la déduction : c\'est une interdiction.',
        examples: [
          { en: "He isn't answering. He must be in a meeting." },
          { en: 'It might be related to him having a bigger issue to deal with.', note: 'Cours du 23.09' },
          { en: "That can't be the right result — it's negative!" },
        ],
      },
      {
        title: 'Au passé : modal + have + participe passé',
        explanation: 'La même logique appliquée à une situation passée.',
        examples: [
          { en: 'The door was open. Someone must have forgotten to lock it.' },
          { en: 'She might have missed the train.' },
          { en: "He can't have seen the email — he was on holiday." },
        ],
      },
      {
        title: 'Reproche et regret : should have / could have',
        explanation: 'SHOULD HAVE + participe = il aurait fallu (reproche, regret). COULD HAVE = on aurait pu (possibilité non réalisée). NEEDN\'T HAVE = ce n\'était pas nécessaire (mais on l\'a fait).',
        examples: [
          { en: 'We should have checked the equipment earlier.' },
          { en: 'You could have told me!' },
          { en: "You needn't have printed it — I had a copy." },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-modals-deduction-01', prompt: "She's been working for 12 hours. She ___ be exhausted.", answers: ['must'] },
      { kind: 'gap', id: 'g-modals-deduction-02', prompt: "That ___ be Paul — he's in Canada this week.", answers: ["can't", 'cannot', "couldn't"] },
      { kind: 'gap', id: 'g-modals-deduction-03', prompt: 'The samples are missing. Someone must ___ moved them.', answers: ['have'] },
      { kind: 'gap', id: 'g-modals-deduction-04', prompt: 'We ___ have ordered more reagents — now we have to wait two weeks.', answers: ['should'] },
      { kind: 'gap', id: 'g-modals-deduction-05', prompt: "I'm not sure where he is. He ___ be in the clean room.", answers: ['might', 'may', 'could'] },
      {
        kind: 'mcq', id: 'g-modals-deduction-06', prompt: 'The road is wet. → It ___ during the night.',
        options: ['must have rained', 'must rain', 'should have rained', "can't have rained"], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-modals-deduction-07', prompt: 'Which sentence expresses a REGRET?',
        options: ['I should have saved the file.', 'I must have saved the file.', "I can't have saved the file.", 'I might save the file.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-modals-deduction-08', prompt: '« Il a dû oublier. » (déduction)',
        options: ['He must have forgotten.', 'He had to forget.', 'He must forget.', 'He should have forgotten.'], answer: 0,
        explanation: '« Il a dû » = déduction → must have + participe. (« He had to » = il a été obligé de.)',
      },
      {
        kind: 'transform', id: 'g-modals-deduction-09', instruction: 'Transforme en déduction avec un modal.',
        prompt: "I'm sure she didn't receive my message.",
        answers: ["She can't have received my message.", "She couldn't have received my message.", 'She cannot have received my message.'],
      },
      {
        kind: 'transform', id: 'g-modals-deduction-10', instruction: 'Exprime un reproche avec « should have ».',
        prompt: "The manager didn't create a proper timeline. (reproche)",
        answers: ['The manager should have created a proper timeline.', 'He should have created a proper timeline.'],
      },
    ],
  },
  {
    id: 'g-suggestions',
    order: 13,
    group: 'structures',
    tag: 'suggestions',
    level: 'B2+',
    title: 'Suggérer, conseiller, recommander',
    summary: 'Les structures qui suivent suggest, recommend, advise, it\'s worth… — sources d\'erreurs fréquentes.',
    points: [
      {
        title: 'Suggest / recommend',
        explanation: 'SUGGEST / RECOMMEND + -ing, ou + that + sujet + verbe (base). Jamais « suggest to do » ni « suggest someone to do ».',
        examples: [
          { en: 'I suggest postponing the launch.' },
          { en: 'I recommend that he talk to each person individually.', note: 'subjonctif : base verbale, même à la 3e personne (formel)' },
          { en: 'I suggest that we meet on Monday.' },
        ],
      },
      {
        title: 'Advise / encourage / urge',
        explanation: 'Ces verbes-là prennent quelqu\'un + TO.',
        examples: [
          { en: 'I advise you to back up your data.' },
          { en: 'They encouraged us to apply.' },
        ],
      },
      {
        title: 'Formules utiles',
        explanation: "It's worth + -ing ; Why don't we + base ? ; How about / What about + -ing ? ; You'd better + base (avertissement) ; It might be a good idea to…",
        examples: [
          { en: 'It might be worth asking for a second opinion.' },
          { en: "How about ordering from a caterer?" },
          { en: "You'd better leave now or you'll miss the train." },
        ],
      },
      {
        title: 'Should / ought to',
        explanation: 'Conseil simple. Cours du 15.07 : « He should focus more precisely on each task. »',
        examples: [
          { en: 'He should have a discussion with each person.' },
          { en: 'You ought to ask your manager.' },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-suggestions-01', prompt: 'I suggest ___ (hire) a temporary technician.', answers: ['hiring'] },
      { kind: 'gap', id: 'g-suggestions-02', prompt: 'The doctor advised him ___ rest for two weeks.', answers: ['to'] },
      { kind: 'gap', id: 'g-suggestions-03', prompt: "It's worth ___ (visit) the old town.", answers: ['visiting'] },
      { kind: 'gap', id: 'g-suggestions-04', prompt: "You'd better ___ (not / be) late for the audit.", answers: ['not be'] },
      { kind: 'gap', id: 'g-suggestions-05', prompt: "What about ___ (use) visual aids in the presentation?", answers: ['using'] },
      {
        kind: 'mcq', id: 'g-suggestions-06', prompt: 'Which sentence is correct?',
        options: ['She suggested taking a break.', 'She suggested to take a break.', 'She suggested us to take a break.', 'She suggested we taking a break.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-suggestions-07', prompt: 'Which sentence is correct?',
        options: ['They recommended that we book in advance.', 'They recommended us to booking in advance.', 'They recommended to book in advance.', 'They recommended that we booking in advance.'], answer: 0,
      },
      {
        kind: 'fix', id: 'g-suggestions-08', wrong: 'I suggest you to call the client.',
        answers: ['I suggest you call the client.', 'I suggest that you call the client.', 'I suggest calling the client.'],
        explanation: 'Suggest + (that) + sujet + verbe, ou suggest + -ing.',
      },
      {
        kind: 'transform', id: 'g-suggestions-09', instruction: 'Transforme en suggestion avec « It might be worth… ».',
        prompt: 'We could ask for a discount.',
        answers: ['It might be worth asking for a discount.'],
      },
    ],
  },
  {
    id: 'g-passive',
    order: 14,
    group: 'structures',
    tag: 'passive',
    level: 'B2',
    title: 'Le passif (et « can be done by + -ing »)',
    summary: 'Indispensable pour décrire une procédure, un processus ou une organisation de manière professionnelle.',
    points: [
      {
        title: 'Formation : BE (au bon temps) + participe passé',
        explanation: 'C\'est le verbe BE qui porte le temps.',
        examples: [],
        table: {
          head: ['Temps', 'Passif'],
          rows: [
            ['Présent', 'The samples are stored at -80 °C.'],
            ['Présent continu', 'The room is being cleaned.'],
            ['Past simple', 'The company was founded in 1998.'],
            ['Present perfect', 'Two new sites have been opened.'],
            ['Past perfect', 'The data had been deleted.'],
            ['Futur', 'The results will be published in May.'],
            ['Modal', 'The problem can be solved.'],
          ],
        },
      },
      {
        title: 'Passif + by + -ing (cours du 22.07)',
        explanation: 'Sujet + can be + participe passé + by + verbe-ing : pour dire COMMENT on obtient un résultat.',
        examples: [
          { en: 'The problem can be solved by changing the process.' },
          { en: 'The risk can be reduced by following the safety instructions.' },
          { en: 'It can be done by heating the culture.' },
        ],
      },
      {
        title: 'L\'agent avec BY',
        explanation: 'Si on précise qui fait l\'action : by + agent.',
        examples: [
          { en: 'A lot of things can be managed by AI.', note: '✗ with AI — cours du 19.08' },
          { en: 'The data was stolen from him by hackers.' },
        ],
      },
      {
        title: 'Have something done / get something done',
        explanation: 'Faire faire quelque chose par quelqu\'un d\'autre.',
        examples: [
          { en: 'We had the freezer repaired.' },
          { en: "I'm getting my hair cut on Friday." },
        ],
      },
      {
        title: 'Passif impersonnel (C1)',
        explanation: 'It is said / believed / expected that… ; He is said to be… — très utilisé dans les rapports.',
        examples: [
          { en: 'It is expected that prices will rise.' },
          { en: 'The company is said to be the best employer in the region.' },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-passive-01', prompt: 'The company ___ (found) in 1998.', answers: ['was founded'] },
      { kind: 'gap', id: 'g-passive-02', prompt: 'The samples ___ (store) at -80 °C.', answers: ['are stored'] },
      { kind: 'gap', id: 'g-passive-03', prompt: 'Two new technicians ___ (hire) this year.', answers: ['have been hired'] },
      { kind: 'gap', id: 'g-passive-04', prompt: 'The results ___ (publish) next month.', answers: ['will be published'] },
      { kind: 'gap', id: 'g-passive-05', prompt: 'The quality can be improved ___ checking the equipment regularly.', answers: ['by'] },
      { kind: 'gap', id: 'g-passive-06', prompt: 'The room is ___ (clean) right now, so we can\'t go in.', answers: ['being cleaned'] },
      { kind: 'gap', id: 'g-passive-07', prompt: 'We had the centrifuge ___ (repair) last week.', answers: ['repaired'] },
      {
        kind: 'mcq', id: 'g-passive-08', prompt: 'Choose the correct passive sentence.',
        options: ['The data was stolen from him.', 'The data was stolen to him.', 'He was stolen the data.', 'The data stole from him.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-passive-09', prompt: '« On dit que c\'est le meilleur employeur de la région. » (style rapport)',
        options: ['It is said to be the best employer in the region.', 'It says to be the best employer in the region.', 'One says it is the best employer of the region.', 'It is saying the best employer in the region.'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-passive-10', instruction: 'Mets au passif.',
        prompt: 'The technician calibrates the machines every month.',
        answers: ['The machines are calibrated every month.', 'The machines are calibrated by the technician every month.', 'The machines are calibrated every month by the technician.'],
      },
      {
        kind: 'transform', id: 'g-passive-11', instruction: 'Mets au passif (present perfect).',
        prompt: 'Someone has deleted the file.',
        answers: ['The file has been deleted.'],
      },
      {
        kind: 'transform', id: 'g-passive-12', instruction: 'Utilise « can be + participe passé + by + -ing ».',
        prompt: 'If you store the product at the correct temperature, you protect it.',
        answers: ['The product can be protected by storing it at the correct temperature.'],
      },
    ],
  },
  {
    id: 'g-gerund-inf',
    order: 15,
    group: 'structures',
    tag: 'gerund-inf',
    level: 'B2+',
    title: 'Gérondif (-ing) ou infinitif (to) ?',
    summary: 'enjoy doing, want to do, make someone do, prevent from doing… La source de nombreuses erreurs de tes cours.',
    points: [
      {
        title: 'Après une préposition : toujours -ing',
        explanation: 'before, after, by, without, instead of, in the process of, responsible for, upset about, interested in… + -ing.',
        examples: [
          { en: 'Before going on vacation, …', note: '✗ before to go — cours du 22.07' },
          { en: "I'm in the process of moving.", note: '✗ to move — cours du 09.09' },
          { en: 'We make our lives easier by using these devices.' },
          { en: 'About 50% are upset about coming back to the office.' },
        ],
      },
      {
        title: 'Verbes + -ing',
        explanation: 'enjoy, avoid, consider, suggest, recommend, mind, finish, keep, risk, imagine, deny, miss, can\'t stand, look forward to, be used to.',
        examples: [
          { en: 'Other cities are considering implementing a similar policy.', note: '✗ considering to implement — cours du 12.08' },
          { en: "I look forward to hearing from you." },
        ],
      },
      {
        title: 'Verbes + to',
        explanation: 'want, need, decide, plan, hope, expect, manage, afford, agree, refuse, promise, seem, tend, fail, learn, would like.',
        examples: [
          { en: "I didn't manage to exchange the gift." },
          { en: 'He has a tendency to change his mind.' },
        ],
      },
      {
        title: 'Verbe + quelqu\'un + to / + base',
        explanation: 'want / ask / allow / expect / encourage / advise sb TO do. Mais MAKE et LET sb + base (sans to).',
        examples: [
          { en: "She didn't want us to pay for her.", note: '✗ want that we pay — cours du 19.08' },
          { en: 'Working remotely allows you to be more efficient.', note: '✗ allows to be — cours du 09.09' },
          { en: 'He made me watch movies.', note: '✗ made me to watch — cours du 12.08' },
        ],
      },
      {
        title: 'Prevent / stop someone FROM doing',
        explanation: 'Empêcher = prevent / stop + quelqu\'un / quelque chose + FROM + -ing.',
        examples: [{ en: 'To prevent it from happening again, we changed the procedure.', note: 'Cours du 05.08' }],
      },
      {
        title: 'Changement de sens (C1)',
        explanation: 'remember / forget / stop / try / regret changent de sens selon la forme.',
        examples: [
          { en: 'I stopped smoking. (j\'ai arrêté de fumer) / I stopped to smoke. (je me suis arrêté pour fumer)' },
          { en: "Remember to lock the door. (pense à) / I remember locking the door. (je me souviens de)" },
          { en: 'Try restarting the machine. (essaie, pour voir) / I tried to restart it. (j\'ai tenté, avec effort)' },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-gerund-inf-01', prompt: 'I enjoy ___ (work) with international teams.', answers: ['working'] },
      { kind: 'gap', id: 'g-gerund-inf-02', prompt: 'We decided ___ (postpone) the launch.', answers: ['to postpone'] },
      { kind: 'gap', id: 'g-gerund-inf-03', prompt: 'She let me ___ (use) her laptop.', answers: ['use'] },
      { kind: 'gap', id: 'g-gerund-inf-04', prompt: 'After ___ (mix) the ingredients, leave the dough to rest.', answers: ['mixing'] },
      { kind: 'gap', id: 'g-gerund-inf-05', prompt: 'The new rule prevents employees from ___ (use) personal USB sticks.', answers: ['using'] },
      { kind: 'gap', id: 'g-gerund-inf-06', prompt: "I look forward to ___ (hear) from you.", answers: ['hearing'] },
      { kind: 'gap', id: 'g-gerund-inf-07', prompt: 'My manager asked me ___ (prepare) the slides.', answers: ['to prepare'] },
      { kind: 'gap', id: 'g-gerund-inf-08', prompt: "I can't afford ___ (lose) this client.", answers: ['to lose'] },
      { kind: 'gap', id: 'g-gerund-inf-09', prompt: 'Would you mind ___ (close) the window?', answers: ['closing'] },
      { kind: 'gap', id: 'g-gerund-inf-10', prompt: "Don't forget ___ (label) the tubes.", answers: ['to label'] },
      {
        kind: 'mcq', id: 'g-gerund-inf-11', prompt: 'Which sentence is correct?',
        options: ['This software allows us to save time.', 'This software allows to save time.', 'This software allows saving us time.', 'This software allows that we save time.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-gerund-inf-12', prompt: '« Je me souviens d\'avoir fermé la porte. »',
        options: ['I remember locking the door.', 'I remember to lock the door.', 'I remember lock the door.', 'I remember that locking the door.'], answer: 0,
      },
      {
        kind: 'fix', id: 'g-gerund-inf-13', wrong: 'Thank you for to help me.',
        answers: ['Thank you for helping me.'],
        explanation: 'Préposition (for) + -ing.',
      },
      {
        kind: 'fix', id: 'g-gerund-inf-14', wrong: 'I want that you check the results.',
        answers: ['I want you to check the results.'],
        explanation: 'Want + quelqu\'un + to.',
      },
      {
        kind: 'transform', id: 'g-gerund-inf-15', instruction: 'Traduis en anglais.',
        prompt: 'Le télétravail nous permet de gagner du temps.',
        answers: ['Remote work allows us to save time.', 'Working remotely allows us to save time.', 'Working from home allows us to save time.', 'Remote working allows us to save time.'],
      },
    ],
  },
  {
    id: 'g-relatives',
    order: 16,
    group: 'structures',
    tag: 'relatives',
    level: 'B2',
    title: 'Les propositions relatives',
    summary: 'who, which, that, whose, where — pour des phrases plus riches et plus fluides.',
    points: [
      {
        title: 'Who / which / that',
        explanation: 'WHO pour les personnes, WHICH pour les choses, THAT pour les deux (sauf après une virgule).',
        examples: [
          { en: 'There are already some robots that help in hospitals.', note: '✗ robots who — cours du 02.09' },
          { en: 'You have to choose people who will participate in the meeting.' },
        ],
      },
      {
        title: 'Whose / where / when',
        explanation: 'WHOSE = dont (possession). WHERE = où (lieu). WHEN = où (temps).',
        examples: [
          { en: 'The colleague whose laptop was stolen called IT.' },
          { en: 'This is the lab where I did my PhD.' },
          { en: 'I remember the day when we launched the product.' },
        ],
      },
      {
        title: 'Relatives déterminatives ou explicatives',
        explanation: 'Sans virgules : l\'info est indispensable (that possible). Avec virgules : info en plus → who / which, JAMAIS that.',
        examples: [
          { en: 'The caterer that we hired last year was excellent.' },
          { en: 'Our CEO, who founded the company in 1998, is retiring.' },
          { en: 'The project went over budget, which surprised nobody.', note: '« which » reprend toute la phrase' },
        ],
      },
      {
        title: 'Omettre le pronom',
        explanation: 'Quand le pronom est complément (pas sujet), on peut l\'omettre dans une relative sans virgule.',
        examples: [{ en: "It's the first one (that) we bought ourselves.", note: 'Cours du 23.09' }],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-relatives-01', prompt: 'The engineer ___ designed the process has left the company.', answers: ['who', 'that'] },
      { kind: 'gap', id: 'g-relatives-02', prompt: 'This is the software ___ crashed yesterday.', answers: ['that', 'which'] },
      { kind: 'gap', id: 'g-relatives-03', prompt: 'The patient ___ results were positive was contacted.', answers: ['whose'] },
      { kind: 'gap', id: 'g-relatives-04', prompt: 'Liège is the city ___ I grew up.', answers: ['where'] },
      { kind: 'gap', id: 'g-relatives-05', prompt: 'The delivery was late, ___ caused a two-day delay.', answers: ['which'] },
      {
        kind: 'mcq', id: 'g-relatives-06', prompt: 'Which sentence is correct?',
        options: ['Our CEO, who founded the company, is retiring.', 'Our CEO, that founded the company, is retiring.', 'Our CEO who, founded the company is retiring.', 'Our CEO, which founded the company, is retiring.'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-relatives-07', instruction: 'Relie les deux phrases avec un pronom relatif.',
        prompt: 'I met a woman. Her son works at our company.',
        answers: ['I met a woman whose son works at our company.'],
      },
      {
        kind: 'transform', id: 'g-relatives-08', instruction: 'Relie avec « which » (qui reprend toute la phrase).',
        prompt: 'The project came in under budget. This pleased the board.',
        answers: ['The project came in under budget, which pleased the board.'],
      },
    ],
  },
  {
    id: 'g-reported',
    order: 17,
    group: 'structures',
    tag: 'reported',
    level: 'B2+',
    title: 'Discours indirect et verbes introducteurs',
    summary: 'Rapporter ce que quelqu\'un a dit — et varier au-delà de « say » (point out, argue, claim…).',
    points: [
      {
        title: 'Le recul des temps',
        explanation: 'Si le verbe introducteur est au passé, on recule d\'un temps : présent → passé, passé/present perfect → past perfect, will → would, can → could.',
        examples: [
          { en: '"I\'m tired." → She said (that) she was tired.' },
          { en: '"We have finished." → They said they had finished.' },
          { en: '"It will be ready." → He said it would be ready.' },
        ],
      },
      {
        title: 'Say / tell / ask',
        explanation: 'SAY something (to someone). TELL someone something. ASK someone if / whether / wh-…',
        examples: [
          { en: 'She told me that the results were ready.', note: '✗ she said me' },
          { en: 'He asked me whether I had sent the report.' },
          { en: 'She asked me where the meeting was.', note: 'ordre sujet-verbe, pas d\'inversion' },
        ],
      },
      {
        title: 'Verbes introducteurs (B2+/C1)',
        explanation: 'Pour enrichir un compte rendu : point out (faire remarquer), argue (soutenir), claim (prétendre), admit (reconnaître), suggest, warn (avertir), explain, confirm, deny (nier), insist.',
        examples: [
          { en: 'Linda pointed out that poor communication affects motivation.' },
          { en: 'The manager claimed that the delay was not his fault.' },
          { en: 'He admitted making a mistake.' },
        ],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-reported-01', prompt: '"I am busy." → She said that she ___ busy.', answers: ['was'] },
      { kind: 'gap', id: 'g-reported-02', prompt: '"We will call you." → They said they ___ call me.', answers: ['would'] },
      { kind: 'gap', id: 'g-reported-03', prompt: '"I have lost my badge." → He said he ___ his badge.', answers: ['had lost'] },
      { kind: 'gap', id: 'g-reported-04', prompt: 'She ___ me that the meeting was cancelled.', answers: ['told'] },
      {
        kind: 'mcq', id: 'g-reported-05', prompt: 'Which sentence is correct?',
        options: ['He asked me where the lab was.', 'He asked me where was the lab.', 'He asked to me where the lab was.', 'He said me where the lab was.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-reported-06', prompt: 'Which verb means “faire remarquer”?',
        options: ['point out', 'claim', 'deny', 'warn'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-reported-07', instruction: 'Rapporte la phrase au discours indirect.',
        prompt: '"Can you send me the data?" she asked me.',
        answers: ['She asked me if I could send her the data.', 'She asked me whether I could send her the data.', 'She asked me to send her the data.'],
      },
    ],
  },
  {
    id: 'g-comparison',
    order: 18,
    group: 'structures',
    tag: 'comparison',
    level: 'B2',
    title: 'Comparer : as…as, comparatifs, superlatifs',
    summary: 'Comparer sans se tromper — et nuancer : way more, far less, not nearly as…',
    points: [
      {
        title: 'Comparatif et superlatif',
        explanation: 'Adjectif court : -er / the -est (cheaper, the cheapest). Adjectif long : more / the most (more convenient). Irréguliers : good → better → the best ; bad → worse → the worst ; far → further.',
        examples: [
          { en: 'Their skin tone is lighter.', note: '✗ more light — cours du 12.08' },
          { en: 'She is the most intelligent student.' },
        ],
      },
      {
        title: 'Égalité : as + adjectif + as',
        explanation: 'Négation : not as… as (= moins… que). Jamais « as… than ».',
        examples: [
          { en: 'My car is not as cheap as yours.', note: 'Cours du 15.07' },
          { en: "It wasn't as good as I expected.", note: 'Cours du 12.08' },
          { en: 'Very few companies work at the same level as us.', note: 'the same… AS' },
        ],
      },
      {
        title: 'Nuancer un comparatif',
        explanation: 'Beaucoup plus : much / far / a lot / significantly / way (familier) + comparatif. Un peu plus : slightly / a bit. Jamais « very more ».',
        examples: [
          { en: "It's way more convenient." },
          { en: 'The new process is significantly more efficient.' },
          { en: "It's not nearly as expensive as I thought.", note: 'C1 : loin d\'être aussi…' },
        ],
      },
      {
        title: 'The more…, the more… (C1)',
        explanation: 'Plus…, plus…',
        examples: [{ en: 'The more you practise, the more confident you become.' }],
      },
    ],
    exercises: [
      { kind: 'gap', id: 'g-comparison-01', prompt: 'This method is ___ (cheap) than the old one.', answers: ['cheaper'] },
      { kind: 'gap', id: 'g-comparison-02', prompt: 'This is the ___ (good) result we have ever had.', answers: ['best'] },
      { kind: 'gap', id: 'g-comparison-03', prompt: "It wasn't as strict ___ the other school.", answers: ['as'] },
      { kind: 'gap', id: 'g-comparison-04', prompt: 'The situation is getting ___ (bad).', answers: ['worse'] },
      { kind: 'gap', id: 'g-comparison-05', prompt: 'The ___ you practise, the easier it gets.', answers: ['more'] },
      {
        kind: 'mcq', id: 'g-comparison-06', prompt: 'Which sentence is correct?',
        options: ['The new building is far more convenient.', 'The new building is very more convenient.', 'The new building is more convenienter.', 'The new building is most convenient than the old one.'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-comparison-07', prompt: 'Which sentence is correct?',
        options: ['We have the same equipment as them.', 'We have the same equipment than them.', 'We have the same equipment like them.', 'We have same equipment as them.'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-comparison-08', instruction: 'Réécris avec « not as… as » en gardant exactement le même sens (attention : qui est le moins cher ?).',
        prompt: 'Your car is cheaper than mine.',
        answers: ['My car is not as cheap as yours.', "My car isn't as cheap as yours.", 'Your car is not as expensive as mine.', "Your car isn't as expensive as mine."],
        explanation: "« Your car is cheaper » = ta voiture coûte moins cher. Deux façons de garder ce sens : inverser les sujets (My car is not as cheap as yours) ou garder « your car » avec l'adjectif contraire (Your car is not as expensive as mine). ⚠️ « Your car is not as cheap as mine » est correct grammaticalement mais dit l'inverse : ta voiture coûterait plus cher.",
      },
      { kind: 'gap', id: 'g-comparison-09', prompt: 'The ___ (early) we start, the sooner we can finish.', answers: ['earlier'] },
      { kind: 'gap', id: 'g-comparison-10', prompt: 'The less you sleep, the ___ (tired) you feel.', answers: ['more tired'] },
      {
        kind: 'mcq', id: 'g-comparison-11', prompt: 'Which sentence is correct?',
        options: ['The more experience you have, the easier the job becomes.', 'More experience you have, easier the job becomes.', 'The more experience you have, the more easy the job becomes.', 'The more you have experience, the easier becomes the job.'], answer: 0,
      },
      {
        kind: 'transform', id: 'g-comparison-12', instruction: 'Réécris avec « The more…, the… ».',
        prompt: 'If you practise more, you become better.',
        answers: ['The more you practise, the better you become.', 'The more you practice, the better you become.', 'The more you practise, the better you get.', 'The more you practice, the better you get.'],
        level: 'B2+',
      },
    ],
  },
  {
    id: 'g-indirect-questions',
    order: 27,
    group: 'structures',
    tag: 'indirect-questions',
    level: 'B2+',
    title: 'Questions indirectes et demandes polies',
    summary: '« Could you explain why the meeting ended early? » : pour demander une explication poliment, sans inverser le sujet.',
    points: [
      {
        title: 'Question directe → question indirecte',
        explanation: 'Après Could you tell me…, Do you know…, Could you explain…, I wonder…, I\'d like to know… : on garde l\'ordre de la phrase affirmative (sujet + verbe) et on supprime do / does / did.',
        examples: [
          { en: 'Why did the meeting end early? → Could you explain why the meeting ended early?' },
          { en: 'Where is the venue? → Do you know where the venue is?', note: '✗ where is the venue' },
          { en: 'How does it work? → Could you tell me how it works?' },
        ],
      },
      {
        title: 'Questions fermées : if / whether',
        explanation: 'Pour une question à laquelle on répond par oui ou non, on ajoute if (ou whether, plus soutenu).',
        examples: [
          { en: 'Is the room available? → Do you know if the room is available?' },
          { en: 'Did they confirm? → I was wondering whether they had confirmed.' },
        ],
      },
      {
        title: 'How come…? / What… for?',
        explanation: '« How come » (= pourquoi, oral) garde l\'ordre affirmatif. « What… for? » demande le but.',
        examples: [
          { en: "How come you didn't tell me?", note: '✗ how come didn\'t you' },
          { en: 'What did you do that for?' },
        ],
      },
      {
        title: 'Ponctuation',
        explanation: 'Si la phrase introductive est une affirmation (I wonder…, I\'d like to know…), pas de point d\'interrogation final.',
        examples: [{ en: "I'd like to know why the delivery was late." }],
      },
    ],
    exercises: [
      { kind: 'transform', id: 'g-indirect-questions-01', instruction: 'Commence par « Could you tell me… ».', prompt: 'Where is the meeting room?', answers: ['Could you tell me where the meeting room is?'] },
      { kind: 'transform', id: 'g-indirect-questions-02', instruction: 'Commence par « Could you explain why… ».', prompt: 'Why did the party end early?', answers: ['Could you explain why the party ended early?'] },
      { kind: 'transform', id: 'g-indirect-questions-03', instruction: 'Commence par « Do you know if… ».', prompt: 'Has the client confirmed?', answers: ['Do you know if the client has confirmed?', 'Do you know whether the client has confirmed?'] },
      { kind: 'transform', id: 'g-indirect-questions-04', instruction: 'Commence par « I was wondering… ».', prompt: 'When does the rehearsal start?', answers: ['I was wondering when the rehearsal starts.', 'I was wondering when the rehearsal started.'] },
      { kind: 'transform', id: 'g-indirect-questions-05', instruction: 'Commence par « Could you tell me how… ».', prompt: 'How does this user interface work?', answers: ['Could you tell me how this user interface works?'] },
      {
        kind: 'mcq', id: 'g-indirect-questions-06', prompt: 'Which sentence is correct?',
        options: ['Do you know what time it is?', 'Do you know what time is it?', 'Do you know what time does it be?', 'Do you know it is what time?'], answer: 0,
      },
      {
        kind: 'mcq', id: 'g-indirect-questions-07', prompt: 'Which sentence is correct?',
        options: ['Could you explain why you changed the script?', 'Could you explain why did you change the script?', 'Could you explain why have you changed the script?', 'Could you explain why you did change the script?'], answer: 0,
      },
      {
        kind: 'fix', id: 'g-indirect-questions-08', wrong: "I'd like to know why is the delivery late.",
        answers: ["I'd like to know why the delivery is late.", 'I would like to know why the delivery is late.'],
        explanation: 'Question indirecte : sujet + verbe (why the delivery is late).',
      },
      {
        kind: 'fix', id: 'g-indirect-questions-09', wrong: 'How come did you miss the rehearsal?',
        answers: ['How come you missed the rehearsal?'],
        explanation: '« How come » + ordre affirmatif, sans did.',
      },
    ],
  },
]
