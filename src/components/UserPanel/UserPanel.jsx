import React, { useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { HiOutlineCamera } from "react-icons/hi2";
import {LiaUserEditSolid} from "react-icons/lia"
import EditProfile from "./EditProfile";

const UserPanel = () => {
  const { name } = useAuth();
  const [editProfileBox, setEditProfileBox] = useState(false);
  return (
    <div className="container flex flex-col my-24">
      <div className="bg-white relative grid gird-cols-2 grid-rows-6 gap-4 p-6 shadow-lg rounded-3xl">
        <div className="col-span-2 row-span-3 text-center self-end mb-4 font-semibold">
          {name}
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-semibold">مدت باقی مونده</p>
          <p className="text-xs">0 روز</p>
        </div>
        <div className="flex items-center justify-center font-medium bg-red-200 rounded-xl text-red-500">
          <p>اشتراک نداری</p>
        </div>
        <div className="flex flex-col justify-between">
          <p className="font-semibold">کد دعوت</p>
          <p className="text-xs">07e84c</p>
        </div>
        <div className="flex items-center justify-center font-medium bg-blue-200 rounded-xl text-blue-500">
          <p>کپی</p>
        </div>
        <div className="col-span-2 btn text-center text-base flex gap-2 justify-center items-center" onClick={()=> setEditProfileBox(true)}>
          <LiaUserEditSolid size={20} />
          <p>ویرایش پروفایل</p>
        </div>
        <div className="absolute top-[-50px] w-full flex flex-col gap-2 items-center">
          <img
            className="rounded-full w-32 h-32"
            src="/assets/user/img_avatar-default.png"
          />
          <HiOutlineCamera size={25} />
        </div>
      </div>
      {editProfileBox && <EditProfile setEditProfileBox={setEditProfileBox} />}
    </div>
  );
};

export default UserPanel;
