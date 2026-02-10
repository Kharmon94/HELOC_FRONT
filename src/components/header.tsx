import type { PageId } from '../types'
import { Button } from './ui/button'

interface HeaderProps {
  currentPage: PageId
  onNavigate: (page: PageId) => void
}

const navItems: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'why-helocs', label: 'Why HELOCs' },
  { id: 'calculators', label: 'Calculators' },
  { id: 'partners', label: 'Lending Partners' },
]

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white px-4 py-3">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="text-xl font-semibold text-brand-blue"
        >
          HELOC Guru
        </button>
        <nav className="flex items-center gap-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={currentPage === item.id ? 'primary' : 'outline'}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </Button>
          ))}
          <Button onClick={() => onNavigate('survey')}>Get Started</Button>
        </nav>
      </div>
    </header>
  )
}
