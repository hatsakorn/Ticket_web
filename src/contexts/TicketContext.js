import { createContext, useEffect, useState } from "react";
import * as TicketApi from "../apis/TicketApi";

export const TicketContext = createContext();

function TicketContexts({ children }) {
  const [allTicket, setAllTicket] = useState([]);

  const fetchTicket = async () => {
    const res = await TicketApi.getAllTicket();
    setAllTicket(res.data);
  };
  useEffect(() => {
    fetchTicket();
  }, []);

  return (
    <TicketContext.Provider value={allTicket}>
      {children}
    </TicketContext.Provider>
  );
}

export default TicketContexts;
