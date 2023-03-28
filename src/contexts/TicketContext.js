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
  const [trigger, setTrigger] = useState(false);

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

    res.data.sort((date1, date2) =>
      date2.updatedAt.localeCompare(date1.updatedAt)
    );
    res.data.sort((data1, data2) => data1.status.localeCompare(data2.status));
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
        trigger,
        setTrigger,
      }}
    >
      {children}
    </TicketContexts.Provider>
  );
}
