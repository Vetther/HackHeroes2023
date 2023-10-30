"use client"

import { atom, useAtom } from "jotai"
import { SidebarIcons } from "./icons/sidebar"
import SidebarNavigation from "./sidebar-navigation"
import SidebarNavigationMobile from "./sidebar-navigation-mobile"
import { Button } from "./ui/button"
import { Sheet, SheetContent } from "./ui/sheet"

export const isOpenSidebarAtom = atom(false)

const Sidebar = () => {
  const [isOpen, setIsOpen] = useAtom(isOpenSidebarAtom)

  return (
    <>
      <aside className="static z-10 hidden h-screen w-full max-w-[275px] flex-col border-r border-gray-100 bg-white lg:flex">
        <div className="mt-7 flex justify-center pb-[15px]">
          <p className="font-dm-sans text-[15px] font-bold leading-snug text-gray-700">
            Egzaminy
          </p>
        </div>
        <SidebarNavigation />
        <div className="px-8 pb-24">
          <div className="relative flex h-[200px] w-full flex-col items-center justify-between overflow-hidden rounded-lg bg-indigo-500 py-6">
            <div className="flex flex-col items-center gap-2">
              <SidebarIcons.banner />
              <p className="font-dm-sans text-xs font-medium leading-none text-white">
                Potrzebujesz pomocy?
              </p>
              <p className="font-dm-sans text-xs font-medium leading-none text-white opacity-80">
                Skontaktuj się z nami?
              </p>
            </div>
            <Button variant="secondary" size="sm" className="z-10 px-10">
              Kontakt
            </Button>
            <SidebarIcons.bannerBlob className="absolute -right-16 -top-28" />
            <SidebarIcons.bannerBlob2 className="absolute -bottom-36 -left-40" />
          </div>
        </div>
      </aside>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="flex h-full flex-col p-0">
          <div className="mt-7 flex justify-center pb-[15px]">
            <p className="font-dm-sans text-[15px] font-bold leading-snug text-gray-700">
              Egzaminy
            </p>
          </div>
          <SidebarNavigationMobile />
          <div className="px-4 pb-24 lg:px-8">
            <div className="relative flex h-[200px] w-full flex-col items-center justify-between overflow-hidden rounded-lg bg-indigo-500 py-6">
              <div className="flex flex-col items-center gap-2">
                <SidebarIcons.banner />
                <p className="font-dm-sans text-xs font-medium leading-none text-white">
                  Potrzebujesz pomocy?
                </p>
                <p className="font-dm-sans text-xs font-medium leading-none text-white opacity-80">
                  Skontaktuj się z nami?
                </p>
              </div>
              <Button variant="secondary" size="sm" className="z-10 px-10">
                Kontakt
              </Button>
              <SidebarIcons.bannerBlob className="absolute -right-16 -top-28" />
              <SidebarIcons.bannerBlob2 className="absolute -bottom-36 -left-40" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default Sidebar
