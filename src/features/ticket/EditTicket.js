import React from "react";
import { EditModal } from "../../components/EditModal";

function EditTicket({ choosenTicketId }) {
  return (
    <div className="flex justify-center my-4">
      <EditModal choosenTicketId={choosenTicketId} />
    </div>
  );
}

export default EditTicket;
