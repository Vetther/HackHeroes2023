import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
  subDays,
  subMonths,
} from "date-fns"
import { pl } from "date-fns/locale"
import { useMemo, useState } from "react"

export function useCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [activeDate, setActiveDate] = useState(currentDate)
  const [selectedDate, setSelectedDate] = useState(currentDate)

  const month = useMemo(() => {
    return format(activeDate, "LLLL", { locale: pl })
  }, [activeDate])

  const year = useMemo(() => {
    return format(activeDate, "yyyy", { locale: pl })
  }, [activeDate])

  const monthStart = useMemo(() => {
    return startOfMonth(activeDate)
  }, [activeDate])

  const dayNames = useMemo(() => {
    return [...Array(7)].map((_, index) => {
      return format(addDays(startOfWeek(currentDate), index + 1), "eee", {
        locale: pl,
      })
    })
  }, [currentDate])

  const nextMonth = () => {
    setActiveDate(addMonths(activeDate, 1))
  }

  const prevMonth = () => {
    setActiveDate(subMonths(activeDate, 1))
  }

  const cells = () => {
    const monthStart = startOfMonth(activeDate)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(subDays(monthStart, 1))
    const endDate = endOfWeek(monthEnd)
    const rows = []
    let days = []
    let day = addDays(startDate, 1)
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day
        days.push(cloneDay)
        day = addDays(day, 1)
      }
      rows.push(...days)
      days = []
    }
    return rows
  }

  const onDateClick = (day: Date) => {
    setActiveDate(day)
    setSelectedDate(day)
  }

  return {
    currentDate,
    selectedDate,
    nextMonth,
    prevMonth,
    dayNames,
    monthStart,
    month,
    year,
    cells,
    onDateClick,
  }
}
