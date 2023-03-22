import React from "react";
import { Outlet } from "react-router-dom";
import NavSideBar from "./NavSideBar";

function AuthLayout() {
  return (
    <div className="flex">
      <NavSideBar />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
