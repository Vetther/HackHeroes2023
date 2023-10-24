"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Breadcrumbs from "./breadcrumbs"
import { NavbarIcons } from "./icons/navbar"

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)
  const items = usePathname()
    .split("/")
    .filter(item => item)
    .map(item => ({ label: item, href: item }))

  return (
    <nav className="inline-flex justify-between items-center w-full px-8 pt-5">
      <div className="inline-flex flex-col grow shrink basis-0">
        <Breadcrumbs
          items={[{ label: "Mistrzostwa Mechaników", href: "/" }, ...items]}
        />
        <span className="text-gray-700 capitalize text-xl font-semibold leading-7">
          {items.at(-1)?.label}
        </span>
      </div>
      <button
        className="inline-flex gap-2.5 h-10"
        onClick={() => setOpen(prevOpen => !prevOpen)}
      >
        <NavbarIcons.profile className="h-10 w-10 bg-zinc-400 rounded-full p-1.5" />
        <div className="grow shrink flex items-center gap-3 text-sm">
          <span className="text-gray-700 grow shrink basis-0">User</span>
          {isOpen ? <NavbarIcons.caretUp /> : <NavbarIcons.caretDown />}
        </div>
      </button>
    </nav>
  )
}
