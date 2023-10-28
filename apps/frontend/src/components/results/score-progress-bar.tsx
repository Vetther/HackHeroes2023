"use client"

import useCountAnimate from "@/hooks/use-count-animate"
import { motion } from "framer-motion"

type ProgressBarProps = {
  points: number
  maxPoints?: number
  duration?: number
}

export default function ProgressBar({
  points,
  maxPoints = 40,
  duration = 2,
}: ProgressBarProps) {
  const radius = 45
  const size = 300
  const value = Math.ceil((points / maxPoints) * 100)
  const percentCount = useCountAnimate(0, value)
  const pointCount = useCountAnimate(0, points)

  return (
    <div className="relative grid place-items-center">
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
        width={size}
        height={size}
        className="-rotate-90 stroke-primary stroke-[6]"
      >
        <motion.circle
          cx={50}
          cy={50}
          r={radius}
          pathLength={100}
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
