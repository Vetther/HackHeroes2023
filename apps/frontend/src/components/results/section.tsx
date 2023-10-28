import { cn } from "@/lib/utils"

export default function Section({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("inline-flex rounded-lg bg-white p-11 shadow", className)}
      {...props}
    >
      {children}
    </section>
  )
}
