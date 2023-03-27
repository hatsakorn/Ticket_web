import { useState } from "react";
import * as TicketApi from "../apis/TicketApi";

const initialInput = {
  title: "",
  description: "",
  contactInformation: "",
  status: "Pending",
};

export function Modal() {
  const [inputText, setInputText] = useState(initialInput);

  const handleChangeInput = (e) => {
    setInputText({ ...inputText, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      await TicketApi.createTicket(inputText);
      setInputText(initialInput);
      // setInput(initialInput);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor="my-modal-4"
        className="btn text-black bg-pink-500 border-pink-500 w-28 hover:bg-pink-800 hover:border-pink-500 hover:text-black"
      >
        + Add ticket
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative bg-white" htmlFor="">
          <h3 className="text-xl font-medium text-black dark:text-white text-center">
            New Ticket
          </h3>
          <form onSubmit={handleSubmitForm} className="">
            <label>Title</label>
            <div className="my-1 block">
              <input
                className="bg-white border-gray-400 border-2 w-80"
                placeholder="Input ticket title"
                name="title"
                value={inputText.title}
                required={true}
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
                required={true}
                onChange={handleChangeInput}
              />
            </div>
            <label>Contact Info.</label>
            <div className="my-1 block">
              <input
                className="bg-white border-gray-400 border-2 w-80"
                placeholder="Input ticket Contact Information"
                name="contactInformation"
                value={inputText.contactInformation}
                required={true}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex justify-center mt-5">
              <button className="w-52 bg-gray-500 rounded-lg" type="submit">
                <strong>Submit</strong>
              </button>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
}
