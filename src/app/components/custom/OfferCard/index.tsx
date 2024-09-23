import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StackAvatar } from "../StackAvatar";

export const OfferCard = () => {
  return (
    <Card className="rounded-md">
      <div className="grid grid-rows-5 ">
        <div className="grid grid-cols-2 p-3">
          <div>
            <p style={{ fontSize: "18px" }}>New Comers</p>
            <p style={{ fontSize: "14px" }}>in this month</p>
          </div>

          <div className="flex justify-end items-center p-3">
            <p className=" text-lg text-bold text-gray-600">...</p>
          </div>
        </div>

        {/* 2 */}
        <div className="grid grid-cols-2 pl-4 pr-4">
          <div>
            <p style={{ fontSize: "18px" }}>Offer sent</p>
            <p style={{ fontSize: "14px" }}>
              Number of offers sent to candidates
            </p>
          </div>
          <div className="flex justify-end items-center p-3">
            <StackAvatar />
          </div>
        </div>

        {/* 3 */}

        <div className="grid grid-cols-2 pl-4 pr-4">
          <div>
            <p style={{ fontSize: "18px" }}>Offer sent</p>
            <p style={{ fontSize: "14px" }}>
              Number of offers sent to candidates
            </p>
          </div>
          <div className="flex justify-end items-center p-3">
            <StackAvatar />
          </div>
        </div>
        {/* 4 */}

        <div className="grid grid-cols-2 pl-4 pr-4">
          <div>
            <p style={{ fontSize: "18px" }}>Offer sent</p>
            <p style={{ fontSize: "14px" }}>
              Number of offers sent to candidates
            </p>
          </div>
          <div className="flex justify-end items-center p-3">
            <StackAvatar />
          </div>
        </div>

        {/* 5 */}
        <div className="grid grid-cols-2 pl-4 pr-4 pb-2">
          <div className="p-0">
            <p style={{ fontSize: "18px" }}>Offer sent</p>
            <p style={{ fontSize: "14px" }}>
              Number of offers sent to candidates
            </p>
          </div>
          <div className="flex justify-end items-center p-3">
            <StackAvatar />
          </div>
        </div>
        {/* 6 */}
        {/* <div className="grid grid-cols-2">
          <div>
            <p>Offer sent</p>
            <p>Number of offers sent to candidates</p>
          </div>
          <div>
            <StackAvatar />
          </div>
        </div> */}
      </div>
    </Card>
  );
};
