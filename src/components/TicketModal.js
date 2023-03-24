import { useState } from "react";
import { Button, Modal, TextInput } from "flowbite-react";
import * as TicketApi from "../apis/TicketApi";
const initialInput = {
  title: "",
  description: "",
  contact: "",
  status: "Pending",
};

function TicketModal({ openModal, onClose }) {
  const [input, setInput] = useState(initialInput);

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await TicketApi.createTicket(input);
      setInput(initialInput);
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal show={openModal} size="md" popup={true} onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <form onSubmit={handleSubmitForm}>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white text-center">
              New Ticket
            </h3>
            <div>
              <div className="mb-2 block"></div>
              <TextInput
                id="title"
                placeholder="Input ticket title"
                name="title"
                value={input.title}
                required={true}
                onChange={handleChangeInput}
              />
            </div>
            {/* <div>
              <div className="mb-2 block"></div>
              <TextInput
                placeholder="Input ticket description"
                name="description"
                value={input.description}
                required={true}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <div className="mb-2 block"></div>
              <TextInput
                placeholder="Input your contant Information (emailorphone)"
                name="contact"
                value={input.contact}
                required={true}
                onChange={handleChangeInput}
              />
            </div> */}
            <div className="flex justify-center ">
              <Button className="bg-pink-500 text-black" type="submit">
                Add Ticket
              </Button>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default TicketModal;
