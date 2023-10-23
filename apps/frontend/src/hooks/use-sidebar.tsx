import { usePathname } from "next/navigation";
import { SidebarIcons } from "@/components/icons/sidebar";
import { cn } from "@/lib/utils";

const useSidebar = () => {
    const pathname = usePathname();

    const navigation = [
        {
            label: "Wydarzenia",
            path: "wydarzenia",
            icon: (
                <SidebarIcons.events
                    className={cn(
                        "transition-colors duration-300",
                        pathname === "/wydarzenia"
                            ? "text-white"
                            : "text-slate-500 group-hover:text-indigo-500"
                    )}
                />
            ),
            active: pathname === "/wydarzenia",
        },
        {
            label: "Baza Wiedzy",
            path: "bazawiedzy",
            icon: (
                <SidebarIcons.knowledgeBase
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
            path: "tabelawynikow",
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
        {
            label: "Aktualności",
            path: "aktualnosci",
            icon: (
                <SidebarIcons.news
                    className={cn(
                        "transition-colors duration-300",
                        pathname === "/aktualnosci"
                            ? "text-white"
                            : "text-slate-500 group-hover:text-indigo-500"
                    )}
                />
            ),
            active: pathname === "/aktualnosci",
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
};

export default useSidebar;
