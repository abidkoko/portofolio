import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
})

export const metadata: Metadata = {
  title: 'Muhamad Abid Maulana | Electronics Engineer Portfolio',
  description: 'Electronics Engineer specializing in Embedded Systems, IoT Development, and Frontend Technologies. Explore my projects, skills, and achievements.',
  keywords: ['Electronics Engineer', 'Embedded Systems', 'IoT Developer', 'Arduino', 'ESP32', 'PCB Design', 'Frontend Developer'],
  authors: [{ name: 'Muhamad Abid Maulana' }],
  openGraph: {
    title: 'Muhamad Abid Maulana | Electronics Engineer Portfolio',
    description: 'Electronics Engineer specializing in Embedded Systems, IoT Development, and Frontend Technologies.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#050816]">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#050816] text-white overflow-x-hidden`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
