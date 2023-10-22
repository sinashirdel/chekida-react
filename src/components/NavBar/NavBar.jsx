import React, { useState } from "react";
import NavUp from "./NavUp";
import MenuBar from "./MenuBar";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div style={{display : "unset"}}>
      <NavUp handleOpen={handleOpen} setOpen={setOpen} open={open} />
      <MenuBar open={open} setOpen={setOpen} />
    </div>
  );
};

export default NavBar;
