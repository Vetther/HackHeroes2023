"use client"

import { animate, useMotionValue, useTransform } from "framer-motion"
import { useEffect } from "react"

export default function useCountAnimate(
  start: number,
  stop: number,
  duration = 2
) {
  const _count = useMotionValue(start)
  const count = useTransform(_count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(_count, stop, { duration })

    return controls.stop
  }, [])

  return count
}
