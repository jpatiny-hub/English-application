import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { drillExercises, TAG_LABELS } from '../data/content'
import { allVocab } from '../data/vocabulary'
import { exportBackup, importBackup, resetProgress, updateProgress, useProgress, type Settings } from '../lib/store'
import { daysSince, masteredCount, seenCount, streak, totalAnswers, weakTags } from '../lib/progress'
import { canSpeak, speak } from '../lib/speech'
import { formatDateFr, todayKey } from '../lib/text'
import type { Level } from '../types'
import { btnPrimary, btnSecondary, card, LevelBadge, Page, ProgressBar, Section } from '../components/ui'

const LEVELS: Level[] = ['B2', 'B2+', 'C1']

export function Progress() {
  const data = useProgress()
  const fileRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [persisted, setPersisted] = useState<boolean | null>(null)

  useEffect(() => {
    // Certains navigateurs n'exposent pas navigator.storage.persisted : on ne fait rien dans ce cas.
    if (typeof navigator.storage?.persisted === 'function') {
      navigator.storage.persisted().then(setPersisted).catch(() => setPersisted(null))
    }
    if (window.location.hash.includes('sauvegarde')) document.getElementById('sauvegarde')?.scrollIntoView()
  }, [])

  const days = streak(data)
  const answers = totalAnswers(data)
  const weak = weakTags(data).slice(0, 6)
  const strong = weakTags(data).reverse().slice(0, 3).filter((t) => t.rate >= 0.8)

  // Activité des 8 dernières semaines (56 jours)
  const cells = Array.from({ length: 56 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() - (55 - i))
    return data.activity[todayKey(d)] ?? 0
  })

  function setSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
    updateProgress((d) => ({ ...d, settings: { ...d.settings, [key]: value } }))
  }

  function download() {
    const json = exportBackup()
    const blob = new Blob([json], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `english-progress-${todayKey()}.json`
    a.click()
    URL.revokeObjectURL(url)
    setMessage('✓ Fichier de sauvegarde téléchargé.')
  }

  async function onImport(file: File) {
    const text = await file.text()
    if (!window.confirm('Remplacer ta progression actuelle par celle du fichier ?')) return
    const res = importBackup(text)
    setMessage(res.ok ? '✓ Progression restaurée.' : `✗ ${res.error}`)
  }

  function reset() {
    if (!window.confirm('Effacer TOUTE ta progression ? (Pense à faire une sauvegarde avant.)')) return
    if (!window.confirm('Vraiment sûr ? Cette action est irréversible.')) return
    resetProgress()
    setMessage('Progression effacée.')
  }

  const backupAge = daysSince(data.lastBackupAt)

  return (
    <Page title="📈 Ma progression" subtitle={`Depuis le ${formatDateFr(data.createdAt)}`}>
      <div className="grid grid-cols-3 gap-2 text-center">
        <div className={card}><p className="text-2xl font-bold">🔥 {days}</p><p className="text-xs text-gray-500">jours de suite</p></div>
        <div className={card}><p className="text-2xl font-bold">{answers}</p><p className="text-xs text-gray-500">réponses</p></div>
        <div className={card}><p className="text-2xl font-bold">{data.writing.length}</p><p className="text-xs text-gray-500">textes écrits</p></div>
      </div>

      <div className={`${card} mt-3`}>
        <p className="text-xs font-semibold text-gray-500">8 dernières semaines</p>
        <div className="mt-2 grid grid-flow-col grid-rows-7 gap-1">
          {cells.map((c, i) => (
            <div
              key={i}
              title={`${c}`}
              className={`aspect-square rounded-sm ${c === 0 ? 'bg-gray-100 dark:bg-gray-800' : c < 10 ? 'bg-indigo-200 dark:bg-indigo-900' : c < 30 ? 'bg-indigo-400 dark:bg-indigo-700' : 'bg-indigo-600 dark:bg-indigo-500'}`}
            />
          ))}
        </div>
      </div>

      <Section title="Vers le C1 : acquis par niveau">
        <div className={`${card} space-y-3`}>
          {LEVELS.map((lvl) => {
            const exIds = drillExercises.filter((r) => (r.exercise.level ?? 'B2') === lvl).map((r) => r.exercise.id)
            const vIds = allVocab.filter((v) => v.level === lvl).map((v) => v.id)
            const ids = [...exIds, ...vIds]
            const m = masteredCount(data, ids)
            return (
              <div key={lvl}>
                <div className="flex items-center justify-between text-sm">
                  <LevelBadge level={lvl} />
                  <span className="text-xs text-gray-500">{m} acquis · {seenCount(data, ids)} vus / {ids.length}</span>
                </div>
                <div className="mt-1"><ProgressBar value={m} max={ids.length} tone="green" /></div>
              </div>
            )
          })}
          <p className="text-[11px] text-gray-400">« Acquis » = réussi au moins 3 fois de suite à intervalles croissants.</p>
        </div>
      </Section>

      <Section title="Points à travailler">
        {weak.length === 0 ? (
          <p className="text-sm text-gray-500">Pas encore assez de réponses pour repérer tes points faibles.</p>
        ) : (
          weak.map((t) => (
            <Link key={t.tag} to={`/entrainement?tag=${t.tag}`} className={`${card} block p-3`}>
              <div className="flex justify-between text-sm">
                <span>{TAG_LABELS[t.tag] ?? t.tag}</span>
                <span className={`font-semibold ${t.rate >= 0.8 ? 'text-green-600' : t.rate >= 0.6 ? 'text-amber-600' : 'text-red-600'}`}>{Math.round(t.rate * 100)} %</span>
              </div>
              <div className="mt-1"><ProgressBar value={Math.round(t.rate * 100)} max={100} /></div>
            </Link>
          ))
        )}
        {strong.length > 0 && <p className="text-xs text-gray-500">💪 Points forts : {strong.map((t) => TAG_LABELS[t.tag] ?? t.tag).join(', ')}</p>}
      </Section>

      <Section title="Réglages">
        <div className={`${card} space-y-4`}>
          <div>
            <p className="text-sm font-semibold">Accent de la voix</p>
            <div className="mt-1 flex gap-2">
              {(['en-GB', 'en-US'] as const).map((a) => (
                <button key={a} onClick={() => setSetting('accent', a)} className={`flex-1 rounded-xl py-2 text-sm font-semibold ${data.settings.accent === a ? 'bg-indigo-600 text-white' : 'bg-gray-100 dark:bg-gray-800'}`}>
                  {a === 'en-GB' ? '🇬🇧 Britannique' : '🇺🇸 Américain'}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Vitesse de lecture : {data.settings.rate.toFixed(2)}</p>
            <input type="range" min={0.6} max={1.2} step={0.05} value={data.settings.rate} onChange={(e) => setSetting('rate', Number(e.target.value))} className="w-full accent-indigo-600" />
            {canSpeak() && <button onClick={() => speak('This is how I sound. Have you ever been to London?')} className="text-xs text-indigo-600">🔊 Tester</button>}
          </div>
          <div>
            <p className="text-sm font-semibold">Nouveaux mots par session : {data.settings.newCardsPerSession}</p>
            <input type="range" min={5} max={30} step={5} value={data.settings.newCardsPerSession} onChange={(e) => setSetting('newCardsPerSession', Number(e.target.value))} className="w-full accent-indigo-600" />
          </div>
        </div>
      </Section>

      <div id="sauvegarde" />
      <Section title="💾 Sauvegarde (sur ton appareil uniquement)">
        <div className={`${card} space-y-3`}>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Ta progression est stockée uniquement dans ce navigateur, sur ce téléphone. Les mises à jour de l'appli ne l'effacent pas.
            Par sécurité (changement de téléphone, nettoyage du navigateur), télécharge de temps en temps un fichier de sauvegarde.
          </p>
          <p className="text-xs text-gray-500">
            Dernière sauvegarde : {data.lastBackupAt ? `${formatDateFr(data.lastBackupAt)} (il y a ${backupAge} j)` : 'jamais'}
            {persisted !== null && <> · Stockage protégé : {persisted ? 'oui ✓' : 'non (le navigateur pourrait l\'effacer en cas de manque de place)'}</>}
          </p>
          <button onClick={download} className={btnPrimary}>Télécharger une sauvegarde</button>
          <button onClick={() => fileRef.current?.click()} className={btnSecondary}>Restaurer depuis un fichier</button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              const f = e.target.files?.[0]
              if (f) onImport(f)
              e.target.value = ''
            }}
          />
          {message && <p className="text-sm font-medium">{message}</p>}
          <button onClick={reset} className="w-full text-xs text-red-600 underline">Effacer toute ma progression</button>
        </div>
      </Section>

      <Link to="/nouveautes" className="mt-6 block text-center text-sm text-indigo-600 dark:text-indigo-400">✨ Historique des mises à jour</Link>
    </Page>
  )
}
