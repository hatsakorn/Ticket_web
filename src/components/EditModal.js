import { useEffect, useState } from "react";
import * as TicketApi from "../apis/TicketApi";
import { Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import useTicket from "../hooks/useTicket";

export function EditModal({ choosenTicketId }) {
  const [inputText, setInputText] = useState({});
  const { allTicket } = useTicket();

  const navigate = useNavigate();

  const ticketInfo = allTicket.filter(
    (ticket) => ticket.id === choosenTicketId
  );

  const initialInput = {
    title: ticketInfo[0]?.title,
    description: ticketInfo[0]?.description,
    contactInformation: ticketInfo[0]?.contactInformation,
    status: ticketInfo[0]?.status,
  };
  useEffect(() => {
    setInputText(initialInput);
  }, [choosenTicketId]);

  const handleChangeInput = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await TicketApi.updateTicket(choosenTicketId, inputText);
      setInputText(initialInput);
      navigate(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {choosenTicketId && (
        <label
          htmlFor="my-modal-3"
          className="btn text-black bg-pink-500 border-pink-500 w-28 hover:bg-pink-800 hover:border-pink-500 hover:text-black"
        >
          Edit ticket
        </label>
      )}

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <label htmlFor="my-modal-3" className="modal cursor-pointer">
        <label className="modal-box relative bg-white" htmlFor="">
          <h3 className="text-xl font-medium text-black dark:text-white text-center">
            Edit Ticket
          </h3>
          <form onSubmit={handleSubmitForm} className="">
            <label>Title</label>
            <div className="my-1 block">
              <input
                className="bg-white border-gray-400 border-2 w-80"
                placeholder="Input ticket title"
                name="title"
                value={inputText.title}
                onChange={handleChangeInput}
              />
            </div>
            <label>Description</label>
            <div className="my-1 block">
              <input
                className="bg-white border-gray-400 border-2 w-80"
                placeholder="Input ticket Description"
                name="description"
                value={inputText.description}
                onChange={handleChangeInput}
              />
            </div>
            <label>Contact Info.</label>
            <div className="mt-1 mb-5 block">
              <input
                className="bg-white border-gray-400 border-2 w-80"
                placeholder="Input ticket Contact Information"
                name="contactInformation"
                value={inputText.contactInformation}
                onChange={handleChangeInput}
              />
            </div>
            <Select className="w-80" name="status" onChange={handleChangeInput}>
              <option hidden="hidden">Select status</option>
              <option>Pending</option>
              <option>Accepted</option>
              <option>Resolved</option>
              <option>Rejected</option>
            </Select>

            <div className="flex justify-center mt-5">
              <button className="w-52 bg-gray-500 rounded-lg" type="submit">
                <strong>Edit</strong>
              </button>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
}
