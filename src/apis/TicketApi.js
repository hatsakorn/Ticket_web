import axios from "../configs/axios";

//Main feature
export const getAllTicket = () => axios.get("/ticket");
export const createTicket = (input) => axios.post("/ticket", input);
export const updateTicket = (id, input) => axios.patch(`/ticket/${id}`, input);

// Count Status of Ticket
export const countAllTicket = () => axios.get("/ticket/count");
export const countPending = () => axios.get("/ticket/pending");
export const countAccepted = () => axios.get("/ticket/accepted");
export const countResolved = () => axios.get("/ticket/resolved");
export const countRejected = () => axios.get("/ticket/rejected");
