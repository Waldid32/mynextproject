import Navbar from "../components/Navbar"


export const metadata = {
  title: 'My app',
  description: 'My App con Next JS',
  creator: 'Waldid Barrios'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
