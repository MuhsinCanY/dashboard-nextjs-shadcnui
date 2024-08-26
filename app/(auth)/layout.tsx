import { ThemeToggle } from '@/components/ThemeToggle'

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex items-center justify-center h-[100vh] relative">
      <div className="absolute bottom-5 right-5">
        <ThemeToggle />
      </div>
      {children}
    </div>
  )
}
