import { useEffect, useState } from "react";
import AddTicket from "../features/ticket/AddTicket";
import PaginationTicket from "../features/ticket/PaginationTicket";
import SearchTicket from "../features/ticket/SearchTicket";
import ShowTicketStatus from "../features/ticket/ShowTicketStatus";
import TicketDetail from "../features/ticket/TicketDetail";
import * as TicketApi from "../apis/TicketApi";

function TicketPage() {
  const [ticketStatus, setTicketStatus] = useState([]);
  const fetchTicketStatus = async () => {
    const all = await TicketApi.countAllTicket();
    const pending = await TicketApi.countPending();
    const accepted = await TicketApi.countAccepted();
    const resolved = await TicketApi.countResolved();
    const rejected = await TicketApi.countRejected();
    setTicketStatus([
      {
        open: all.data,
        pending: pending.data,
        accepted: accepted.data,
        resolved: resolved.data,
        rejected: rejected.data,
      },
    ]);
  };
  useEffect(() => {
    fetchTicketStatus();
  }, []);
  return (
    <>
      <div className="w-[15%] bg-gray-200">
        <div className="mx-2">
          <AddTicket />
          <SearchTicket />
          <ShowTicketStatus ticketStatus={ticketStatus} />
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
