import React from "react";
import NavReadBook from "./NavReadBook";
import { Outlet } from "react-router-dom";

const ReadLayout = ({ setSettingBox, editRead }) => {
  return (
    <>
      <NavReadBook setSettingBox={setSettingBox} editRead={editRead} />
      <Outlet />
    </>
  );
};

export default ReadLayout;
