import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import type { Level } from '../types'
import { canSpeak, speak } from '../lib/speech'

export const card =
  'rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900'
export const cardLink = `${card} block active:scale-[0.98] transition-transform`
export const btnPrimary =
  'w-full rounded-2xl bg-indigo-600 py-3 font-semibold text-white shadow-sm disabled:opacity-40 active:scale-[0.99] transition-transform'
export const btnSecondary =
  'w-full rounded-2xl bg-gray-200 py-3 font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-200 disabled:opacity-40'
export const input =
  'w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base disabled:opacity-80 dark:border-gray-700 dark:bg-gray-800'

export function Page({ title, subtitle, back, children }: { title: string; subtitle?: ReactNode; back?: { to: string; label: string }; children: ReactNode }) {
  return (
    <div className="px-4 pt-6">
      {back && (
        <Link to={back.to} className="text-sm text-indigo-600 dark:text-indigo-400">
          ← {back.label}
        </Link>
      )}
      <h1 className={`${back ? 'mt-2' : ''} text-xl font-bold`}>{title}</h1>
      {subtitle && <div className="mt-1 text-sm text-gray-500 dark:text-gray-400">{subtitle}</div>}
      <div className="mt-4">{children}</div>
    </div>
  )
}

export function Section({ title, children, right }: { title: string; children: ReactNode; right?: ReactNode }) {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">{title}</h2>
        {right}
      </div>
      <div className="mt-2 space-y-2">{children}</div>
    </section>
  )
}

const levelColors: Record<Level, string> = {
  B2: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  'B2+': 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  C1: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
}

export function LevelBadge({ level }: { level: Level }) {
  return <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${levelColors[level]}`}>{level}</span>
}

export function Pill({ children, tone = 'gray' }: { children: ReactNode; tone?: 'gray' | 'indigo' | 'green' | 'red' | 'amber' }) {
  const tones = {
    gray: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
    indigo: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
    green: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
    red: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    amber: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  }
  return <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${tones[tone]}`}>{children}</span>
}

export function ProgressBar({ value, max, tone = 'indigo' }: { value: number; max: number; tone?: 'indigo' | 'green' }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
      <div className={`h-full ${tone === 'green' ? 'bg-green-500' : 'bg-indigo-600'}`} style={{ width: `${pct}%` }} />
    </div>
  )
}

export function SpeakButton({ text, label, small }: { text: string; label?: string; small?: boolean }) {
  if (!canSpeak()) return null
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        speak(text)
      }}
      aria-label="Écouter"
      className={`shrink-0 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300 ${
        small ? 'px-2 py-1 text-sm' : 'px-3 py-1.5 text-sm'
      }`}
    >
      🔊{label ? ` ${label}` : ''}
    </button>
  )
}

export function ListLink({ to, icon, title, subtitle, right }: { to: string; icon?: string; title: ReactNode; subtitle?: ReactNode; right?: ReactNode }) {
  return (
    <Link to={to} className={`${cardLink} flex items-center gap-3`}>
      {icon && <span className="text-2xl">{icon}</span>}
      <div className="min-w-0 flex-1">
        <div className="font-semibold">{title}</div>
        {subtitle && <div className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">{subtitle}</div>}
      </div>
      {right ?? <span className="text-indigo-600 dark:text-indigo-400">→</span>}
    </Link>
  )
}

/** Met en gras le texte entre **astérisques**. */
export function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((p, i) => (i % 2 === 1 ? <strong key={i}>{p}</strong> : <span key={i}>{p}</span>))}
    </>
  )
}
