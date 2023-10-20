import React, { useState } from "react";
import { useAuth } from "../Context/AuthProvider";
import { HiOutlineCamera } from "react-icons/hi2";
import { LiaUserEditSolid } from "react-icons/lia";
import EditProfile from "./EditProfile";
import { PiMedal } from "react-icons/pi";
import { TbBook, TbMessage2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const UserPanel = () => {
  const { name } = useAuth();
  const [editProfileBox, setEditProfileBox] = useState(false);
  return (
    <div className="container xl:max-w-[1100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-24 w-full">
      <div className="bg-white relative grid gird-cols-2 grid-rows-6 gap-4 p-6 shadow-lg rounded-3xl md:rounded-2xl">
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
        <div
          className="col-span-2 btn text-center text-base flex gap-2 justify-center items-center"
          onClick={() => setEditProfileBox(true)}
        >
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
      <div className="bg-chekida-green flex justify-center items-center gap-2 lg:gap-4 p-6 md:p-8 md:order-3 md:col-span-2 lg:col-span-1 rounded-xl lg:flex-col shadow-lg md:rounded-2xl">
        <TbBook className="text-2xl lg:text-[70px]" />
        <Link to="/myLibrary" className="text-lg font-semibold lg:text-2xl">
          کتابخونه ی من
        </Link>
        <Link to="/myLibrary" className="hidden lg:block btn border-chekida-slate hover:bg-white transition-all">
          رفتن به کتابخونه
        </Link>
      </div>
      <div className="flex flex-col gap-2 justify-between">
        <div className="flex gap-2 justify-center items-center font-semibold bg-white p-4 md:p-10 shadow-lg rounded-xl">
          <PiMedal size={25} />
          <p>خرید اشتراک</p>
        </div>
        <div className="flex gap-2 justify-center items-center font-semibold bg-white p-4 md:p-10 shadow-lg rounded-xl">
          <PiMedal size={25} />
          <p>خرید اشتراک</p>
        </div>
        <div className="flex gap-2 justify-center items-center font-semibold bg-white p-4 md:p-10 shadow-lg rounded-xl">
          <TbMessage2 size={25} />
          <p>تیکت به پشتیبانی</p>
        </div>
        <div className="flex gap-2 justify-center items-center font-semibold bg-white p-4 md:p-10 shadow-lg rounded-xl">
          <PiMedal size={25} />
          <p>خرید اشتراک</p>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
