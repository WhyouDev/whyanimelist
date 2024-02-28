import Navbar from '@/components/Navbar'
import './globals.css'
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: false
})

export const metadata = {
  title: 'WhyAnimeList',
  description: 'Website Anime Indonesia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className} bg-color-dark`} suppressHydrationWarning={true}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
