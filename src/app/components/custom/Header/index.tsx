import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
// import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBoltLightning,
  faInbox,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <header className=" bg-white p-2 grid grid-cols-2 gap-1 content-center border-b border-gray-300">
      <div className=" p-1 gap-4 flex items-center">
        <div className="flex h-full flex-row gap-1 justify-center items-center">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Select>
            <SelectTrigger className="w-auto border-0 shadow-none appearance-none text-black">
              <SelectValue placeholder="Digitial Arts Inc" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-row gap-1 h-full items-center justify-center">
          <Avatar className="w-6 h-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <Select>
            <SelectTrigger className="w-auto border-0 text-sm shadow-none appearance-none text-black">
              <SelectValue placeholder="LA" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className=" flex  h-full justify-end items-center p-1 gap-5">
        <div className="p-2">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="h-4 w-4 text-gray-300"
            // style={{ height: "10px", width: "10px" }}
          />
        </div>
        <div className="p-2">
          <FontAwesomeIcon icon={faInbox} className="h-4 w-4 text-gray-300" />
        </div>
        <div className="p-2">
          <FontAwesomeIcon
            icon={faBoltLightning}
            className="h-4 w-4 text-gray-300"
          />
        </div>
        <Select>
          <SelectTrigger className="w-auto border-0 shadow-none text-black">
            <SelectValue placeholder="Alex" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};

// {
//   /* <Avatar className="w-8 h-8">
// <AvatarImage src="https://github.com/shadcn.png" />
// <AvatarFallback>CN</AvatarFallback>
// </Avatar> */
// }

{
  /* <Select>
<SelectTrigger className="w-[180px]">
  <SelectValue placeholder="Theme" />
</SelectTrigger>
<SelectContent>
  <SelectItem value="light">Light</SelectItem>
  <SelectItem value="dark">Dark</SelectItem>
  <SelectItem value="system">System</SelectItem>
</SelectContent>
</Select> */
}
