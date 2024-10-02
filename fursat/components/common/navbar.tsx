import Logo from "./logo/logo"
import { Button } from "@/components/ui/button"
import { MenuIcon } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="flex justify-between items-center py-4">
      <Logo />
      <Button variant="ghost" size="icon">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Menu</span>
      </Button>
    </header>
  )
}