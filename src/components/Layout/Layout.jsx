import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessage/SendMessage";
import Enamad from "../Enamad/Enamad";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <SendMessage />
      <Footer />
      <Enamad />
    </>
  );
};

export default Layout;
