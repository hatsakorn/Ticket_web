import axios from "../configs/axios";

export const getAllTicket = () => axios.get("/ticket");
export const createTicket = (input) => axios.post("/ticket", input);
export const updateTicket = (id, input) => axios.patch(`/ticket/${id}`, input);
