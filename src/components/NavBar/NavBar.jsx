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
    <div>
      <NavUp handleOpen={handleOpen} setOpen={setOpen}  open={open}/>
      <MenuBar open={ open} />
    </div>
  );
};

export default NavBar;
