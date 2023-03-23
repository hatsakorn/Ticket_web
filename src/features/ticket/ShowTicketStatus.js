import React from "react";

function ShowTicketStatus({ ticketStatus }) {
  return (
    <div>
      {ticketStatus.map((el, idx) => (
        <div key={idx}>
          <div className="my-20">
            <div>All Ticket</div>
            <div>Assigned ticket</div>
          </div>
          <div>
            <div className="flex justify-between">
              <div>Open</div>
              <div>{el.open}</div>
            </div>
            <div className="flex justify-between">
              <div>Pending</div>
              <div>{el.pending}</div>
            </div>
            <div className="flex justify-between">
              <div>Accepted</div>
              <div>{el.accepted}</div>
            </div>
            <div className="flex justify-between">
              <div>Resolved</div>
              <div>{el.resolved}</div>
            </div>
            <div className="flex justify-between">
              <div>Rejected</div>
              <div>{el.rejected}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowTicketStatus;
