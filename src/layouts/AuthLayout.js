import React from "react";
import { Outlet } from "react-router-dom";
import NavSideBar from "./NavSideBar";

function AuthLayout() {
  return (
    <div>
      <NavSideBar />
      <Outlet />
    </div>
  );
}

export default AuthLayout;
