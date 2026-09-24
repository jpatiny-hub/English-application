import { useSearchParams } from 'react-router-dom'
import { writingTasks } from '../data/writing'
import { modules } from '../data/modules'
import { useProgress } from '../lib/store'
import { formatDateFr } from '../lib/text'
import { card, LevelBadge, ListLink, Page, Pill, Section } from '../components/ui'

const typeLabels: Record<string, string> = {
  email: 'E-mail',
  report: 'Rapport',
  essay: 'Essai',
  story: 'Récit',
  procedure: 'Procédure',
  proposal: 'Proposition',
  review: 'Critique',
}

export function Writing() {
  const [params] = useSearchParams()
  const moduleId = params.get('module')
  const data = useProgress()
  const mod = modules.find((m) => m.id === moduleId)
  const tasks = moduleId ? writingTasks.filter((t) => t.module === moduleId) : writingTasks
  const q = moduleId ? `?module=${moduleId}` : ''

  const groups = [
    ...modules.map((m) => ({ title: `${m.icon} ${m.title}`, items: tasks.filter((t) => t.module === m.id) })),
    { title: '⏳ Spécial temps', items: tasks.filter((t) => !t.module) },
  ].filter((g) => g.items.length > 0)

  return (
    <Page
      title="🖋️ Atelier d'écriture"
      subtitle="Rédige, vérifie les expressions et la longueur, relis-toi avec la checklist, puis compare avec un modèle. Tes textes sont gardés sur le téléphone."
      back={mod ? { to: `/cours/module/${mod.id}`, label: mod.title } : { to: '/pratique', label: 'Pratique' }}
    >
      {groups.map((g) => (
        <Section key={g.title} title={g.title}>
          {g.items.map((t) => {
            const count = data.writing.filter((w) => w.taskId === t.id).length
            return (
              <ListLink
                key={t.id}
                to={`/pratique/ecrit/${t.id}${q}`}
                title={t.title}
                subtitle={<span className="flex flex-wrap items-center gap-1.5"><LevelBadge level={t.level} /> <Pill>{typeLabels[t.type]}</Pill> {t.minWords}–{t.maxWords} mots {count > 0 && <Pill tone="green">✓ {count}</Pill>}</span>}
              />
            )
          })}
        </Section>
      ))}

      {!moduleId && data.writing.length > 0 && (
        <Section title="Mes textes">
          {[...data.writing].reverse().slice(0, 20).map((w) => {
            const task = writingTasks.find((t) => t.id === w.taskId)
            return (
              <details key={w.id} className={card}>
                <summary className="cursor-pointer">
                  <p className="font-semibold">{task?.title ?? w.taskId}</p>
                  <p className="text-xs text-gray-500">{formatDateFr(w.date)} · {w.words} mots · {w.phrasesUsed}/{w.phrasesTotal} expressions</p>
                </summary>
                <p className="mt-3 whitespace-pre-wrap text-sm">{w.text}</p>
              </details>
            )
          })}
        </Section>
      )}
    </Page>
  )
}
