import { Inter } from '@next/font/google'

import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'

import './globals.css'

const inter = Inter({
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <Nav />
        <main className="py-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
