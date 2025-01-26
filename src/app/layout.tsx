// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Layout from './components/Layout'
import Providers from './components/Providers' 

export const metadata: Metadata = {
  title: 'Saturn',
  description: '',
  openGraph: {
    title: 'Saturn',
    description: '',
    url: '',
    siteName: 'Saturn',
    images: [
      {
        url: '',
        width: 800,
        height: 600,
      },
    ],
    locale: 'zh_CN',
    type: 'website',
  },
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
