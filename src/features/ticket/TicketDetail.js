import React, { useState } from "react";
import PictureProfile from "../../layouts/PictureProfile";

function TicketDetail() {
  const [] = useState({});

  return (
    <>
      <div>
        <div className="flex my-5">
          <div className="flex w-[25%] flex-wrap">
            <input className="mt-4 ml-4 mr-2" type={"checkbox"} />
            <PictureProfile />
            <div className="text-xs mt-3 ml-2">
              <div>Look Norman</div>
              <div className="flex justify-start">look.norman@gmail.com</div>
            </div>
          </div>
          <div className="flex w-full text-xs">
            <div className="flex justify-start flex-wrap w-[20%]">
              Refund Product
            </div>
            <div className="flex justify-start flex-wrap w-[27%]">
              Product defected
            </div>
            <div className="flex justify-start flex-wrap w-[18%]">Marcus</div>
            <div className="text-center w-[12%]">Accepted</div>
            <div className="flex justify-end w-[20%] mr-4">3/20/2023</div>
          </div>
        </div>
        <hr />
      </div>
      <div>
        <div className="flex my-5">
          <div className="flex w-[25%]">
            <input className="mt-4 ml-4 mr-2" type={"checkbox"} />
            <PictureProfile />
            <div className="text-xs mt-3 ml-2">
              <div>Look Norman</div>
              <div>look.norman@mail.com</div>
            </div>
          </div>
          <div className="flex w-full text-xs">
            <div className="flex justify-start flex-wrap w-[20%]">
              Refund Product
            </div>
            <div className="flex justify-start flex-wrap w-[27%]">
              Product defected
            </div>
            <div className="flex justify-start flex-wrap w-[18%]">Marcus</div>
            <div className="text-center w-[12%]">Accepted</div>
            <div className="flex justify-end w-[20%] mr-4">3/20/2023</div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default TicketDetail;
