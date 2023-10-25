import { SidebarIcons } from "@/components/icons/sidebar";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function useSidebar() {
    const pathname = usePathname();

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
            path: "/tabelawynikow",
            icon: (
                <SidebarIcons.scoreboard
                    className={cn(
                        "transition-colors duration-300",
                        pathname === "/tabelawynikow"
                            ? "text-white"
                            : "text-slate-500 group-hover:text-indigo-500"
                    )}
                />
            ),
            active: pathname === "/tabelawynikow",
        },
    ];

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
    };

    return { navigation, account };
}
