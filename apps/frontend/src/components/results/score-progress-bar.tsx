"use client"

import { motion } from "framer-motion"

type ProgressBarProps = {
  points: number
  maxPoints?: number
}

export default function ProgressBar({
  points,
  maxPoints = 40,
}: ProgressBarProps) {
  const radius = 45
  const size = 300
  const value = Math.ceil((points / maxPoints) * 100)

  return (
    <div className="relative grid place-items-center">
      <div className="absolute flex flex-col text-center">
        <span className="text-5xl leading-[67.2px] text-gray-700">
          {value}%
        </span>
        <span className="text-xl leading-7 text-slate-500">
          {points}/{maxPoints} pkt
        </span>
      </div>
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="-rotate-90 stroke-indigo-500 stroke-[6]"
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
          transition={{ duration: 2 }}
        />
      </svg>
    </div>
  )
}
