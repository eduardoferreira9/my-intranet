import './globals.css'
import Navbar from '../components/Navbar'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata = {
  title: 'Intranet Corporativa',
  description: 'Portal interno da empresa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-theme="black">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          type="module"
          src="https://unpkg.com/cally"
          strategy="beforeInteractive" // Load before page interactive if needed
        />
        <Navbar />
        <main className="bg-base-300">{children}</main>
      </body>
    </html>
  )
}
