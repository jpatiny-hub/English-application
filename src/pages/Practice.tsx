import { allCorrections } from '../data/content'
import { perspectiveExercises, styleExercises, synonymExercises } from '../data/style'
import { writingTasks } from '../data/writing'
import { readingTexts } from '../data/reading'
import { dialogues } from '../data/dialogues'
import { useProgress } from '../lib/store'
import { ListLink, Page, Section } from '../components/ui'

export function Practice() {
  const data = useProgress()
  return (
    <Page title="Pratique" subtitle="Choisis une compétence à travailler.">
      <Section title="Écrire juste">
        <ListLink to="/pratique/corrections" icon="🩹" title="Mes erreurs de cours" subtitle={`${allCorrections.length} phrases corrigées en séance, à réécrire sans faute`} />
        <ListLink to="/pratique/reformulation" icon="✨" title="Trouver la bonne formulation" subtitle={`${styleExercises.length + perspectiveExercises.length + synonymExercises.length} exercices : formulations naturelles, synonymes, changer de perspective`} />
        <ListLink to="/pratique/ecrit" icon="🖋️" title="Atelier d'écriture" subtitle={`${writingTasks.length} sujets avec modèles · ${data.writing.length} texte(s) écrit(s)`} />
      </Section>
      <Section title="Parler & comprendre">
        <ListLink to="/pratique/oral" icon="🎤" title="Oral" subtitle="Prononciation, répétition, expression libre avec transcription" />
        <ListLink to="/pratique/ecoute" icon="🎧" title="Écoute & dictée" subtitle={`${dialogues.length} dialogues + dictées tirées de tes cours`} />
        <ListLink to="/pratique/lecture" icon="📰" title="Lecture" subtitle={`${readingTexts.length} textes B2 → C1 avec glossaire et questions`} />
      </Section>
    </Page>
  )
}
