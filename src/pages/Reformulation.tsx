import { useState } from 'react'
import { perspectiveExercises, styleExercises, synonymExercises } from '../data/style'
import { getProgress, useProgress } from '../lib/store'
import { masteredCount } from '../lib/progress'
import { pickExercises } from '../lib/select'
import type { Exercise } from '../types'
import { ExerciseRunner } from '../components/ExerciseRunner'
import { btnPrimary, btnSecondary, card, ListLink, Page, ProgressBar, Section } from '../components/ui'

function SeriesCard({ title, description, items, onRun, size }: { title: string; description: string; items: Exercise[]; onRun: (items: Exercise[]) => void; size: number }) {
  const data = useProgress()
  const ids = items.map((e) => e.id)
  const mastered = masteredCount(data, ids)
  return (
    <div className={card}>
      <div className="flex justify-between text-sm">
        <span className="font-semibold">{title}</span>
        <span className="text-xs text-gray-500">{mastered}/{ids.length} acquis</span>
      </div>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{description}</p>
      <div className="mt-2"><ProgressBar value={mastered} max={ids.length} tone="green" /></div>
      <button onClick={() => onRun(pickExercises(items, getProgress(), size))} className={`${btnSecondary} mt-3`}>S'entraîner ({Math.min(size, ids.length)})</button>
    </div>
  )
}

export function Reformulation() {
  const data = useProgress()
  const [run, setRun] = useState<Exercise[] | null>(null)

  if (run) return <ExerciseRunner items={run} title="Reformulation" onExit={() => setRun(null)} />

  const ids = styleExercises.map((e) => e.id)
  const mcq = styleExercises.filter((e) => e.kind === 'mcq')
  const rewrite = styleExercises.filter((e) => e.kind !== 'mcq')

  return (
    <Page
      title="✨ Trouver la bonne formulation"
      subtitle="Passer d'un anglais correct à un anglais naturel et précis : éviter le mot à mot, choisir le bon registre, remplacer « very » et « a lot »."
      back={{ to: '/pratique', label: 'Pratique' }}
    >
      <div className={card}>
        <div className="flex justify-between text-sm">
          <span className="font-semibold">{styleExercises.length} exercices</span>
          <span className="text-xs text-gray-500">{masteredCount(data, ids)} acquis</span>
        </div>
        <div className="mt-2"><ProgressBar value={masteredCount(data, ids)} max={ids.length} tone="green" /></div>
        <button onClick={() => setRun(pickExercises(styleExercises, getProgress(), 12))} className={`${btnPrimary} mt-3`}>Session de 12</button>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <button onClick={() => setRun(pickExercises(mcq, getProgress(), 12))} className={btnSecondary}>Le plus naturel</button>
          <button onClick={() => setRun(pickExercises(rewrite, getProgress(), 10))} className={btnSecondary}>Réécritures</button>
        </div>
        <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
          Pour les réécritures, plusieurs réponses sont acceptées. Si ta formulation est correcte mais différente, valide-la toi-même.
        </p>
      </div>

      <Section title="Séries ciblées">
        <SeriesCard
          title="🔄 Changer de perspective"
          description="Dire exactement la même chose avec un autre point de vue : sujet inversé, adjectif contraire, lend / borrow, actif / passif, too / enough… La consigne impose le début de la phrase."
          items={perspectiveExercises}
          onRun={setRun}
          size={10}
        />
        <SeriesCard
          title="🔁 Synonymes"
          description="Reconnaître le sens des mots de tes cours et remplacer les mots passe-partout (big, get, help, fix, important…) par des termes plus précis."
          items={synonymExercises}
          onRun={setRun}
          size={12}
        />
      </Section>

      <Section title="Pour aller plus loin">
        <ListLink to="/grammaire/g-register" icon="🎩" title="Registre : du familier au professionnel" />
        <ListLink to="/grammaire/g-linking" icon="🔗" title="Connecteurs logiques" />
        <ListLink to="/grammaire/g-inversion" icon="🚀" title="Mise en relief (C1)" />
        <ListLink to="/vocabulaire/collocations" icon="🧲" title="Collocations" />
      </Section>
    </Page>
  )
}
