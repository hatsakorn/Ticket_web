import React, { useState } from "react";
import TicketModal from "../../components/TicketModal";

function AddTicket() {
  const [openModal, setOpenModal] = useState(false);

  const openAddTicketModal = () => {
    setOpenModal(true);
  };

  return (
    <div className="flex justify-between my-4">
      <div>Ticket</div>
      <button onClick={openAddTicketModal}>+ Add ticket</button>
      <TicketModal
        openModal={openModal}
        onClose={() => setOpenModal(false)}
      ></TicketModal>
    </div>
  );
}

export default AddTicket;
