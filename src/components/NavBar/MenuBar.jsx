import React from "react";
import { Link } from "react-router-dom";
import { TbSmartHome, TbCategory, TbBook, TbMicrophone } from "react-icons/tb";
import { RiSearchLine } from "react-icons/ri";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import {PiMedal} from "react-icons/pi"

const MenuBar = ({ open }) => {
  return (
    <div
      id="menuBarrr"
      className="w-full bg-white lg:sticky lg:top-0 lg:shadow-sm lg:py-2 z-30"
    >
      <div
        id="menuBar"
        className={`shadow-lg container xl:max-w-[1100px] flex flex-col lg:flex-row justify-between gap-8 fixed lg:sticky ${
          !open ? "top-[-500px]" : "top-20"
        } transition-all duration-500 bg-white lg:shadow-none text-sm p-8 lg:px-6 lg:pt-2 lg:pb-4 rounded-b-3xl lg:rounded-none font-normal z-20`}
      >
        <ul className="flex flex-col lg:flex-row lg:items-center justify-between lg:justify-start text-chekida-slate gap-8 lg:gap-5 ">
          <Link to="/">
            <li className="flex gap-2 w-fit">
              <TbSmartHome size={20} className="text-chekida-slate" />
              <p>صفحه ی اصلی</p>
            </li>{" "}
          </Link>
          <Link to="/CategoriesNames">
            <li className="flex gap-2 w-fit">
              <TbCategory size={20} className="text-chekida-slate" />
              <p>دسته بندی ها</p>
            </li>
          </Link>

          <li className="flex gap-2 w-fit">
            <TbBook size={20} className="text-chekida-slate" />
            <a href="#">کتابخونه ی من</a>
          </li>
          <li className="flex gap-2 w-fit">
            <TbMicrophone size={20} className="text-chekida-slate" />
            <a href="#">خلاصه های صوتی</a>
          </li>
          <li className="flex gap-2 w-fit lg:hidden">
            <RiSearchLine size={20} className="text-chekida-slate" />
            <a href="#">جست و جو</a>
          </li>
          <li className="flex gap-2 w-fit lg:hidden">
            <PiMedal size={20} className="text-chekida-slate" />
            <a href="#">خرید اشتراک</a>
          </li>
        </ul>
        <div className="flex btn gap-2 w-full lg:w-72 group transition-all border-chekida-slate border-opacity-20 hover:border-opacity-100 text-chekida-slate justify-center items-center lg:text-xs">
          <HiMiniDevicePhoneMobile
            size={20}
            className="text-chekida-slate opacity-50 group-hover:opacity-100 transition-all"
          />
          <a
            className="opacity-50 group-hover:opacity-100 transition-all md:font-semibold"
            href="#"
          >
            دانلود اپلیکیشن چکیدا
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
