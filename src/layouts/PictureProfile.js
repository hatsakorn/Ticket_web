import React from "react";
import useTicket from "../hooks/useTicket";

function PictureProfile({ twoLetter }) {
  return (
    <div>
      <div className="flex">
        <div className="rounded-full w-[50px] h-[50px] bg-gray-400">
          <p className="flex justify-center mt-3">{twoLetter}</p>
        </div>
      </div>
    </div>
  );
}

export default PictureProfile;
