"use client"

import { useCalendar } from "@/hooks/use-calendar"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  format,
  isAfter,
  isSameDay,
  isSameMonth,
  setHours,
  setMinutes,
} from "date-fns"
import { pl } from "date-fns/locale"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { TimeValue } from "react-aria"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Textarea } from "../ui/textarea"
import { TimeField } from "../ui/time-field"

const data = [
  {
    startTime: "2023-10-31 11:54:43.024",
    finishTime: "2023-10-31 12:13:35.492",
    text: "Zapisy na:\n XIII Mistrzostwa Mechaników",
    color: "",
  },
]

const Calendar = () => {
  const {
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
  } = useCalendar()

  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex flex-col gap-4 py-3">
        <div className="flex flex-row items-center justify-center gap-2">
          <ChevronLeft
            className="cursor-pointer stroke-slate-500"
            onClick={() => prevMonth()}
          />
          <span className="select-none text-xl font-normal text-slate-500">
            {`${month} ${year}`}
          </span>
          <ChevronRight
            className="cursor-pointer stroke-slate-500"
            onClick={() => nextMonth()}
          />
        </div>
        <div className="grid h-6 w-full grid-cols-7">
          {dayNames.map((day) => (
            <div
              className="flex justify-center text-base font-normal capitalize leading-tight text-slate-500"
              key={day}
            >
              {day.replaceAll(".", "")}
            </div>
          ))}
        </div>
      </div>
      <div className="grid h-full grid-cols-7">
        {cells().map((day) => {
          const hasEvent = data.some((event) =>
            isSameDay(day, new Date(event.startTime))
          )

          const eventData = data.find((event) =>
            isSameDay(day, new Date(event.startTime))
          )

          return (
            <div
              className={cn(
                "group flex aspect-[160/145] h-full flex-col items-center gap-1 p-1",
                !isSameMonth(day, monthStart) && "",
                isSameDay(day, currentDate) && "",
                isSameDay(day, selectedDate) && ""
              )}
              key={`${day}`}
              onClick={() => onDateClick(day)}
            >
              <div className="flex w-full items-center justify-center">
                <span
                  className={cn(
                    "text-base font-medium leading-tight text-neutral-800",
                    !isSameMonth(day, monthStart) && "text-slate-500",
                    isSameDay(day, currentDate) &&
                      "flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 text-white"
                  )}
                >
                  {format(day, "d")}
                </span>
              </div>
              {hasEvent && eventData ? (
                <Event
                  {...eventData}
                  className={cn(
                    !isSameMonth(day, monthStart) && "bg-opacity-50 opacity-50"
                  )}
                />
              ) : (
                <CreateEvent day={day} />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

interface EventProps extends React.HTMLAttributes<HTMLDivElement> {
  startTime: string
  finishTime: string
  text: string
  color: string
}

const Event = ({
  className,
  startTime,
  finishTime,
  text,
  color,
  ...props
}: EventProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-col justify-between gap-3 rounded-lg border-l-2 border-green-400 bg-emerald-50 px-3 py-3.5",
        className
      )}
    >
      <div className="text-xs font-bold text-green-400">
        {format(new Date(startTime), "HH:mm")} -{" "}
        {format(new Date(finishTime), "HH:mm")}
      </div>
      <div className="text-[13px]/[110%] font-medium text-green-400">
        {text}
      </div>
    </div>
  )
}

const createEventSchema = z.object({
  dates: z
    .object({
      day: z.date(),
      startTime: z
        .custom<TimeValue>()
        .refine((value) => value !== undefined, { message: "123" }),
      finishTime: z
        .custom<TimeValue>()
        .refine((value) => value !== undefined, { message: "123" }),
    })
    .refine(
      (value) =>
        isAfter(
          setMinutes(
            setHours(value.day, +value.startTime.hour),
            +value.startTime.minute
          ),
          setMinutes(
            setHours(value.day, +value.finishTime.hour),
            +value.finishTime.minute
          )
        ),
      { message: "Start date must be earlier than End date." }
    ),

  text: z.string().min(1),
})

const CreateEvent = ({ day }: { day: Date }) => {
  const [open, setOpen] = useState(false)

  const form = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      dates: {
        day: day,
      },
      text: "",
    },
  })

  useEffect(() => {
    console.log(form.getValues())
  }, [form.watch()])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="flex cursor-pointer items-center justify-center rounded-lg bg-neutral-800 px-3 py-[6px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-xs font-medium text-white">+ Dodaj</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Dodaj egzamin w dniu {format(day, "do. MMMM yyyy", { locale: pl })}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit((data) => console.log(data))}>
            <div className="flex flex-row gap-2">
              <FormField
                control={form.control}
                name="dates.startTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Godzina rozpoczęcia</FormLabel>
                    <FormControl>
                      <TimeField {...field} />
                    </FormControl>
                    <FormDescription>
                      Wybierz datę rozpoczęcia egzaminu
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dates.finishTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Godzina zakończenia</FormLabel>
                    <FormControl>
                      <TimeField {...field} />
                    </FormControl>
                    <FormDescription>
                      Wybierz datę zakończenia egzaminu
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Opis</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormDescription>Napisz krótki opis</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button>Dodaj egzamin</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default Calendar
