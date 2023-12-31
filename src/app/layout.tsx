import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavigationBar } from './components/navigation/navigation-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Queuetie',
  description: 'Queuetie by Cash n Don',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
          <NavigationBar />
          {children}
        </body>
    </html>
  )
}
