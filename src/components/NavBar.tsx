import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Accueil', icon: '🏠', end: true },
  { to: '/cours', label: 'Cours', icon: '🎓' },
  { to: '/temps', label: 'Temps', icon: '⏳' },
  { to: '/vocabulaire', label: 'Vocab', icon: '🗂️' },
  { to: '/pratique', label: 'Pratique', icon: '✍️' },
  { to: '/revision', label: 'Révision', icon: '🔁' },
]

export function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-gray-200 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <ul className="mx-auto grid max-w-md grid-cols-6">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-2 text-[11px] font-medium transition-colors ${
                  isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-500 dark:text-gray-400'
                }`
              }
            >
              <span className="text-lg leading-none">{item.icon}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
