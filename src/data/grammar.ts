import type { GrammarGroup, GrammarLesson } from '../types'
import { tenseLessons } from './grammar-tenses.ts'
import { structureLessons } from './grammar-structures.ts'
import { wordLessons } from './grammar-words.ts'
import { styleLessons } from './grammar-style.ts'

export const grammarLessons: GrammarLesson[] = [
  ...tenseLessons,
  ...structureLessons,
  ...wordLessons,
  ...styleLessons,
].sort((a, b) => a.order - b.order)

export const grammarGroups: { id: GrammarGroup; title: string; icon: string; description: string }[] = [
  { id: 'temps', title: 'Les temps', icon: '⏳', description: 'Past simple, present perfect, past perfect, futurs…' },
  { id: 'structures', title: 'Structures', icon: '🧩', description: 'Conditionnels, modaux, passif, gérondif…' },
  { id: 'mots', title: 'Mots piégeux', icon: '🪤', description: 'Indénombrables, prépositions, faux-amis…' },
  { id: 'style', title: 'Style & rédaction', icon: '🖋️', description: 'Connecteurs, registre, mise en relief.' },
]
