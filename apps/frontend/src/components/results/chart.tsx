"use client"

import { Card, CardContent, CardTitle } from "../ui/card"

import {
  CartesianGrid,
  Line,
  LineChart,
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

export default function Chart() {
  return (
    <Card className="h-full">
      <CardTitle>Czas udzielenia odpowiedzi / pytanie</CardTitle>
      <CardContent className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
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
            <Line
              type="monotone"
              dataKey="seconds"
              strokeWidth={4}
              dot={false}
              activeDot={false}
              style={{
                stroke: "#5D5FEF",
                strokeLinecap: "round",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
