import './globals.css'

export const metadata = {
  title: 'Lukasz Komar',
  description: 'App for emersoft recruitment showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
