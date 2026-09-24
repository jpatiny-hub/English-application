import { useEffect } from 'react'
import { changelog, CONTENT_VERSION } from '../data/changelog'
import { updateProgress } from '../lib/store'
import { formatDateFr } from '../lib/text'
import { card, Page } from '../components/ui'

export function News() {
  useEffect(() => {
    updateProgress((d) => (d.seenContentVersion >= CONTENT_VERSION ? d : { ...d, seenContentVersion: CONTENT_VERSION }))
  }, [])

  return (
    <Page title="✨ Nouveautés" subtitle="L'appli s'enrichit au fil de tes cours. Ta progression est liée à chaque contenu et n'est jamais effacée par une mise à jour.">
      <div className="space-y-3">
        {[...changelog].reverse().map((c) => (
          <div key={c.version} className={card}>
            <p className="text-xs text-gray-400">Version {c.version} · {formatDateFr(c.date)}</p>
            <p className="mt-1 font-semibold">{c.title}</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
              {c.changes.map((x) => <li key={x}>{x}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Page>
  )
}
