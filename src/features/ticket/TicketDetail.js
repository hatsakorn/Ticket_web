import React, { useEffect, useState } from "react";
import useTicket from "../../hooks/useTicket";
import PictureProfile from "../../layouts/PictureProfile";

function TicketDetail({ selectedStatus, setCountStatus }) {
  const {
    allTicket,
    fetchTicket,
    trigger,
    sortingStatusASC,
    sortingStatusDESC,
  } = useTicket();

  useEffect(() => {
    fetchTicket();
  }, []);

  let choosenStatus = allTicket.filter(
    (ticket) => ticket.status === selectedStatus
  );
  if (selectedStatus === "All") {
    choosenStatus = allTicket;
  }
  setCountStatus(choosenStatus.length);

  return (
    <>
      {choosenStatus.map((el) => (
        <div key={el.id}>
          <div className="flex my-5">
            <div className="flex w-[25%] flex-wrap">
              <input className="mt-4 ml-4 mr-2" type={"checkbox"} />
              <PictureProfile
                twoLetter={el.User.email.toUpperCase().split("@", 1)}
              />
              <div className="text-xs mt-3 ml-2">
                <div>
                  {el.User.firstName} {el.User.lastName}
                </div>
                <div className="flex justify-start">{el.User.email}</div>
              </div>
            </div>
            <div className="flex w-full text-xs">
              <div className="flex justify-start flex-wrap w-[20%]">
                {el.title}
              </div>
              <div className="flex justify-start flex-wrap w-[27%]">
                {el.description}
              </div>
              <div className="flex justify-start flex-wrap w-[18%]">Marcus</div>
              <div className="text-center w-[12%]">{el.status}</div>
              <div className="flex justify-end w-[20%] mr-4">
                {el.updatedAt}
              </div>
            </div>
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default TicketDetail;
