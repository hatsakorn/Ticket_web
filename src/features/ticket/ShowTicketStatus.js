import React from "react";

function ShowTicketStatus() {
  return (
    <div>
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
  );
}

export default ShowTicketStatus;
