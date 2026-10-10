import type { Exercise } from '../types'

// « Trouver les bonnes formulations » : exercices de reformulation pour passer du B2 au C1.
// Pour les réécritures libres (transform), plusieurs réponses sont acceptées et on peut
// toujours valider soi-même une formulation différente mais correcte.
export const styleExercises: Exercise[] = [
  // --- Le plus naturel ---
  {
    kind: 'mcq', id: 'st-01', tags: ['register'], prompt: 'Which sounds the most natural in a meeting?',
    options: ["I'd like to bring up one more point.", 'I want to say one more point.', 'I have one more point to tell.', 'I would like to add one more point to say.'], answer: 0,
    explanation: 'Bring up / raise a point = aborder un point.',
  },
  {
    kind: 'mcq', id: 'st-02', tags: ['register'], prompt: 'You need information from a colleague. The most natural e-mail opening is:',
    options: ['I was wondering if you could send me the latest figures.', 'I want the latest figures.', 'Give me please the latest figures.', 'I need that you send me the latest figures.'], answer: 0,
  },
  {
    kind: 'mcq', id: 'st-03', tags: ['collocations'], prompt: '« Nous devons respecter l\'échéance. »',
    options: ['We need to meet the deadline.', 'We need to respect the deadline.', 'We need to hold the deadline.', 'We need to follow the deadline.'], answer: 0,
  },
  {
    kind: 'mcq', id: 'st-04', tags: ['collocations'], prompt: '« Elle a soulevé un point important. »',
    options: ['She raised an important point.', 'She rose an important point.', 'She lifted an important point.', 'She made up an important point.'], answer: 0,
  },
  {
    kind: 'mcq', id: 'st-05', tags: ['register'], prompt: 'Which is the best way to disagree with your manager?',
    options: ["I see your point, but I'm not entirely convinced it would work.", "You're wrong.", "No, I don't agree at all.", "That's a bad idea."], answer: 0,
  },
  {
    kind: 'mcq', id: 'st-06', tags: ['word-choice'], prompt: '« Je vous tiendrai au courant. »',
    options: ["I'll keep you posted.", "I'll hold you current.", "I'll keep you in the current.", "I'll tell you the current."], answer: 0,
  },
  {
    kind: 'mcq', id: 'st-07', tags: ['word-choice'], prompt: '« Il faut tenir compte du délai de livraison. »',
    options: ['We need to take the delivery time into account.', 'We need to hold the delivery delay in count.', 'We need to count the delivery delay.', 'We need to take account the delivery delay.'], answer: 0,
  },
  {
    kind: 'mcq', id: 'st-08', tags: ['word-choice'], prompt: 'Most natural way to end a meeting:',
    options: ["Right, I think that's everything. Thanks, everyone.", 'The meeting is finished now, you can go.', 'It is the end of this meeting.', 'We have terminated the meeting.'], answer: 0,
  },
  {
    kind: 'mcq', id: 'st-09', tags: ['word-choice'], prompt: '« À mon avis, c\'est une bonne idée. » — the most natural spoken option:',
    options: ["In my view, it's a good idea.", "At my opinion, it's a good idea.", "In my opinion, it's a good idea for me.", "According to me, it's a good idea."], answer: 0,
    explanation: '« According to me » est une faute typique de francophone : « according to » s\'emploie pour citer les autres (according to the report).',
  },
  {
    kind: 'mcq', id: 'st-10', tags: ['word-choice'], prompt: '« Ça dépend de la situation. »',
    options: ['It depends on the situation.', 'It depends of the situation.', 'It is depending of the situation.', 'It depends from the situation.'], answer: 0,
  },
  {
    kind: 'mcq', id: 'st-11', tags: ['word-choice'], prompt: '« J\'ai hâte de vous voir. »',
    options: ['I look forward to seeing you.', 'I look forward to see you.', 'I have haste to see you.', 'I am impatient to see you.'], answer: 0,
  },
  {
    kind: 'mcq', id: 'st-12', tags: ['word-choice'], prompt: '« Je suis d\'accord avec toi. »',
    options: ['I agree with you.', 'I am agree with you.', 'I am agreed with you.', 'I agree you.'], answer: 0,
  },
  // --- Réécritures ---
  {
    kind: 'transform', id: 'st-13', tags: ['register'], level: 'B2+', instruction: 'Rends cette phrase plus professionnelle.',
    prompt: 'The results are really bad.',
    answers: ['The results are disappointing.', 'The results fell short of our expectations.', 'The results are far from satisfactory.', "The results didn't meet our expectations.", 'The results are not satisfactory.'],
  },
  {
    kind: 'transform', id: 'st-14', tags: ['register'], level: 'B2+', instruction: 'Rends cette demande plus polie.',
    prompt: 'Can you send me the file?',
    answers: ['Could you send me the file, please?', 'Would you mind sending me the file?', 'I was wondering if you could send me the file.', 'Would it be possible to send me the file?', 'Could you please send me the file?'],
  },
  {
    kind: 'transform', id: 'st-15', tags: ['register'], level: 'B2+', instruction: 'Remplace « a lot » par une formulation plus précise.',
    prompt: 'The price went up a lot.',
    answers: ['The price rose sharply.', 'The price increased sharply.', 'The price increased significantly.', 'The price rose significantly.', 'There was a sharp increase in the price.', 'The price increased dramatically.'],
  },
  {
    kind: 'transform', id: 'st-16', tags: ['register'], level: 'C1', instruction: 'Réécris de façon plus nuancée (hedging).',
    prompt: 'This method is the best.',
    answers: ['This method seems to be the most effective.', 'This method is arguably the best.', 'This method appears to be the most effective.', 'This method is probably the best.', 'This method would seem to be the best.'],
  },
  {
    kind: 'transform', id: 'st-17', tags: ['linking'], level: 'B2+', instruction: 'Relie avec « whereas ».',
    prompt: 'Some employees love remote work. Others miss the office.',
    answers: ['Some employees love remote work, whereas others miss the office.', 'Whereas some employees love remote work, others miss the office.'],
  },
  {
    kind: 'transform', id: 'st-18', tags: ['linking'], level: 'B2+', instruction: 'Réécris avec « due to ».',
    prompt: 'The delivery was late because there was a strike.',
    answers: ['The delivery was late due to a strike.', 'Due to a strike, the delivery was late.', 'The delivery was delayed due to a strike.'],
  },
  {
    kind: 'transform', id: 'st-19', tags: ['register'], level: 'B2+', instruction: 'Remplace le phrasal verb par un verbe plus formel.',
    prompt: 'We need to find out why the test failed.',
    answers: ['We need to determine why the test failed.', 'We need to establish why the test failed.', 'We need to identify why the test failed.', 'We need to investigate why the test failed.'],
  },
  {
    kind: 'transform', id: 'st-20', tags: ['register'], level: 'B2+', instruction: 'Remplace le phrasal verb par un verbe plus formel.',
    prompt: 'The meeting has been put off until next week.',
    answers: ['The meeting has been postponed until next week.', 'The meeting has been postponed to next week.', 'The meeting has been rescheduled for next week.'],
  },
  {
    kind: 'transform', id: 'st-21', tags: ['word-choice'], level: 'B2+', instruction: 'Évite la répétition de « very » : choisis un adjectif plus fort.',
    prompt: 'I was very tired after the marathon.',
    answers: ['I was exhausted after the marathon.', 'I was worn out after the marathon.', 'I was drained after the marathon.', 'I was shattered after the marathon.'],
  },
  {
    kind: 'transform', id: 'st-22', tags: ['word-choice'], level: 'B2+', instruction: 'Choisis un adjectif plus fort que « very good ».',
    prompt: 'The presentation was very good.',
    answers: ['The presentation was excellent.', 'The presentation was outstanding.', 'The presentation was superb.', 'The presentation was brilliant.', 'The presentation was impressive.'],
  },
  {
    kind: 'transform', id: 'st-23', tags: ['word-choice'], level: 'B2+', instruction: 'Choisis un adjectif plus fort que « very important ».',
    prompt: 'Communication is very important for the team.',
    answers: ['Communication is essential for the team.', 'Communication is crucial for the team.', 'Communication is vital for the team.', 'Communication is key for the team.', 'Communication is critical for the team.'],
  },
  {
    kind: 'transform', id: 'st-24', tags: ['inversion'], level: 'C1', instruction: 'Mets en valeur avec « What… is… ».',
    prompt: 'We really need better communication in the team.',
    answers: ['What we really need is better communication in the team.', 'What we really need in the team is better communication.', 'What the team really needs is better communication.'],
    explanation: 'Phrase clivée : What + sujet + verbe + is + élément mis en valeur. On met en relief ce qui suit « is ».',
  },
  {
    kind: 'transform', id: 'st-25', tags: ['register'], level: 'B2+', instruction: 'Rends ce début d\'e-mail formel.',
    prompt: 'Hi, I\'m writing because I want to complain about the delivery.',
    answers: ['Dear Sir or Madam, I am writing to complain about the delivery.', 'Dear Sir or Madam, I am writing to express my dissatisfaction with the delivery.', 'Dear Sir/Madam, I am writing to complain about the delivery.', 'I am writing to complain about the delivery.', 'I am writing to express my dissatisfaction with the delivery.'],
  },
  {
    kind: 'transform', id: 'st-26', tags: ['word-choice'], level: 'B2', instruction: 'Traduis naturellement (pas mot à mot).',
    prompt: 'Ça vaut la peine d\'essayer.',
    answers: ["It's worth a try.", 'It is worth a try.', "It's worth trying.", 'It is worth trying.'],
  },
  {
    kind: 'transform', id: 'st-27', tags: ['word-choice'], level: 'B2', instruction: 'Traduis naturellement (pas mot à mot).',
    prompt: 'Je n\'ai pas eu le temps de le faire.',
    answers: ["I didn't have time to do it.", "I haven't had time to do it.", "I didn't have the time to do it.", "I haven't had the time to do it."],
  },
  {
    kind: 'transform', id: 'st-28', tags: ['word-choice'], level: 'B2+', instruction: 'Traduis naturellement (pas mot à mot).',
    prompt: 'On se tient au courant.',
    answers: ["Let's keep each other posted.", "Let's stay in touch.", "Let's keep in touch.", "We'll keep each other posted.", "Let's keep each other updated."],
  },
  {
    kind: 'transform', id: 'st-29', tags: ['word-choice'], level: 'B2+', instruction: 'Traduis naturellement (pas mot à mot).',
    prompt: 'Il est en train de se passer quelque chose d\'important.',
    answers: ['Something important is happening.', 'Something important is going on.', 'Something big is happening.'],
  },
  {
    kind: 'transform', id: 'st-30', tags: ['word-choice'], level: 'B2+', instruction: 'Traduis naturellement (pas mot à mot).',
    prompt: 'Ça ne me dérange pas.',
    answers: ["I don't mind.", "It doesn't bother me.", "That's fine with me.", 'I do not mind.'],
  },
  {
    kind: 'transform', id: 'st-31', tags: ['word-choice'], level: 'B2+', instruction: 'Traduis naturellement (pas mot à mot).',
    prompt: 'Au fur et à mesure, on s\'est rendu compte que c\'était plus compliqué.',
    answers: ['Gradually, we realized it was more complicated.', 'As we went along, we realized it was more complicated.', 'Over time, we realized it was more complicated.', 'As time went on, we realized it was more complicated.', 'Gradually, we realised it was more complicated.'],
  },
  {
    kind: 'transform', id: 'st-32', tags: ['word-choice'], level: 'C1', instruction: 'Traduis naturellement (pas mot à mot).',
    prompt: 'Il faut dire que le budget était serré.',
    answers: ['Admittedly, the budget was tight.', 'It has to be said that the budget was tight.', 'To be fair, the budget was tight.', 'Granted, the budget was tight.'],
  },
]
