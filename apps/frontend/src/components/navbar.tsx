"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Breadcrumbs from "./breadcrumbs";
import { NavbarIcons } from "./icons/navbar";

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const pathname = usePathname();
    const items = pathname
        .split("/")
        .filter((item) => item)
        .map((item, index, array) => {
            const href = `/${array.slice(0, index + 1).join("/")}`;
            return { label: item.replace("-", " "), href };
        });

    return (
        <nav className="inline-flex w-full items-center justify-between px-8 pt-5">
            <div className="inline-flex shrink grow basis-0 flex-col">
                <Breadcrumbs
                    items={[
                        { label: "Mistrzostwa Mechaników", href: "/" },
                        ...items,
                    ]}
                />
                <span className="text-xl font-semibold capitalize leading-7 text-gray-700">
                    {items.length > 0 ? items[items.length - 1].label : ""}
                </span>
            </div>
            <button
                className="inline-flex h-10 items-center gap-2.5"
                onClick={() => setOpen((prevOpen) => !prevOpen)}
            >
                <NavbarIcons.profile className="h-10 w-10 rounded-full bg-zinc-400 p-1.5" />
                <div className="flex shrink grow items-center gap-3 text-sm font-medium">
                    <span className="shrink grow basis-0 text-gray-700">
                        Anonimowy
                    </span>
                    {isOpen ? (
                        <NavbarIcons.caretUp />
                    ) : (
                        <NavbarIcons.caretDown />
                    )}
                </div>
            </button>
        </nav>
    );
}
