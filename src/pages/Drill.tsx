import { useMemo } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { drillExercises, TAG_LABELS, TENSE_TAGS } from '../data/content'
import { getProgress } from '../lib/store'
import { pickExercises } from '../lib/select'
import { ExerciseRunner } from '../components/ExerciseRunner'

// Entraînement ciblé : /entrainement?tag=present-perfect  ou  ?tags=tenses  (&n=15)
export function Drill() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const tag = params.get('tag')
  const tags = params.get('tags')
  const n = Number(params.get('n') ?? 15)

  const { items, title } = useMemo(() => {
    const wanted = tags === 'tenses' ? TENSE_TAGS.filter((t) => t !== 'irregular') : tag ? [tag] : []
    const pool = drillExercises
      .map((r) => r.exercise)
      .filter((ex) => ex.kind !== 'card' && ex.tags?.some((t) => wanted.includes(t)))
    return {
      items: pickExercises(pool, getProgress(), n),
      title: tags === 'tenses' ? 'Défi des temps' : TAG_LABELS[tag ?? ''] ?? 'Entraînement',
    }
    // Sélection figée à l'ouverture de la page.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag, tags, n])

  return <ExerciseRunner key={`${tag}-${tags}`} items={items} title={title} onExit={() => navigate(-1)} />
}
