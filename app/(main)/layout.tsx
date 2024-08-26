import { Navbar } from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex">
        <div className="hidden md:block ">
          <Sidebar />
        </div>
        <div className="md:max-w-[1200px] w-full p-5 mx-auto">{children}</div>
      </div>
    </>
  )
}
