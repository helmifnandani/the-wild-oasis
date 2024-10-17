import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <main></main>
      <Outlet />
    </div>
  );
};

export default AppLayout;
