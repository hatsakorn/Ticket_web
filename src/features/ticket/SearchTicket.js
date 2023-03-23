import React from "react";
import { Search } from "../../assets/icons/Index";

function SearchTicket() {
  return (
    <div className="flex ">
      <Search />
      <input className="" placeholder="Search ticket" />
    </div>
  );
}

export default SearchTicket;
