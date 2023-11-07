import { SidebarIcons } from "@/components/icons/sidebar"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export function useSidebar() {
  const pathname = usePathname()

  const navigation = [
    {
      label: "Egzaminy",
      path: "/egzaminy",
      icon: (
        <SidebarIcons.chart
          className={cn(
            "transition-colors duration-150",
            pathname.split("/")[1] === "egzaminy"
              ? "text-white"
              : "text-slate-500 group-hover:text-indigo-500"
          )}
        />
      ),
      active: pathname.split("/")[1] === "egzaminy",
    },
    {
      label: "Baza Wiedzy",
      path: "/bazawiedzy",
      icon: (
        <SidebarIcons.comment
          className={cn(
            "transition-colors duration-150",
            pathname === "/bazawiedzy"
              ? "text-white"
              : "text-slate-500 group-hover:text-indigo-500"
          )}
        />
      ),
      active: pathname === "/bazawiedzy",
    },
  ]

  const account = {
    label: "Konto",
    path: "konto",
    icon: (
      <SidebarIcons.news
        className={cn(
          "transition-colors duration-300",
          pathname === "/konto"
            ? "text-white"
            : "text-slate-500 group-hover:text-indigo-500"
        )}
      />
    ),
    active: pathname === "/konto",
    index: navigation.length,
  }

  return { navigation, account }
}
