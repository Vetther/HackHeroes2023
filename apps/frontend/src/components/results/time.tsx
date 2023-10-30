import { cn } from "@/lib/utils"
import { Card, CardTitle } from "../ui/card"

export default function Time({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={cn("w-full items-center justify-between", className)}>
      <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-2.5">
        <CardTitle>Czas ukończenia</CardTitle>
        <div className="flex gap-2">
          <div>
            <span className="text-[36px] font-semibold text-gray-700 sm:text-[56px]">
              00
            </span>
            <span className="text-[24px] font-semibold text-gray-700 sm:text-[32px]">
              h
            </span>
          </div>
          <div>
            <span className="text-[36px] font-semibold text-gray-700 sm:text-[56px]">
              00
            </span>
            <span className="text-[24px] font-semibold text-gray-700 sm:text-[32px]">
              m
            </span>
          </div>
          <div>
            <span className="text-[36px] font-semibold text-gray-700 sm:text-[56px]">
              00
            </span>
            <span className="text-[24px] font-semibold text-gray-700 sm:text-[32px]">
              s
            </span>
          </div>
        </div>
      </div>
      <div className="inline-flex w-full items-center justify-between text-sm">
        <div className="inline-flex shrink grow basis-0 flex-col justify-center gap-2">
          <span className="leading-[21px] text-slate-500">
            Data rozpoczęcia
          </span>
          <span className="font-semibold leading-tight text-gray-700">
            DD.MM.YYYY, 00:00
          </span>
        </div>
        <div className="inline-flex shrink grow basis-0 flex-col items-end justify-center gap-2">
          <span className="leading-[21px] text-slate-500">
            Data zakończenia
          </span>
          <span className="font-semibold leading-tight text-gray-700">
            DD.MM.YYYY, 00:00
          </span>
        </div>
      </div>
    </Card>
  )
}
