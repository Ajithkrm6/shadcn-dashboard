"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A linear line chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartData2 = [
  { month: "January", value: 120 },
  { month: "February", value: 200 },
  { month: "March", value: 150 },
  { month: "April", value: 80 },
  { month: "May", value: 170 },
  { month: "June", value: 190 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--joy-primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--joy-primary)",
  },
} satisfies ChartConfig;

export function ChartCard() {
  return (
    <Card className="rounded-md bg-gray-100 h-auto">
      <div className="grid grid-cols-2">
        <div>
          <CardContent className="pt-3">
            <p className="text-xs">By Branches</p>
            <p className="text-xs">
              Hiring status <span>12 months</span>
            </p>
          </CardContent>
        </div>
        <div className="flex items-center justify-end ml-3 p-3 font-bold">
          <CardContent>
            <p>...</p>
          </CardContent>
        </div>
      </div>
      <div className="p-2">
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 0,
                right: 0,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={{ stroke: "var(--color-x-axis)" }}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                axisLine={{ stroke: "var(--color-y-axis)" }}
                tickLine={false}
                tickMargin={8}
                domain={[0, 10, 20, 30]} // Ensure this is not overly expansive
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="desktop"
                type="linear"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="mobile"
                type="linear"
                stroke="var(--joy-primary)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end items-center space-x-4 pt-6 pb-10">
            <div className="flex items-center">
              <input
                type="radio"
                id="option1"
                name="customRadio"
                className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-none checked:bg-blue-600"
              />
              <label htmlFor="option1" className="ml-2 text-sm">
                Postions open
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="option2"
                name="customRadio"
                className="appearance-none w-4 h-4 border-2 border-gray-400 rounded-none checked:bg-joyPrimary"
              />
              <label htmlFor="option2" className="ml-2 text-sm">
                Hired
              </label>
            </div>
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
