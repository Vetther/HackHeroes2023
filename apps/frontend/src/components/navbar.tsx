"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { useAtom } from "jotai"
import { ChevronDown, Menu, Plus } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Breadcrumbs from "./breadcrumbs"
import { isOpenSidebarAtom } from "./sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Skeleton } from "./ui/skeleton"

export default function Navbar() {
  const [isOpen, setIsOpen] = useAtom(isOpenSidebarAtom)

  const pathname = usePathname()
  const items = pathname
    .split("/")
    .filter((item) => item)
    .map((item, index, array) => {
      const href = `/${array.slice(0, index + 1).join("/")}`
      return { label: item.replace("-", " "), href }
    })

  return (
    <nav className="flex w-full items-center gap-4 px-8 pt-5">
      <Button
        variant="outline"
        size="icon"
        className="lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <Menu />
      </Button>
      <div className="flex w-full flex-row justify-between">
        <div className="flex flex-col">
          <Breadcrumbs
            items={[{ label: "Mistrzostwa Mechaników", href: "/" }, ...items]}
          />
          <span className="text-xl font-semibold capitalize leading-7 text-gray-700">
            {items.length > 0 ? items[items.length - 1].label : ""}
          </span>
        </div>
        <NavbarUser />
      </div>
    </nav>
  )
}

const NavbarUser = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <div className="flex h-12 flex-row items-center gap-2.5 py-0">
          <Avatar className="h-10 w-10">
            <AvatarImage
              alt={`Profile photo of ${"Michał Bednarek"}`}
              src={`https://placehold.it/40`}
            />
            <AvatarFallback className="bg-transparent">
              <Skeleton className="h-full w-full" />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-row gap-2">
            <span className="text-sm font-semibold text-gray-700">
              Michał Bednarek
            </span>
            <ChevronDown
              className={cn(
                "h-5 w-5 text-gray-700 transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="flex w-60 flex-col px-2 py-2"
        align="end"
        alignOffset={-10}
      >
        <Button variant="ghost" className="flex justify-between px-3" disabled>
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">
            michalbednarek@gmail.com
          </span>
        </Button>
        <Button variant="ghost" className="w-full justify-between px-3" asChild>
          <Link href="/egzaminy">Ukończone egzaminy</Link>
        </Button>
        <Separator className="mx-4 my-2 w-auto" />
        <div className="flex flex-col gap-1">
          <Button variant="ghost" className="w-full justify-between px-3">
            Twoje egzaminy
          </Button>
          <Button variant="ghost" className="w-full justify-between px-3">
            Dodaj nowy egzamin <Plus className="h-4 w-4" />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
