"use client"

import { useSidebar } from "@/hooks/use-sidebar"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { useAtom } from "jotai"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { isOpenSidebarAtom } from "./sidebar"

const SidebarNavigationMobile = () => {
  const pathname = usePathname()
  const { navigation, account } = useSidebar()

  const [activeTabIndex, setActiveTabIndex] = useState<number | null>()
  const [hoverTabIndex, setHoverTabIndex] = useState<number | null>()
  const [buttonRefs, setButtonRefs] = useState<Array<HTMLElement | null>>([])

  const [isOpen, setIsOpen] = useAtom(isOpenSidebarAtom)

  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (account.active) return setActiveTabIndex(account.index)
    setActiveTabIndex(navigation.findIndex(({ active }) => active))
  }, [pathname])

  return (
    <div
      className="flex flex-1 flex-col justify-center gap-[18px] px-8"
      ref={navRef}
    >
      {navigation.map(({ label, path, icon, active }, index) => (
        <Link
          ref={(el) => (buttonRefs[index] = el)}
          href={path}
          key={index}
          onClick={() => {
            setActiveTabIndex(index)
            setIsOpen(false)
          }}
          onMouseOver={() => setHoverTabIndex(index)}
          onMouseLeave={() => setHoverTabIndex(null)}
          className={cn(
            "group relative h-[50px] rounded-lg bg-transparent",
            active && "bg-indigo-500"
          )}
        >
          <motion.p
            className={cn(
              "z-10 flex items-center justify-start gap-[14px] px-[18px] py-3 font-dm-sans text-sm font-semibold leading-tight transition-colors duration-150 hover:text-indigo-500",
              active ? "!text-white" : "text-slate-500"
            )}
          >
            {icon}
            {label}
          </motion.p>
          <AnimatePresence>
            {hoverTabIndex === index && (
              <motion.div
                key={"hover"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 top-0 -z-20 h-full w-full rounded-lg bg-indigo-50"
              />
            )}
          </AnimatePresence>
        </Link>
      ))}
    </div>
  )
}

export default SidebarNavigationMobile
