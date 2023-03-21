import React from "react";
import ProfileImg from "../assets/profile_picture.jpg";

function PictureProfile() {
  return (
    <div>
      <div className="flex justify-center">
        <img className="rounded-full w-[50px] h-[50px]" src={ProfileImg} />
      </div>
    </div>
  );
}

export default PictureProfile;
