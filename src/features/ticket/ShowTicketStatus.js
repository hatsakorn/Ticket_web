import React, { useEffect, useState } from "react";
import * as TicketApi from "../../apis/TicketApi";

function ShowTicketStatus() {
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
    <div>
      <div>
        <div className="my-20">
          <div>All Ticket</div>
          <div>Assigned ticket</div>
        </div>
        <div>
          <div className="flex justify-between hover:cursor-pointer my-2">
            <div>Open</div>
            <div>{ticketStatus[0]?.open}</div>
          </div>
          <div className="flex justify-between hover:cursor-pointer my-2">
            <div>Pending</div>
            <div>{ticketStatus[0]?.pending}</div>
          </div>
          <div className="flex justify-between hover:cursor-pointer my-2">
            <div>Accepted</div>
            <div>{ticketStatus[0]?.accepted}</div>
          </div>
          <div className="flex justify-between hover:cursor-pointer my-2">
            <div>Resolved</div>
            <div>{ticketStatus[0]?.resolved}</div>
          </div>
          <div className="flex justify-between hover:cursor-pointer my-2">
            <div>Rejected</div>
            <div>{ticketStatus[0]?.rejected}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTicketStatus;
