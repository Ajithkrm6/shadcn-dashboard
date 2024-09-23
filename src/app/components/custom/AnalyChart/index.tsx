"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTableCellsLarge,
  faStopwatch,
  faChartSimple,
  faVideo,
  faGear,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export const description = "A bar chart";
const chartData = [
  { month: "35", desktop: 186 },
  { month: "45", desktop: 305 },
  { month: "50", desktop: 237 },
  { month: "55", desktop: 73 },
  { month: "84", desktop: 209 },
  { month: "54", desktop: 214 },
  { month: "60", desktop: 250 },
  { month: "70", desktop: 270 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#DFDFDF",
  },
} satisfies ChartConfig;

export interface AnalyChartProps {
  logo?: any;
  heading?: string;
  stat?: number;
}

export const AnalyChart = (props: AnalyChartProps) => {
  return (
    <Card className="rounded-md">
      <div className="grid grid-rows-2 justify-start items-center p-3">
        <div className="grid grid-cols-2 flex-row  ">
          <div className="pl-3 pr-3 flex flex-row items-center">
            <FontAwesomeIcon
              icon={props.logo || faChartSimple}
              className="h-10 w-10 p-4"
            />
            <div className="flex flex-col">
              <p>{props.heading}</p>
              <p>Hiring Status for 12 months</p>
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-end item-center ">
              <p
                style={{ fontWeight: "bold", fontSize: "20px" }}
                className="text-gray-400"
              >
                ...
              </p>
            </div>
          </div>
        </div>

        {/*  this is the container fro stats and bargraph*/}
        <div className="grid grid-cols-2 justify-between items-center p-2">
          <div className="">
            <p style={{ fontSize: "50px", color: "#000000" }}>{props.stat}</p>
            <p className="text-sm text-black">New Applications this week</p>
          </div>
          <div className="">
            <ChartContainer config={chartConfig}>
              <BarChart
                className="h-full w-full"
                accessibilityLayer
                data={chartData}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </Card>
  );
};

{
  /* <div className="grid grid-cols-2 items-start">
<div className="flex flex-row items-center bg-red-500 h-fit">
  <div className="bg-red-200 p-5">
    <FontAwesomeIcon
      icon={props.logo || faChartSimple}
      className=""
    />
  </div>
  <div className="flex flex-col p-2">
    <p className="font-bold text-md">{props.heading}</p>
    <p>Hiring Status for 12 months</p>
  </div>
</div>

<div className="flex justify-end items-center ">
  <p>...</p>
</div>
</div> */
}
