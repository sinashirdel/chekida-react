import React from "react";
import Category from "../Category/Category";
import { Link } from "react-router-dom";
import {HiOutlineChevronLeft} from "react-icons/hi"

const MyLibrary = ({ favourites }) => {
  return (
    <div className="mb-36">
      <div>
        <h2 className="container py-20 px-8 text-4xl font-bold text-center leading-normal">
          کتابخونه ی من
        </h2>
      </div>
      <div>
        {favourites.length ? (
          favourites.map((b) => (
            <div className="odd:bg-gray-100 even:bg-gray-50 xl:max-w-[1100px] container md:rounded-xl my-[2px] hover:ring-1 ring-gray-400 transition-all">
              <Category book={b} />
            </div>
          ))
        ) : (
          <div className="container xl:max-w-[1100px] flex flex-col gap-2 items-center">
            <p className="font-semibold text-gray-600 ">
              هنوز کتابی را به کتابخونه اضافه نکردی!
            </p>
            <div className="flex items-center sm:gap-2 font-medium text-chekida-green">
              <Link to="/">بازگشت به صفحه ی اصلی</Link>
              <HiOutlineChevronLeft size={20} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLibrary;
