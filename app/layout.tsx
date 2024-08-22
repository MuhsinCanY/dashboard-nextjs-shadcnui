import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dashboard with Next.js and Shadcn/ui',
  description: 'Admin dashboard',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className="flex">
          <div className="hidden md:block h-[100vh] bg-slate-500">
            <Sidebar />
          </div>
          <div className="md:max-w-[1200px] w-full p-5">{children}</div>
        </div>
      </body>
    </html>
  )
}
