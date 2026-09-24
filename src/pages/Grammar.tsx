import { grammarGroups, grammarLessons } from '../data/grammar'
import { useProgress } from '../lib/store'
import { masteredCount } from '../lib/progress'
import { LevelBadge, ListLink, Page, ProgressBar, Section } from '../components/ui'

export function Grammar() {
  const data = useProgress()
  return (
    <Page title="Grammaire" subtitle="Des fiches courtes, des exemples tirés de tes cours et des exercices corrigés.">
      {grammarGroups.map((g) => (
        <Section key={g.id} title={`${g.icon} ${g.title}`}>
          {grammarLessons
            .filter((l) => l.group === g.id)
            .map((l) => {
              const ids = l.exercises.map((e) => e.id)
              const m = masteredCount(data, ids)
              return (
                <ListLink
                  key={l.id}
                  to={`/grammaire/${l.id}`}
                  title={l.title}
                  subtitle={
                    <>
                      <span className="line-clamp-2">{l.summary}</span>
                      <span className="mt-1.5 block"><ProgressBar value={m} max={ids.length} tone="green" /></span>
                    </>
                  }
                  right={<LevelBadge level={l.level} />}
                />
              )
            })}
        </Section>
      ))}
    </Page>
  )
}
