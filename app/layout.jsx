import Navbar from "@/components/Navbar"
import "./globals.css"

import { Roboto_Mono } from 'next/font/google'

export const metadata = {
  title: 'My app',
  description: 'My App con Next JS',
  creator: 'Waldid Barrios'
}


const roboto = Roboto_Mono({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
