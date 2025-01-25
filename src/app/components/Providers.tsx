// src/app/components/Providers.tsx
'use client'

import { ThemeProvider } from 'next-themes'

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  )
}

export default Providers
