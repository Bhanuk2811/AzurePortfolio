"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: "About", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Photos", path: "/photos" },
  ]

  return (
    <header className="w-full py-6 relative z-20">
      <div className="container flex items-center justify-end">
        <Link href="/" className="font-bold text-2xl absolute top-6.5 left-10">
          Bhanu Kaushal
        </Link>

        <nav className="flex items-center gap-9">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.path ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
}

