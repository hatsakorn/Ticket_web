import { createContext, useEffect, useState } from "react";
import * as TicketApi from "../apis/TicketApi";

export const TicketContexts = createContext();

export default function TicketContextProvider({ children }) {
  const [allTicket, setAllTicket] = useState([]);

  const fetchTicket = async () => {
    const res = await TicketApi.getAllTicket();
    setAllTicket(res.data);
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  return (
    <TicketContexts.Provider value={{ allTicket, fetchTicket }}>
      {children}
    </TicketContexts.Provider>
  );
}
