import './globals.css'
import Navbar from '../components/Navbar'
import { Poppins } from 'next/font/google';
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins', 
});

export const metadata = {
  title: 'Intranet Corporativa',
  description: 'Portal interno da empresa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" data-theme="black">
      <head />
      <body className={`${poppins.variable} antialiased`}>
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
