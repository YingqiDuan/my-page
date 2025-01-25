// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Layout from './components/Layout'
import Providers from './components/Providers' // 引入 Providers 组件

export const metadata: Metadata = {
  title: '我的个人网站',
  description: '展示个人简历、学业背景和项目经验',
  openGraph: {
    title: '我的个人网站',
    description: '展示个人简历、学业背景和项目经验',
    url: 'https://yourdomain.com',
    siteName: '我的个人网站',
    images: [
      {
        url: 'https://yourdomain.com/images/og-image.png',
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
