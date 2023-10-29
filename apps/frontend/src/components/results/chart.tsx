"use client"

import { cn } from "@/lib/utils"
import { Card, CardContent, CardTitle } from "../ui/card"

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts"

const data = [
  {
    seconds: 15,
  },
  {
    seconds: 60,
  },
  {
    seconds: 50,
  },
  {
    seconds: 225,
  },
  {
    seconds: 140,
  },
  {
    seconds: 120,
  },
  {
    seconds: 90,
  },
]

export default function Chart({
  className,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <Card className={cn("h-full", className)}>
      <CardTitle>Czas udzielenia odpowiedzi / pytanie</CardTitle>
      <CardContent className="h-80 xl:h-64 2xl:h-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7459D9" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#7459D9" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} color="F1F1F5" strokeWidth={0.5} />
            <YAxis
              axisLine={false}
              tickLine={false}
              minTickGap={30}
              tickSize={10}
              tick={{ fill: "#737791" }}
              tickFormatter={(value) => `${value} sek`}
            />
            <Tooltip
              cursor={false}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-lg border bg-background p-2">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                          <span className="text-xs font-medium uppercase text-muted-foreground">
                            Sekundy
                          </span>
                          <span className="text-md font-bold text-muted-foreground">
                            {payload[0].value}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                }

                return null
              }}
            />
            <Area
              type="monotone"
              dataKey="seconds"
              strokeWidth={4}
              dot={false}
              activeDot={false}
              stroke="#5D5FEF"
              fill="url(#gradient)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
