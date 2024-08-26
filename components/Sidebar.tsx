import {
  CreditCard,
  Folder,
  LayoutDashboard,
  Newspaper,
  Settings,
  User,
} from 'lucide-react'

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
import Link from 'next/link'

export const Sidebar = () => {
  return (
    <Command className="bg-secondary shadow-md rounded-none md:min-w-[300px] min-h-screen">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link href="/"> Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Newspaper className="mr-2 h-4 w-4" />
            <Link href="/posts"> Posts</Link>
          </CommandItem>
          <CommandItem>
            <Folder className="mr-2 h-4 w-4" />
            <Link href="/"> Categories</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <Link href="/"> Profile</Link>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <Link href="/"> Billing</Link>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <Link href="/"> Settings</Link>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
