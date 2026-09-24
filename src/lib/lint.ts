// Relecture automatique : repère dans un texte libre les erreurs typiques des francophones,
// en particulier celles corrigées pendant tes cours. Ce n'est pas un correcteur complet :
// les alertes « à vérifier » peuvent être de fausses alertes.

export interface LintHit {
  excerpt: string
  message: string
  level: 'erreur' | 'à vérifier' | 'info'
}

interface Rule {
  re: RegExp
  message: string
  level: LintHit['level']
}

const FINISHED_TIME = '(yesterday|last (?:week|month|year|weekend|night|summer|winter|spring|autumn|monday|tuesday|wednesday|thursday|friday|saturday|sunday|time)|\\d+ (?:days?|weeks?|months?|years?) ago|ago|in (?:19|20)\\d\\d|on (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday))'
const PARTICIPLES = '\\w+ed|been|gone|done|seen|made|had|met|come|become|begun|spent|left|found|taken|given|written|bought|brought|thought|told|said|sent|lost|known|heard|eaten|drunk|driven|broken|chosen|won|paid|read|run|put|got|gotten|taught|built|kept|felt|slept|understood'
const PLURALS = '(people|persons|accidents|cars|employees|problems|issues|tourists|things|samples|mistakes|errors|jobs|hours|days|students|children|options|questions|meetings|clients|customers)'

