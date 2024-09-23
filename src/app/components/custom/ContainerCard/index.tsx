import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

import { Separator } from "@/app/components/ui/separator";

export const ContainerCard = () => {
  return (
    <div>
      {/* <main className="flex flex-col gap-8 row-start-2 items-center w-full h-full sm:items-start bg-white"> */}
      <Card className="p-1 md:w-4/12 md:h-6/12 border-r-0 bg-purple-200">
        <CardHeader>
          {/* <CardTitle>Card Title</CardTitle> */}
          <CardDescription>Welcome back, Alex</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-1 bg-joyPrimary">
                <div>
                  <p>Column1</p>
                </div>
                <div>
                  <p className="text-25">1</p>
                </div>
              </div>
              <div className="grid grid-cols-1 bg-joyPrimary">
                <div>
                  <p className="text-xl">Column2</p>
                </div>
                <div>
                  <p className="text-sm">2</p>
                </div>
              </div>
            </div>
            <div className="grid grid-rows-2">
              <div>Column 2 - Row 1</div>
              <div>Column 2 - Row 2</div>
            </div>
          </div>
        </CardContent>
        <Separator />
        <CardFooter>
          <div className="flex relative w-fit">
            <div className="relative z-5 ml-0 bg-white rounded-full p-1">
              <Avatar className="relative w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="relative z-4 -ml-4 bg-white rounded-full p-1">
              <Avatar className="relative w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="relative z-3 -ml-5 bg-white rounded-full p-1">
              <Avatar className="relative w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="relative z-2  -ml-4 bg-transparent rounded-full p-1">
              <Avatar className="relative w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="relative z-1 -ml-4 bg-white rounded-full p-1">
              <Avatar className="relative w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardFooter>
      </Card>
      {/* </main> */}
    </div>
  );
};
