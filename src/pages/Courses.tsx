import { modules } from '../data/modules'
import { sessions } from '../data/sessions/index'
import { useProgress } from '../lib/store'
import { seenCount } from '../lib/progress'
import { formatDateFr } from '../lib/text'
import { ListLink, Page, ProgressBar, Section } from '../components/ui'
import { MODULE_STEPS } from './ModuleDetail'

export function Courses() {
  const data = useProgress()
  const sorted = [...sessions].reverse()

  return (
    <Page title="Mes cours" subtitle="Tout ce qui a été vu en séance, transformé en exercices.">
      <Section title={`Les ${modules.length} modules`}>
        {modules.map((m) => {
          const done = MODULE_STEPS.filter((s) => data.steps[`${m.id}:${s.step}`]).length
          return (
            <ListLink
              key={m.id}
              to={`/cours/module/${m.id}`}
              icon={m.icon}
              title={m.title}
              subtitle={
                <>
                  <span>{m.titleFr} · {sessions.filter((s) => s.module === m.id).length} séances</span>
                  <span className="mt-1.5 block"><ProgressBar value={done} max={MODULE_STEPS.length} /></span>
                </>
              }
            />
          )
        })}
      </Section>

      <Section title="Séances (de la plus récente)">
        {sorted.map((s) => {
          const mod = modules.find((m) => m.id === s.module)
          const ids = s.corrections.map((c) => c.id)
          const practiced = seenCount(data, ids)
          return (
            <ListLink
              key={s.id}
              to={`/cours/seance/${s.id}`}
              icon={mod?.icon}
              title={formatDateFr(s.date)}
              subtitle={`${s.title} · ${s.vocabulary.length} mots · ${s.corrections.length} corrections${practiced > 0 ? ` (${practiced} travaillées)` : ''}`}
            />
          )
        })}
      </Section>
    </Page>
  )
}
