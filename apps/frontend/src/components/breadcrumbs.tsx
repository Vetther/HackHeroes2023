import { cn } from "@/lib/utils";
import Link from "next/link";

type BreadcrumbProps = {
    items: {
        label: string;
        href: string;
    }[];
};

export default function Breadcrumbs({ items }: BreadcrumbProps) {
    return (
        <div className="flex gap-[5px]">
            {items.map(({ label, href }, i) => (
                <div key={href} className="flex gap-[5px]">
                    <Link
                        className={cn(
                            "text-xs capitalize leading-[18px]",
                            i === items.length - 1
                                ? "font-semibold text-gray-700"
                                : "font-medium text-slate-500"
                        )}
                        href={href}
                    >
                        {label}
                    </Link>
                    {i !== items.length - 1 && (
                        <span className="text-xs leading-[18px] text-black">
                            /
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
