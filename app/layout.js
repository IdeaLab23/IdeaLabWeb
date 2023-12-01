import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AICTE IDEALab',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       {/* <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta> */}
      {/* <meta name='viewport' content='width=device-width' /> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
