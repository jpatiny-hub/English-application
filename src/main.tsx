import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { requestPersistentStorage } from './lib/store'
import { installDomGuards, logError } from './lib/diagnostics'
import { ErrorBoundary } from './components/ErrorBoundary'

installDomGuards()
requestPersistentStorage()

window.addEventListener('error', (e) => logError(e.message || 'Erreur inconnue'))
window.addEventListener('unhandledrejection', (e) => logError(`Promesse rejetée : ${String(e.reason)}`))

createRoot(document.getElementById('root')!, {
  onUncaughtError: (error) => logError(error instanceof Error ? error.message : String(error)),
  onCaughtError: (error) => logError(error instanceof Error ? error.message : String(error)),
}).render(
  <StrictMode>
    <ErrorBoundary resetKey="app">
      <HashRouter>
        <App />
      </HashRouter>
    </ErrorBoundary>
  </StrictMode>,
)
