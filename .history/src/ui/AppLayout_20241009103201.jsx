import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Main = styled.main`
  padding: 4rem 4.8rem 6.4rem;
  background-color: green;
`;

const StyledAppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 2;
`;

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
};

export default AppLayout;
