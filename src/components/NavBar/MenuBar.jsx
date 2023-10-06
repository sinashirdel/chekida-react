import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbSmartHome, TbCategory, TbBook, TbMicrophone } from "react-icons/tb";
import { RiSearchLine } from "react-icons/ri";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";

const MenuBar = ({ open }) => {
  return (
    <>
      {/* <!-- menu bar --> */}
      <div className="w-full bg-white lg:sticky lg:top-0 lg:shadow-md lg:py-2 z-20">
        <div
          id="menuBar"
          className={`shadow-lg container xl:max-w-[1100px] flex flex-col lg:flex-row justify-between gap-8 fixed lg:static ${
            !open ? "top-[-500px]" : "top-20"
          } transition-all duration-500 bg-white lg:shadow-none text-sm p-8 lg:px-6 lg:pt-2 lg:pb-4 rounded-b-3xl lg:rounded-none font-normal z-20`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center justify-between lg:justify-start text-chekida-slate gap-8 lg:gap-5 ">
            <li className="flex gap-2 w-fit">
              <TbSmartHome size={20} className="text-chekida-slate" />
              <Link to="/">صفحه ی اصلی</Link>
            </li>
            <li className="flex gap-2 w-fit">
              <TbCategory size={20} className="text-chekida-slate" />
              <a href="#">دسته بندی ها</a>
            </li>
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
              <svg
                className="w-5 h-auto lg:w-4"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 11.25C11.7959 11.25 14.0625 9.06739 14.0625 6.375C14.0625 3.68261 11.7959 1.5 9 1.5C6.20406 1.5 3.9375 3.68261 3.9375 6.375C3.9375 9.06739 6.20406 11.25 9 11.25Z"
                  fill="#002A32"
                ></path>
                <path
                  d="M11.8425 11.7088C12.09 11.5813 12.375 11.7688 12.375 12.0463V15.6838C12.375 16.3588 11.9025 16.6888 11.3175 16.4113L9.3075 15.4588C9.135 15.3838 8.865 15.3838 8.6925 15.4588L6.6825 16.4113C6.0975 16.6813 5.625 16.3513 5.625 15.6763L5.64 12.0463C5.64 11.7688 5.9325 11.5888 6.1725 11.7088C7.02 12.1363 7.98 12.3763 9 12.3763C10.02 12.3763 10.9875 12.1363 11.8425 11.7088Z"
                  fill="#002A32"
                ></path>
              </svg>
              <a href="#">خرید اشتراک</a>
            </li>
          </ul>
          <div className="flex btn gap-2 w-full lg:w-72 group transition-all border-chekida-slate border-opacity-20 hover:border-opacity-100 text-chekida-slate justify-center items-center lg:text-xs">
            <HiMiniDevicePhoneMobile
              size={20}
              className="text-chekida-slate opacity-50 group-hover:opacity-100 transition-all"
            />
            <a
              className="opacity-50 group-hover:opacity-100 transition-all"
              href="#"
            >
              دانلود اپلیکیشن چکیدا
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
