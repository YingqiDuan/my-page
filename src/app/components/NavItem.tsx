// src/app/components/NavItem.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  href: string
  label: string
}

const NavItem: React.FC<NavItemProps> = ({ href, label }) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`hover:underline transition duration-200 ${
        isActive ? 'underline font-semibold' : ''
      }`}
    >
      {label}
    </Link>
  )
}

export default NavItem
