"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { ChevronDown, Plus } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import Breadcrumbs from "./breadcrumbs"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export default function Navbar() {
  const pathname = usePathname()
  const items = pathname
    .split("/")
    .filter((item) => item)
    .map((item, index, array) => {
      const href = `/${array.slice(0, index + 1).join("/")}`
      return { label: item.replace("-", " "), href }
    })

  return (
    <nav className="flex w-full items-center justify-between px-8 pt-5">
      <div className="flex flex-col">
        <Breadcrumbs
          items={[{ label: "Mistrzostwa Mechaników", href: "/" }, ...items]}
        />
        <span className="text-xl font-semibold capitalize leading-7 text-gray-700">
          {items.length > 0 ? items[items.length - 1].label : ""}
        </span>
      </div>
      <NavbarUser />
    </nav>
  )
}

const NavbarUser = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <div className="flex h-12 flex-row items-center gap-2.5 py-0">
          <Avatar>
            <AvatarImage
              alt={`Profile photo of ${"Michał Bednarek"}`}
              src="https://s3-alpha-sig.figma.com/img/63dc/1059/5fa6c5970f56b4c1d92d37c5e7c961a1?Expires=1699228800&Signature=NNeoeMw8peJmmG7u5LJAUiZGk8g2hzvFhqQAFyWQeZKO8kC2GEWPCGyR0U2gFhCaQb4VF0vu~Yrc1KgI6ivDa7R3SEy~vljofHUFtNDz2Q1DKTjlA6hv1LmoVurXdTyFMXL4YNpwnwa1v~5DnZYJdwA65vqXCrcYMep5Wt4gtqYl-ppEBb7JAKhCRj5GGrbFVawrIhrlrUYQV9GOjIhHjxukSQR1PF80ft1QXPX10LJC-09XJsS7nF6H8uUg1lo7NpaN8ElXBrhXF1i7qGhbnQZjKfXffLYiXG74mL3YTXSPdDgVpQ6aMrGIi2F4xa0~ufd0F5QDOJJlH00c4ET5tQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
            <AvatarFallback>MB</AvatarFallback>
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
