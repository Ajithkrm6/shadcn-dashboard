"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

export const TabPannel = () => {
  const [selected, setSelected] = useState("progress");
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-row justify-start items-center p-3">
        <Tabs defaultValue="progress">
          <TabsList className="bg-transparent gap-4 ">
            <TabsTrigger
              value="progress"
              onClick={() => {
                setSelected("progress");
                console.log(selected);
              }}
              className={`border-b-2 rounded-none text-xl shadow-none box-shadow-0 ${
                selected === "progress"
                  ? "border-gray-600 text-gray-600 shadow-none "
                  : "border-transparent text-gray-200 shadow-none"
              } bg-transparent hover:bg-transparent shadow-none`}
            >
              Progress
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              onClick={() => setSelected("analytics")}
              className={`border-b-2 rounded-none text-xl ${
                selected === "analytics"
                  ? "border-gray-600 text-gray-600 bg-none shadow-none"
                  : "border-transparent text-gray-200"
              } bg-transparent hover:bg-transparent shadow-none`}
            >
              Analytics
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-row justify-end items-center gap-5 p-3">
        <div>
          <p className="font-bold text-xs text-gray-500">Filter</p>
        </div>
        <div>
          <p className="font-bold text-xs text-gray-500">Customise</p>
        </div>
        <div>
          <p className="font-bold text-xs text-gray-500">...</p>
        </div>
      </div>
    </div>
  );
};
