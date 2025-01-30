// src/app/components/Header.tsx
'use client'

import NavItem from './NavItem'
import DarkModeToggle from './DarkModeToggle'

const Header: React.FC = () => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Projects' },
    { href: '/education', label: 'Education' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Saturn</h1>
        <div className="space-x-4 flex items-center">
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} />
          ))}
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header
