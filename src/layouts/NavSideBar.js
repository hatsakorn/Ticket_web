import React from "react";
import { Help, Home, Setting, Ticket } from "../assets/icons/Index";
import PictureProfile from "./PictureProfile";
import ProfileName from "./ProfileName";

function NavSideBar() {
  return (
    <div className="sticky bg-pink-500 w-16 h-screen ">
      <div className="flex-col h-4/6">
        <div className="flex-col text-center py-4 ">
          <div className="bg-pink-600">
            <div className=" flex justify-center ">
              <Home />
            </div>
            Home
          </div>
        </div>
        <div className="flex-col text-center bg-pink-700">
          <div className=" flex justify-center">
            <Ticket />
          </div>
          Ticket
        </div>
      </div>
      <div className="flex-col text-center">
        <div>
          <div className=" flex justify-center">
            <Setting />
          </div>
          Setting
        </div>
        <div className="py-2">
          <div className=" flex justify-center">
            <Help />
          </div>
          Help
        </div>
        <div>
          <PictureProfile />
        </div>
        <div>
          <ProfileName />
        </div>
      </div>
    </div>
  );
}

export default NavSideBar;
