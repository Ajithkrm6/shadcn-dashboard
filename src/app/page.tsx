import Image from "next/image";
import { Header } from "../app/components/custom/Header";
import { NavBar } from "./components/custom/Navbar";
import { TabPannel } from "./components/custom/TabsPannel";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../app/components/ui/card";
import { Separator } from "../app/components/ui/separator";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../app/components/ui/avatar";
import { ChartCard } from "./components/custom/ChartCard";
import { AnalyChart } from "./components/custom/AnalyChart";
import { OfferCard } from "./components/custom/OfferCard";

export default function Home() {
  return (
    <div className="h-auto w-auto grid grid-rows-[8%_92%] bg-white overflow-hidden-scrollbar">
      <div className="">
        <Header />
      </div>

      <div className="row-span-1 grid grid-cols-[5%_95%] h-full">
        <div className=" col-span-1">
          <NavBar />
        </div>
        <div className="col-span-1 grid grid-rows-[auto_auto_auto] gap-4 p-4 ">
          <div className="p-2 h-auto ">
            <TabPannel />
          </div>

          <div className="p-2 grid grid-cols-3 gap-4 ">
            <div className="   bg-joyPrimary rounded-md">
              <CardHeader>
                <CardDescription className="text-white">
                  welcome back, Alex.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-rows-2">
                  <div className="grid grid-cols-2">
                    <div>
                      <p className="text-xl">452</p>
                      <p className="text-xs">Employees</p>
                    </div>

                    <div>
                      <p className="text-xl">24</p>
                      <p className="text-xs">Hired this year</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 pt-3">
                    <div>
                      <p className="text-xl">24</p>
                      <p className="text-xs">Hired this year</p>
                    </div>

                    <div>
                      <p className="text-xl">24</p>
                      <p className="text-xs">Hired this year</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-2">
                <Separator />
              </div>

              <CardFooter>
                <div>
                  <div>
                    <p className="text-xl">24</p>
                    <p className="text-xs">Hired this year</p>
                  </div>
                  <div className="flex relative w-fit">
                    <div className="relative z-5 ml-0 bg-joyPrimary rounded-full p-1">
                      <Avatar className="relative w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="relative z-4 -ml-4 bg-joyPrimary rounded-full p-1">
                      <Avatar className="relative w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="relative z-3 -ml-5 bg-joyPrimary rounded-full p-1">
                      <Avatar className="relative w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="relative z-2  -ml-4 bg-joyPrimary rounded-full p-1">
                      <Avatar className="relative w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="relative z-1 -ml-4 bg-joyPrimary rounded-full p-1">
                      <Avatar className="relative w-8 h-8">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </div>

            <div>
              <ChartCard />
            </div>
            <div className="bg-slate-50">
              <OfferCard />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 ">
            <div className="h-fit">
              <AnalyChart heading="EVA-Recording" stat={79} />
            </div>
            <div className="h-fit">
              <AnalyChart heading="EVA-Recording" stat={79} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="grid grid-cols-2 gap-4">
<div>
  <AnalyChart heading="EVA-REC" />
</div>
</div> */
}
