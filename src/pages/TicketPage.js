import React from "react";
import AddTicket from "../features/ticket/AddTicket";
import PaginationTicket from "../features/ticket/PaginationTicket";
import SearchTicket from "../features/ticket/SearchTicket";
import ShowTicketStatus from "../features/ticket/ShowTicketStatus";
import TicketDetail from "../features/ticket/TicketDetail";

function TicketPage() {
  return (
    <>
      <div className="w-[15%] bg-gray-200">
        <div className="mx-2">
          <AddTicket />
          <SearchTicket />
          <ShowTicketStatus />
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
          <PaginationTicket />
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
        </div>
        <TicketDetail />
      </div>
    </>
  );
}

export default TicketPage;
