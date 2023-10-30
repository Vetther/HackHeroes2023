"use client"

import useCountAnimate from "@/hooks/use-count-animate"
import { motion } from "framer-motion"
import { Card, CardTitle } from "../ui/card"

type TimeProps = {
  start: Date
  end: Date
}

export default function Time({ start, end }: TimeProps) {
  const time = new Date(end.getTime() - start.getTime())
  const hours = useCountAnimate(0, time.getUTCHours())
  const minutes = useCountAnimate(0, time.getUTCMinutes())
  const seconds = useCountAnimate(0, time.getUTCSeconds())

  const dateFormat = Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  return (
    <Card className="w-full items-center justify-between">
      <div className="flex shrink grow basis-0 flex-col items-center justify-center gap-2.5">
        <CardTitle>Czas ukończenia</CardTitle>
        <div className="flex gap-2">
          <div>
            <span className="text-[56px] font-semibold leading-[78.4px] text-gray-700">
              {hours.get() > 10 && "0"}
              <motion.span>{hours}</motion.span>
            </span>
            <span className="text-[32px] font-semibold leading-[44.8px] text-gray-700">
              h
            </span>
          </div>
          <div>
            <span className="text-[56px] font-semibold leading-[78.4px] text-gray-700">
              {minutes.get() > 10 && "0"}
              <motion.span>{minutes}</motion.span>
            </span>
            <span className="text-[32px] font-semibold leading-[44.8px] text-gray-700">
              m
            </span>
          </div>
          <div>
            <span className="text-[56px] font-semibold leading-[78.4px] text-gray-700">
              {seconds.get() > 10 && "0"}
              <motion.span>{seconds}</motion.span>
            </span>
            <span className="text-[32px] font-semibold leading-[44.8px] text-gray-700">
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
            {/* DD.MM.YYYY, 00:00 */}
            {dateFormat.format(start)}
          </span>
        </div>
        <div className="inline-flex shrink grow basis-0 flex-col items-end justify-center gap-2">
          <span className="leading-[21px] text-slate-500">
            Data zakończenia
          </span>
          <span className="font-semibold leading-tight text-gray-700">
            {/* DD.MM.YYYY, 00:00 */}
            {dateFormat.format(end)}
          </span>
        </div>
      </div>
    </Card>
  )
}
