import Navbar from "../components/Navbar"


export const metadata = {
  title: 'My app - Waldid Barrois',
  description: 'Waldid Barrios',
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
