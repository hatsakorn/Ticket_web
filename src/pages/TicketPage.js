import { useEffect, useState } from "react";
import AddTicket from "../features/ticket/AddTicket";
import ShowTicketStatus from "../features/ticket/ShowTicketStatus";
import PaginationTicket from "../features/ticket/PaginationTicket";
import TicketDetail from "../features/ticket/TicketDetail";
import useTicket from "../hooks/useTicket";
import EditTicket from "../features/ticket/EditTicket";

function TicketPage() {
  const { allTicket, fetchTicket } = useTicket();

  const [selectedStatus, setSelectedStatus] = useState("All");
  const [countStatus, setCountStatus] = useState(allTicket.length);
  const [allChecked, setAllChecked] = useState(null);
  const [choosenTicketId, setChoosenTicketId] = useState(null);

  useEffect(() => {
    fetchTicket();
  }, [countStatus]);

  const handleChecked = (e) => {
    setAllChecked(e.target.checked);
  };

  return (
    <>
      <div className="w-[15%] bg-gray-200 text-black">
        <div className="mx-2">
          <AddTicket />
          <EditTicket choosenTicketId={choosenTicketId} />
          <ShowTicketStatus setSelectedStatus={setSelectedStatus} />
        </div>
      </div>
      <div className="w-screen bg-white text-black">
        <div className="mx-4">
          <div>tickets</div>
        </div>
        <hr />
        <div className="flex justify-between mx-4">
          <div> {countStatus} tickets</div>
          <PaginationTicket />
        </div>
        <hr />
        <div>
          <div className="flex justify-between my-2">
            <div className="flex ml-4">
              <input
                className="mt-1 mr-1"
                type={"checkbox"}
                onClick={handleChecked}
              />
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
        <TicketDetail
          selectedStatus={selectedStatus}
          setCountStatus={setCountStatus}
          allChecked={allChecked}
          setChoosenTicketId={setChoosenTicketId}
        />
      </div>
    </>
  );
}

export default TicketPage;
