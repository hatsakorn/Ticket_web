import React, { useEffect } from "react";
import useTicket from "../../hooks/useTicket";

function ShowTicketStatus({ setSelectedStatus }) {
  const {
    allTicket,
    selectedPending,
    selectedAccepted,
    selectedResolved,
    selectedRejected,
  } = useTicket();

  useEffect(() => {}, []);
  return (
    <div>
      <div>
        <div className="my-20">
          <div>All Ticket</div>
          <div>Assigned ticket</div>
        </div>
        <div>
          <div
            className="flex justify-between hover:cursor-pointer my-2"
            onClick={() => setSelectedStatus("All")}
          >
            <div>All</div>
            <div>{allTicket.length}</div>
          </div>
          <div
            className="flex justify-between hover:cursor-pointer my-2"
            onClick={() => setSelectedStatus("Pending")}
          >
            <div>Pending</div>
            <div>{selectedPending.length}</div>
          </div>
          <div
            className="flex justify-between hover:cursor-pointer my-2"
            onClick={() => setSelectedStatus("Accepted")}
          >
            <div>Accepted</div>
            <div>{selectedAccepted.length}</div>
          </div>
          <div
            className="flex justify-between hover:cursor-pointer my-2"
            onClick={() => setSelectedStatus("Resolved")}
          >
            <div>Resolved</div>
            <div>{selectedResolved.length}</div>
          </div>
          <div
            className="flex justify-between hover:cursor-pointer my-2"
            onClick={() => setSelectedStatus("Rejected")}
          >
            <div>Rejected</div>
            <div>{selectedRejected.length}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowTicketStatus;
