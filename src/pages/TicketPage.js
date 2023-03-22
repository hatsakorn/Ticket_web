import React from "react";
import { Search } from "../assets/icons/Index";
import PictureProfile from "../layouts/PictureProfile";

function TicketPage() {
  return (
    <>
      <div className="w-[15%] bg-gray-200">
        <div className="mx-2">
          <div className="flex justify-between my-4">
            <div>Ticket</div>
            <button>+ Add ticket</button>
          </div>
          <div className="flex ">
            <Search />
            <input className="" placeholder="Search ticket" />
          </div>
          <div className="my-20">
            <div>All Ticket</div>
            <div>Assigned ticket</div>
          </div>
          <div>
            <div className="flex justify-between">
              <div>Open</div>
              <div>50</div>
            </div>
            <div className="flex justify-between">
              <div>Pending</div>
              <div>20</div>
            </div>
            <div className="flex justify-between">
              <div>Accepted</div>
              <div>25</div>
            </div>
            <div className="flex justify-between">
              <div>Resolved</div>
              <div>5</div>
            </div>
            <div className="flex justify-between">
              <div>Rejected</div>
              <div>0</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen">
        <div className="mx-4">
          <div>All ticket</div>
          <button>Filter ticket</button>
        </div>
        <hr />
        <div className="flex justify-between mx-4">
          <div>50 tickets</div>
          <div>1 2 3 4 ... 20</div>
        </div>
        <hr />
        <div>
          <div className="flex justify-between my-2">
            <div className="flex ml-4">
              <input className="mt-1 mr-1" type={"checkbox"} />
              <div>Requester</div>
            </div>
            <div>Title</div>
            <div>Description</div>
            <div>Assignee</div>
            <div>Status</div>
            <div className="mr-4">Last updated</div>
          </div>
          <hr />
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
        {/* <div className="flex my-5">
          <div className="flex w-[25%]">
            <input className="mt-4 ml-4 mr-2" type={"checkbox"} />
            <PictureProfile />
            <div className="text-xs mt-3 ml-2">
              <div>Look Norman</div>
              <div>look.norman@mail.com</div>
            </div>
          </div>
          <div className="flex justify-between w-full text-xs">
            <div>Website Error</div>
            <div>Website has an error on picture profile</div>
            <div>Holland</div>
            <div>Pending</div>
            <div className="mr-4">3/20/2023</div>
          </div>
        </div>
        <hr /> */}
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

export default TicketPage;
