import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Accueil', icon: '🏠', end: true },
  { to: '/cours', label: 'Cours', icon: '🎓' },
  { to: '/temps', label: 'Temps', icon: '⏳' },
  { to: '/vocabulaire', label: 'Vocab', icon: '🗂️' },
  { to: '/pratique', label: 'Pratique', icon: '✍️' },
  { to: '/revision', label: 'Révision', icon: '🔁' },
]

// Barre opaque, sans flou ni animation de transformation (cf. CLAUDE.md, robustesse d'affichage).
export function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-md px-3 pb-2">
        <ul className="grid grid-cols-6 rounded-3xl bg-white px-1 py-1.5 shadow-[0_8px_30px_-6px_rgba(30,27,75,0.25)] ring-1 ring-gray-900/5 dark:bg-gray-900 dark:ring-white/10">
          {items.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex flex-col items-center gap-0.5 rounded-2xl py-1.5 text-[10.5px] font-bold transition-colors ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200'
                      : 'text-gray-500 dark:text-gray-400'
                  }`
                }
              >
                <span className="text-lg leading-none">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
