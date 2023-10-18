import React, { useState } from "react";
import NavUp from "./NavUp";
import MenuBar from "./MenuBar";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open)
  }

    console.log(open);
  return (
    <div style={{display : "unset"}}>
      <NavUp handleOpen={handleOpen} setOpen={setOpen} open={open} />
      <MenuBar open={open} setOpen={setOpen} />
      {/* {open ? (
        <div className="w-screen h-screen z-10 absolute top-0 bg-black opacity-50"></div>
      ) : null} */}
    </div>
  );
};

export default NavBar;
