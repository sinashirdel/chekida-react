import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import SendMessage from "../SendMessage/SendMessage";
import Enamad from "../Enamad/Enamad";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <Outlet />
      <SendMessage />
      <div className="mt-auto">
        <Footer />
        <Enamad />
      </div>
    </div>
  );
};

export default Layout;
