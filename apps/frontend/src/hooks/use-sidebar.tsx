import { usePathname } from "next/navigation"
import { SidebarIcons } from "@/components/icons/sidebar"
import { cn } from "@/lib/utils"

export function useSidebar() {
  const pathname = usePathname()

  const navigation = [
    {
      label: "Egzaminy",
      path: "/egzaminy",
      icon: (
        <SidebarIcons.chart
          className={cn(
            "transition-colors duration-300",
            pathname === "/egzaminy"
              ? "text-white"
              : "text-slate-500 group-hover:text-indigo-500"
          )}
        />
      ),
      active: pathname === "/egzaminy",
    },
    {
      label: "Baza Wiedzy",
      path: "/bazawiedzy",
      icon: (
        <SidebarIcons.comment
          className={cn(
            "transition-colors duration-300",
            pathname === "/bazawiedzy"
              ? "text-white"
              : "text-slate-500 group-hover:text-indigo-500"
          )}
        />
      ),
      active: pathname === "/bazawiedzy",
    },
    {
      label: "Tabela wyników",
      path: "/tabela-wynikow",
      icon: (
        <SidebarIcons.scoreboard
          className={cn(
            "transition-colors duration-300",
            pathname === "/tabela-wynikow"
              ? "text-white"
              : "text-slate-500 group-hover:text-indigo-500"
          )}
        />
      ),
      active: pathname === "/tabela-wynikow",
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