const rules: Rule[] = [
  { re: new RegExp(`\\b(have|has|'ve)\\s+(?:\\w+\\s+)?(${PARTICIPLES})\\b[^.!?]*?\\b${FINISHED_TIME}\\b`, 'gi'), message: 'Present perfect + moment passé terminé (yesterday, last…, ago, in 2019) → utilise le PAST SIMPLE.', level: 'erreur' },
  { re: new RegExp(`\\b${FINISHED_TIME}\\b[^.!?]*?\\b(have|has|'ve) (?:\\w+ )?(${PARTICIPLES})\\b`, 'gi'), message: 'Moment passé terminé + present perfect → utilise le PAST SIMPLE.', level: 'erreur' },
  { re: /\bsince\s+(\d+|one|two|three|four|five|six|seven|eight|nine|ten|a|an|several|many|few)\s+(years?|months?|weeks?|days?|hours?|minutes?)\b/gi, message: '« Since » + durée → FOR (since = point de départ : since 2019, since Monday).', level: 'erreur' },
  { re: /\b(i|we|you|they|he|she|it)\s+(am|is|are|work|works|live|lives|know|knows)\b[^.!?]*\bsince\b/gi, message: 'Présent + « since » : en anglais, une situation qui dure jusqu\'à maintenant se dit au PRESENT PERFECT (I have worked here since…).', level: 'à vérifier' },
  { re: /\b(during) (\d+|one|two|three|a|an|several) (years?|months?|weeks?|days?|hours?)\b/gi, message: 'Une durée → FOR (during = pendant un événement : during the meeting).', level: 'erreur' },
  { re: /\binformations\b/gi, message: '« Information » est indénombrable : pas de -s.', level: 'erreur' },
  { re: /\b(advices|feedbacks|equipments|furnitures|researches|knowledges|luggages|softwares|trainings|evidences|accommodations|homeworks)\b/gi, message: 'Nom indénombrable : pas de -s (advice, feedback, equipment…).', level: 'erreur' },
  { re: /\ban? (advice|information|equipment|furniture|research|news|feedback|accommodation)\b/gi, message: 'Nom indénombrable : pas de « a/an » (some advice, a piece of advice).', level: 'erreur' },
  { re: new RegExp(`\\bless ${PLURALS}\\b`, 'gi'), message: 'Nom pluriel dénombrable → FEWER (less = indénombrable).', level: 'erreur' },
  { re: new RegExp(`\\b(how|too|so) much ${PLURALS}\\b`, 'gi'), message: 'Nom pluriel dénombrable → MANY.', level: 'erreur' },
  { re: /\b(persons)\b/gi, message: 'Le pluriel courant est « people ».', level: 'à vérifier' },
  { re: /\bdepend(s|ed|ing)? of\b/gi, message: 'Depend ON.', level: 'erreur' },
  { re: /\baccording to me\b/gi, message: '« According to me » ne se dit pas : in my opinion / in my view / I think.', level: 'erreur' },
  { re: /\bdiscuss(es|ed|ing)? about\b/gi, message: '« Discuss » sans « about » (ou talk about).', level: 'erreur' },
  { re: /\b(participat\w*|take part|took part|taking part) to\b/gi, message: 'Participate IN / take part IN.', level: 'erreur' },
  { re: /\bresponsible of\b/gi, message: 'Responsible FOR.', level: 'erreur' },
  { re: /\bsatisfied of\b/gi, message: 'Satisfied WITH.', level: 'erreur' },
  { re: /\bsuffer(s|ed|ing)? of\b/gi, message: 'Suffer FROM.', level: 'erreur' },
  { re: /\battend(s|ed|ing)? to (the|a|this|that|our|my)\b/gi, message: 'Assister à = attend (sans « to »). « Attend to » = s\'occuper de.', level: 'à vérifier' },
  { re: /\bassist(s|ed|ing)? (to|at) (the|a|this|that)\b/gi, message: 'Assister à = ATTEND. « Assist » = aider.', level: 'erreur' },
  { re: /\bvery (more|less|better|worse|bigger|smaller|faster|cheaper)\b/gi, message: '« Very » + comparatif impossible → much / far / way / significantly.', level: 'erreur' },
  { re: /\b(i|we|you|they|he|she) (am|is|are) (not )?agree\b/gi, message: '« Agree » est un verbe : I agree / I don\'t agree.', level: 'erreur' },
  { re: /\bsuggest(s|ed|ing)? (\w+ )?to [a-z]+/gi, message: 'Suggest + -ing, ou suggest that + sujet + verbe (jamais « suggest to »).', level: 'erreur' },
  { re: /\ballow(s|ed|ing)? to\b/gi, message: 'Allow + quelqu\'un + to (allows us to…), ou « makes it possible to ».', level: 'erreur' },
  { re: /\bwant(s|ed)? that\b/gi, message: 'Want + quelqu\'un + to (I want you to…).', level: 'erreur' },
  { re: /\b(before|after|without|by|instead of) to [a-z]+/gi, message: 'Préposition + verbe en -ing (before going, by using).', level: 'erreur' },
  { re: /\b(made|make|makes|let|lets) (me|him|her|us|them|you) to [a-z]+/gi, message: 'Make / let + quelqu\'un + verbe SANS « to ».', level: 'erreur' },
  { re: /\bconsider(s|ed|ing)? to\b/gi, message: 'Consider + -ing.', level: 'erreur' },
  { re: /\benjoy(s|ed)? to\b/gi, message: 'Enjoy + -ing.', level: 'erreur' },
  { re: /\blook(ing)? forward to [a-z]+(?<!ing)\b/gi, message: 'Look forward to + -ing (to est une préposition).', level: 'à vérifier' },
  { re: /\bif\b[^,.!?]*\bwill\b/gi, message: 'Pas de « will » après « if » (sauf politesse) : If it rains, we will…', level: 'à vérifier' },
  { re: /\b(when|as soon as|once|until|before) [^,.!?]{0,30}\bwill\b/gi, message: 'Pas de « will » après when / as soon as / once / until : on utilise le présent.', level: 'à vérifier' },
  { re: /\bthe most of\b/gi, message: '« Most of the… » (sans « the » devant most).', level: 'erreur' },
  { re: /\bthere had\b/gi, message: '« Il y avait » = there was / there were.', level: 'erreur' },
  { re: /\bexplain(s|ed)? (me|him|her|us|them)\b/gi, message: 'Explain TO someone (explain to me…).', level: 'erreur' },
  { re: /\bsa(y|id|ys) (me|him|her|us|them)\b/gi, message: 'Say something TO someone, ou tell someone.', level: 'erreur' },
  { re: /\bglobal (result|cost|picture|view|impression|budget)\b/gi, message: 'Global = mondial. Pour « d\'ensemble » : overall.', level: 'erreur' },
  { re: /\bactually\b/gi, message: 'Rappel : actually = « en fait ». Pour « actuellement » : currently.', level: 'info' },
  { re: /\beventually\b/gi, message: 'Rappel : eventually = « finalement ». Pour « éventuellement » : possibly.', level: 'info' },
  { re: /\b(formation|planning|processus)\b/gi, message: 'Faux-ami probable : formation → training/background ; planning → schedule/timeline ; processus → process.', level: 'à vérifier' },
  { re: /\bcontrol(led)? the (samples?|results?|data|documents?)\b/gi, message: '« Contrôler » (vérifier) = check.', level: 'à vérifier' },
  { re: /\bon the long (term|run)\b/gi, message: 'IN the long term / IN the long run.', level: 'erreur' },
  { re: /\bin some extent\b/gi, message: 'TO some extent.', level: 'erreur' },
  { re: /\bin stake\b/gi, message: 'AT stake.', level: 'erreur' },
  { re: /\bthe (\w+ )?people is\b/gi, message: '« People » est pluriel : people are.', level: 'erreur' },
  { re: /\b(he|she|it) (have|do|go|don't|work|want|need|like|make|say)\b/gi, message: '3e personne du singulier : -s (he has, she does, it doesn\'t…).', level: 'à vérifier' },
  { re: /\bdidn'?t (\w+ed|went|came|saw|made|took|gave|had|was|found|began|left|spent)\b/gi, message: 'Après didn\'t : base verbale (didn\'t go, didn\'t manage).', level: 'erreur' },
]

export function lintText(text: string): LintHit[] {
  const hits: LintHit[] = []
  const seen = new Set<string>()
  for (const rule of rules) {
    rule.re.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = rule.re.exec(text)) !== null) {
      const excerpt = m[0].length > 70 ? `${m[0].slice(0, 67)}…` : m[0]
      const key = `${rule.message}|${excerpt.toLowerCase()}`
      if (!seen.has(key)) {
        seen.add(key)
        hits.push({ excerpt, message: rule.message, level: rule.level })
      }
      if (m.index === rule.re.lastIndex) rule.re.lastIndex++
    }
  }
  const order = { erreur: 0, 'à vérifier': 1, info: 2 }
  return hits.sort((a, b) => order[a.level] - order[b.level])
}
