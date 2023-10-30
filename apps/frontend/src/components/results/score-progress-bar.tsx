"use client"

import useCountAnimate from "@/hooks/use-count-animate"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  points: number
  maxPoints?: number
  duration?: number
}

export default function ProgressBar({
  className,
  points,
  maxPoints = 40,
  duration = 2,
}: ProgressBarProps) {
  const radius = 45
  const value = Math.ceil((points / maxPoints) * 100)
  const percentCount = useCountAnimate(0, value)
  const pointCount = useCountAnimate(0, points)

  return (
    <div className={cn("relative grid place-items-center", className)}>
      <div className="absolute flex flex-col text-center">
        <span className="text-5xl font-medium leading-[67.2px] text-gray-700">
          <motion.span>{percentCount}</motion.span>%
        </span>
        <span className="text-xl font-medium leading-7 text-slate-500">
          <motion.span>{pointCount}</motion.span>/{maxPoints} pkt
        </span>
      </div>
      <svg
        viewBox="0 0 100 100"
        className="h-[250px] w-[250px] -rotate-90 stroke-[6] md:h-[300px] md:w-[300px]"
      >
        <circle
          cx={50}
          cy={50}
          r={radius}
          pathLength={100}
          stroke="#F8F9FA"
          strokeDasharray={100}
          strokeLinecap="round"
          fill="transparent"
        ></circle>
        <motion.circle
          cx={50}
          cy={50}
          r={radius}
          pathLength={100}
          stroke="hsl(var(--primary))"
          strokeDasharray={100}
          strokeLinecap="round"
          fill="transparent"
          initial={{ strokeDashoffset: 100 }}
          animate={{ strokeDashoffset: 99.9 - value }}
          transition={{ duration }}
        />
      </svg>
    </div>
  )
}
