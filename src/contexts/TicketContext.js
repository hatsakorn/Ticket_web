import { createContext, useEffect, useState } from "react";
import * as TicketApi from "../apis/TicketApi";

export const TicketContexts = createContext();

export default function TicketContextProvider({ children }) {
  const [allTicket, setAllTicket] = useState([]);
  // const [countTicketStatus, setCountTicketStatus] = useState([]);
  const [selectedPending, setSelectedPending] = useState([]);
  const [selectedAccepted, setSelectedAccepted] = useState([]);
  const [selectedResolved, setSelectedResolved] = useState([]);
  const [selectedRejected, setSelectedRejected] = useState([]);

  const fetchTicket = async () => {
    const res = await TicketApi.getAllTicket();
    setAllTicket(res.data);
    const pendingStatus = res.data.filter((el) => el.status === "Pending");
    const acceptedStatus = res.data.filter((el) => el.status === "Accepted");
    const resolvedStatus = res.data.filter((el) => el.status === "Resolved");
    const rejectedStatus = res.data.filter((el) => el.status === "Rejected");
    setSelectedPending(pendingStatus);
    setSelectedAccepted(acceptedStatus);
    setSelectedResolved(resolvedStatus);
    setSelectedRejected(rejectedStatus);
  };

  useEffect(() => {
    fetchTicket();
  }, []);

  return (
    <TicketContexts.Provider
      value={{
        allTicket,
        fetchTicket,
        selectedPending,
        selectedAccepted,
        selectedResolved,
        selectedRejected,
      }}
    >
      {children}
    </TicketContexts.Provider>
  );
}
