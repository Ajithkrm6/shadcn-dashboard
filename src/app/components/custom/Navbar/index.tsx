"use client";

// import { useState } from "react";
// import { Tabs, TabsList, TabsTrigger } from "../../custom/VerticalTab";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faTableCellsLarge,
//   faStopwatch,
//   faChartSimple,
//   faMessage,
//   faGear,
// } from "@fortawesome/free-solid-svg-icons";

// export const NavBar = () => {
//   const [activeTab, setActiveTab] = useState("1"); // State to track the active tab

//   return (
//     <Tabs defaultValue="1" className="p-0 bg-white shadow-none">
//       <TabsList className="flex p-0 flex-col gap-4 space-y-2 z-0 bg-white">
//         {[1, 2, 3, 4, 5, 6].map((tab) => (
//           <TabsTrigger
//             key={tab}
//             value={`${tab}`}
//             onClick={() => setActiveTab(`${tab}`)} // Update active tab on click
//             className={`text-primary rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg shadow-none ${
//               activeTab === `${tab}` ? "bg-blue-500" : "bg-white" // Change bg color when active
//             }`}
//           >
//             <FontAwesomeIcon
//               icon={
//                 tab === 1
//                   ? faHome
//                   : tab === 2
//                   ? faTableCellsLarge
//                   : tab === 3
//                   ? faStopwatch
//                   : tab === 4
//                   ? faChartSimple
//                   : tab === 5
//                   ? faMessage
//                   : faGear // for tab 6
//               }
//               className="h-5 w-10 text-gray-300"
//             />
//           </TabsTrigger>
//         ))}
//       </TabsList>
//     </Tabs>
//   );
// };

import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../custom/VerticalTab";
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
import { faMessage } from "@fortawesome/free-regular-svg-icons";

export const NavBar = () => {
  const [activeTab, setActiveTab] = useState("0");
  return (
    <div className="flex flex-col p-0 shadow-none h-full gap-5 justify-start items-start bg-white">
      <div className=" pl-3 pt-3">
        <div className="bg-gray-200 p-1 rounded-sm">
          <FontAwesomeIcon icon={faPlus} className="h-6 w-10  text-black" />
        </div>
      </div>
      <Tabs defaultValue="1" className="p-0  bg-white shadow-none">
        <TabsList className="flex p-0 flex-col gap-4  space-y-2 z-0 bg-white ">
          {[1, 2, 3, 4, 5, 6].map((tab, index) => (
            <TabsTrigger
              key={index}
              value={`${tab}`}
              className={`text-primary rounded-tl-none rounded-bl-none rounded-tr-xl rounded-br-xl ${
                activeTab === `${tab}` ? "bg-gray-500" : "bg-white"
              } hover:bg-transparent shadow-none`}
            >
              <FontAwesomeIcon
                icon={
                  tab === 1
                    ? faHome
                    : tab === 2
                    ? faTableCellsLarge
                    : tab === 3
                    ? faStopwatch
                    : tab === 4
                    ? faChartSimple
                    : tab === 5
                    ? faMessage
                    : faGear
                }
                className="h-5 w-8 p-1 text-black"
                onClick={() => console.log("tab", tab)}
              />
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

// <TabsTrigger
// value="1"
// className="text-primary rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg shadow-none hover:shadow-none"
// >
// <FontAwesomeIcon
//   icon={faHome}
//   className="h-6 w-10 p-1 text-gray-300"
//   // style={{ height: "10px", width: "10px" }}
// />
// </TabsTrigger>
// <TabsTrigger
// value="2"
// className="text-primary rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg shadow-none hover:shadow-none"
// >
// <FontAwesomeIcon
//   icon={faTableCellsLarge}
//   className="h-5 w-10 p-1 text-gray-300"
//   // style={{ height: "10px", width: "10px" }}
// />
// </TabsTrigger>
// <TabsTrigger
// value="3"
// className="text-primary rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg shadow-none hover:shadow-none"
// >
// <FontAwesomeIcon
//   icon={faStopwatch}
//   className="h-5 w-10 p-1 text-gray-300"
//   // style={{ height: "10px", width: "10px" }}
// />
// </TabsTrigger>
// <TabsTrigger
// value="4"
// className="text-primary rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg shadow-none hover:shadow-none"
// >
// <FontAwesomeIcon
//   icon={faChartSimple}
//   className="h-5 w-10 text-gray-300"
//   // style={{ height: "10px", width: "10px" }}
// />
// </TabsTrigger>
// <TabsTrigger
// value="5"
// className="text-primary rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg shadow-none hover:shadow-none"
// >
// <FontAwesomeIcon
//   icon={faMessage}
//   className="h-5 w-10 text-gray-300"
//   // style={{ height: "10px", width: "10px" }}
// />
// </TabsTrigger>
// <TabsTrigger
// value="5"
// className="text-primary rounded-tl-none rounded-bl-none rounded-tr-lg rounded-br-lg shadow-none hover:shadow-none"
// >
// <FontAwesomeIcon
//   icon={faGear}
//   className="h-5 w-10 text-gray-300"
//   // style={{ height: "10px", width: "10px" }}
// />
// </TabsTrigger>
