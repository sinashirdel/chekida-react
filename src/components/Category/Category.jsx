import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
const Category = ({ book }) => {
  
  return (
    <Link
      to={`/bookDetail/${book.id}`}
      className="container flex py-4 px-2 items-center justify-between gap-4"
    >
      <img
        className="w-14 md:w-20 lg:w-24 h-auto rounded-lg mr-3 shadow-lg"
        src={book.img}
      />
      <div className="flex flex-col gap-1 md:gap-2 w-2/3 md:w-5/6 md:mr-4">
        <h4 className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-gray-900 line-clamp-1">
          خلاصه کتاب {book.name}
        </h4>
        <p className="text-xs md:text-sm lg:text-base font-semibold text-gray-500 ">
          {book.title}
        </p>
        <p className="text-xs md:text-sm font-medium text-gray-400 mt-2 md:mt-0">
          {book.writer}
        </p>
      </div>
      <div className="flex items-center sm:gap-2 text-chekida-green">
        <p className="hidden sm:block text-xs md:text-base lg:text-lg w-max font-medium">
          توضیحات بیشتر
        </p>
        <span>
          <HiOutlineChevronLeft className="text-xs md:text-[15px] lg:text-[20px]" />
        </span>
      </div>
    </Link>
  );
};

export default Category;
