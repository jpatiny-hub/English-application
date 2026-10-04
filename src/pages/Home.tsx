import { Link } from 'react-router-dom'
import { useProgress } from '../lib/store'
import { daysSince, streak, totalAnswers, weakTags } from '../lib/progress'
import { isDue } from '../lib/srs'
import { CONTENT_VERSION } from '../data/changelog'
import { discoveryDecks } from '../data/vocabulary'
import { TAG_LABELS, getExercise } from '../data/content'
import { sessions } from '../data/sessions/index'
import { card, cardLink, SpeakButton } from '../components/ui'
import { formatDateFr } from '../lib/text'
import { grammarLessons } from '../data/grammar'

const sections = [
  { to: '/cours', label: 'Mes cours', icon: '🎓', desc: 'Séances et modules' },
  { to: '/temps', label: 'Labo des temps', icon: '⏳', desc: 'Past simple, present perfect…' },
  { to: '/grammaire', label: 'Grammaire', icon: '📖', desc: `${grammarLessons.length} fiches + exercices` },
  { to: '/vocabulaire', label: 'Vocabulaire', icon: '🗂️', desc: 'Cours + découverte' },
  { to: '/pratique/ecrit', label: 'Atelier d\'écriture', icon: '🖋️', desc: 'Rédiger, se relire' },
  { to: '/pratique', label: 'Pratique', icon: '🎧', desc: 'Oral, écoute, lecture' },
]

// Une expression différente chaque jour, tirée des idiomes et collocations.
function expressionOfTheDay() {
  const pool = discoveryDecks.filter((d) => d.id === 'idioms' || d.id === 'collocations').flatMap((d) => d.items)
  const day = Math.floor(Date.now() / 86_400_000)
  return pool[day % pool.length]
}

export function Home() {
  const data = useProgress()
  const now = Date.now()
  const due = Object.keys(data.srs).filter((id) => !id.startsWith('lesson:') && isDue(data.srs[id], now) && getExercise(id)).length
  const dueLessons = Object.keys(data.srs).filter((id) => id.startsWith('lesson:') && isDue(data.srs[id], now)).length
  const days = streak(data)
  const answers = totalAnswers(data)
  const weakest = weakTags(data)[0]
  const expr = expressionOfTheDay()
  const lastSession = sessions[sessions.length - 1]
  const backupAge = daysSince(data.lastBackupAt)
  const needsBackup = answers >= 50 && (backupAge === null || backupAge > 30)

  return (
    <div className="px-4 pt-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold">Hello! 👋</h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Du B2 vers le C1, un peu chaque jour.</p>
        </div>
        <Link to="/progres" className="rounded-2xl bg-white px-3 py-2 text-center shadow-sm dark:bg-gray-900">
          <p className="text-lg font-bold leading-none">🔥 {days}</p>
          <p className="text-[10px] text-gray-500">jour{days > 1 ? 's' : ''}</p>
        </Link>
      </div>

      {data.seenContentVersion < CONTENT_VERSION && (
        <Link to="/nouveautes" className="mt-5 flex items-center gap-3 rounded-2xl border border-amber-300 bg-amber-50 p-4 dark:border-amber-700 dark:bg-amber-900/30">
          <span className="text-2xl">✨</span>
          <div className="flex-1">
            <p className="font-semibold">{data.seenContentVersion === 0 ? 'Bienvenue !' : 'Nouveau contenu disponible'}</p>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              {data.seenContentVersion === 0 ? 'Découvre ce que contient l\'appli.' : 'Ta progression est conservée. Voir les nouveautés →'}
            </p>
          </div>
        </Link>
      )}

      {needsBackup && (
        <Link to="/progres#sauvegarde" className="mt-3 flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-3 text-sm dark:border-gray-800 dark:bg-gray-900">
          <span className="text-xl">💾</span>
          <span className="flex-1">
            {backupAge === null ? 'Pense à sauvegarder ta progression dans un fichier.' : `Dernière sauvegarde il y a ${backupAge} jours.`}
          </span>
          <span className="text-indigo-600">→</span>
        </Link>
      )}

      <Link to="/revision" className="mt-5 block rounded-2xl bg-indigo-600 p-4 text-white shadow-sm transition-transform active:scale-[0.98]">
        <p className="text-sm opacity-90">Révision du jour</p>
        {due + dueLessons > 0 ? (
          <p className="text-xl font-bold">
            {due > 0 && `${due} élément${due > 1 ? 's' : ''} à revoir`}
            {due > 0 && dueLessons > 0 && ' · '}
            {dueLessons > 0 && `${dueLessons} leçon${dueLessons > 1 ? 's' : ''}`}
          </p>
        ) : (
          <p className="text-xl font-bold">{answers === 0 ? 'Commence par un cours ou le Labo des temps' : 'Tout est à jour ✓'}</p>
        )}
      </Link>

      {weakest && weakest.rate < 0.75 && (
        <Link to={`/entrainement?tag=${weakest.tag}`} className={`${cardLink} mt-3 flex items-center gap-3`}>
          <span className="text-2xl">🎯</span>
          <div className="flex-1">
            <p className="text-xs text-gray-500 dark:text-gray-400">Ton point faible du moment</p>
            <p className="font-semibold">{TAG_LABELS[weakest.tag] ?? weakest.tag} — {Math.round(weakest.rate * 100)} % de réussite</p>
          </div>
          <span className="text-indigo-600">→</span>
        </Link>
      )}

      <div className={`${card} mt-3`}>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Expression du jour</p>
          <SpeakButton text={expr.example ? `${expr.en}. ${expr.example}` : expr.en} small />
        </div>
        <p className="mt-1 text-lg font-bold">{expr.en}</p>
        <p className="text-sm text-indigo-700 dark:text-indigo-300">{expr.fr}</p>
        {expr.example && <p className="mt-1 text-sm italic text-gray-500 dark:text-gray-400">« {expr.example} »</p>}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3">
        {sections.map((s) => (
          <Link key={s.to} to={s.to} className={cardLink}>
            <span className="text-2xl">{s.icon}</span>
            <p className="mt-2 font-semibold">{s.label}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">{s.desc}</p>
          </Link>
        ))}
      </div>

      {lastSession && (
        <Link to={`/cours/seance/${lastSession.id}`} className={`${cardLink} mt-3 flex items-center gap-3`}>
          <span className="text-2xl">📒</span>
          <div className="flex-1">
            <p className="text-xs text-gray-500 dark:text-gray-400">Dernier cours · {formatDateFr(lastSession.date)}</p>
            <p className="font-semibold">{lastSession.title}</p>
          </div>
          <span className="text-indigo-600">→</span>
        </Link>
      )}

      <Link to="/progres" className="mt-3 block text-center text-sm text-indigo-600 dark:text-indigo-400">
        📈 Ma progression, réglages et sauvegarde
      </Link>
    </div>
  )
}
