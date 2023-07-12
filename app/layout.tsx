import { Lato } from 'next/font/google'

import './globals.css'

export const metadata = {
  title: 'Lukasz Komar',
  description: 'App for emersoft recruitment showcase',
}

const lato = Lato({
  weight: ['300', '700'],
  style: 'normal',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${lato.className} h-full w-full bg-white text-black dark:bg-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  )
}
