import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Courses } from './pages/Courses'
import { ModuleDetail } from './pages/ModuleDetail'
import { SessionDetail } from './pages/SessionDetail'
import { TenseLab } from './pages/TenseLab'
import { IrregularVerbs } from './pages/IrregularVerbs'
import { Grammar } from './pages/Grammar'
import { GrammarLessonPage } from './pages/GrammarLesson'
import { Vocabulary } from './pages/Vocabulary'
import { VocabDeckPage } from './pages/VocabDeck'
import { Practice } from './pages/Practice'
import { Corrections } from './pages/Corrections'
import { Reformulation } from './pages/Reformulation'
import { Writing } from './pages/Writing'
import { WritingStudio } from './pages/WritingStudio'
import { Speaking } from './pages/Speaking'
import { Listening } from './pages/Listening'
import { DialoguePage } from './pages/DialoguePage'
import { Reading } from './pages/Reading'
import { ReadingTextPage } from './pages/ReadingText'
import { Revision } from './pages/Revision'
import { Progress } from './pages/Progress'
import { News } from './pages/News'
import { Drill } from './pages/Drill'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function App() {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-[#f7f7fb] text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <ScrollToTop />
      <main className="flex-1 pb-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cours" element={<Courses />} />
          <Route path="/cours/module/:moduleId" element={<ModuleDetail />} />
          <Route path="/cours/seance/:sessionId" element={<SessionDetail />} />
          <Route path="/temps" element={<TenseLab />} />
          <Route path="/temps/verbes" element={<IrregularVerbs />} />
          <Route path="/grammaire" element={<Grammar />} />
          <Route path="/grammaire/:lessonId" element={<GrammarLessonPage />} />
          <Route path="/vocabulaire" element={<Vocabulary />} />
          <Route path="/vocabulaire/:deckId" element={<VocabDeckPage />} />
          <Route path="/pratique" element={<Practice />} />
          <Route path="/pratique/corrections" element={<Corrections />} />
          <Route path="/pratique/reformulation" element={<Reformulation />} />
          <Route path="/pratique/ecrit" element={<Writing />} />
          <Route path="/pratique/ecrit/:taskId" element={<WritingStudio />} />
          <Route path="/pratique/oral" element={<Speaking />} />
          <Route path="/pratique/ecoute" element={<Listening />} />
          <Route path="/pratique/ecoute/:dialogueId" element={<DialoguePage />} />
          <Route path="/pratique/lecture" element={<Reading />} />
          <Route path="/pratique/lecture/:textId" element={<ReadingTextPage />} />
          <Route path="/revision" element={<Revision />} />
          <Route path="/progres" element={<Progress />} />
          <Route path="/nouveautes" element={<News />} />
          <Route path="/entrainement" element={<Drill />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <NavBar />
    </div>
  )
}

export default App
