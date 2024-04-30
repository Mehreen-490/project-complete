// WithNav.js (Stand-alone Functional Component)
import React from "react";
import NavBar from "./components/navBar";
import { Outlet } from "react-router";
// eslint-disable-next-line
export default () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
