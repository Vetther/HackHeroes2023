import Link from "next/link"
import { cn } from "@/lib/utils"

type BreadcrumbProps = {
  items: {
    label: string
    href: string
  }[]
}

export default function Breadcrumbs({ items }: BreadcrumbProps) {
  return (
    <div className="flex gap-[5px]">
      {items.map(({ label, href }, i) => (
        <>
          <Link
            className={cn(
              "capitalize font-semibold leading-[18px] text-xs",
              i === items.length - 1 ? "text-gray-700" : "text-slate-500"
            )}
            href={href}
          >
            {label}
          </Link>
          {i !== items.length - 1 && (
            <span className="text-black text-xs leading-[18px]">/</span>
          )}
        </>
      ))}
    </div>
  )
}
