import { useContext } from "react";
import { TicketContexts } from "../contexts/TicketContext";

export default function useTicket() {
  return useContext(TicketContexts);
}
