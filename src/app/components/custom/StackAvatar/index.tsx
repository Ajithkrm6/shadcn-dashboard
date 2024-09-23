import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import {
  faHome,
  faTableCellsLarge,
  faStopwatch,
  faChartSimple,
  faVideo,
  faGear,
  faPlus,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StackAvatar = () => {
  return (
    <div className="flex flex-row items-center">
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
      <div>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="h-5 w-5 text-gray-400"
        />
      </div>
    </div>
  );
};
