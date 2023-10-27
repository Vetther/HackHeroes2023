import { SidebarIcons } from "./icons/sidebar"
import SidebarNavigation from "./sidebar-navigation"
import { Button } from "./ui/button"

const Sidebar = () => {
  return (
    <div className="static z-10 flex h-screen w-full max-w-[275px] flex-col border-r border-gray-100 bg-white">
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
    </div>
  )
}

export default Sidebar
