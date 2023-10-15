import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { PiEyeglassesFill } from "react-icons/pi";
import {TiInputChecked} from "react-icons/ti"
import {FaFaceSmileBeam} from "react-icons/fa6"
import { BiSolidDollarCircle } from "react-icons/bi";

const CategoriesNames = () => {
  return (
    <div>
      <div>
        <h2 className="container py-20 px-8 text-4xl font-bold text-center">
          دسته بندی ها
        </h2>
      </div>
      <div className="[&>*:nth-child(odd)]:bg-gray-100 [&>*:nth-child(even)]:bg-gray-50 xl:max-w-[1100px] md:container">
        <div className="container md:rounded-xl my-[2px] hover:ring-1 ring-gray-400 transition-all">
          <Link
            to="/categories?category=philosophy"
            className="container flex py-4 px-2 items-center justify-between gap-4 md:gap-8"
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 p-3 lg:p-4 rounded-xl bg-chekida-green flex justify-center items-center shadow-xl">
              <span>
                <PiEyeglassesFill className="text-[25px] md:text-[30px] lg:text-[40px]" />
              </span>
            </div>

            <h4 className="text-sm w-full md:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 line-clamp-1 text-right">
              فلسفی
            </h4>

            <div>
              <HiOutlineChevronLeft className="text-[15px] md:text-[20px] lg:text-[25px]" />
            </div>
          </Link>
        </div>
        <div className="container md:rounded-xl my-[2px] hover:ring-1 ring-gray-400 transition-all">
          <Link
            to="/categories?category=success"
            className="container flex py-4 px-2 items-center justify-between gap-4 md:gap-8"
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 p-3 lg:p-4 rounded-xl bg-chekida-green flex justify-center items-center shadow-xl">
              <span>
                <TiInputChecked className="text-[25px] md:text-[30px] lg:text-[40px]" />
              </span>
            </div>

            <h4 className="text-sm w-full md:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 line-clamp-1 text-right">
              موفقیت و توسعه فردی
            </h4>

            <div>
              <HiOutlineChevronLeft className="text-[15px] md:text-[20px] lg:text-[25px]" />
            </div>
          </Link>
        </div>
        <div className="container md:rounded-xl my-[2px] hover:ring-1 ring-gray-400 transition-all">
          <Link
            to="/categories?category=psychology"
            className="container flex py-4 px-2 items-center justify-between gap-4 md:gap-8"
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 p-3 lg:p-4 rounded-xl bg-chekida-green flex justify-center items-center shadow-xl">
              <span>
                <FaFaceSmileBeam className="text-[20px] md:text-[25px] lg:text-[30px]" />
              </span>
            </div>

            <h4 className="text-sm w-full md:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 line-clamp-1 text-right">
              روانشناسی
            </h4>

            <div>
              <HiOutlineChevronLeft className="text-[15px] md:text-[20px] lg:text-[25px]" />
            </div>
          </Link>
        </div>
        <div className="container md:rounded-xl my-[2px] hover:ring-1 ring-gray-400 transition-all">
          <Link
            to="/categories?category=business"
            className="container flex py-4 px-2 items-center justify-between gap-4 md:gap-8"
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 p-3 lg:p-4 rounded-xl bg-chekida-green flex justify-center items-center shadow-xl">
              <span>
                <BiSolidDollarCircle className="text-[20px] md:text-[25px] lg:text-[35px]" />
              </span>
            </div>

            <h4 className="text-sm w-full md:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 line-clamp-1 text-right">
              مالی و اقتصادی
            </h4>

            <div>
              <HiOutlineChevronLeft className="text-[15px] md:text-[20px] lg:text-[25px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesNames;
