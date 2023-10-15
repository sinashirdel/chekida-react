import React from "react";
import { Link } from "react-router-dom";

const BookInRandom = ({ book }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-x-2 bg-chekida-gray rounded-xl md:rounded-2xl p-4 md:basis-1/2">
      <img
        className="row-span-3 w-24 sm:w-28 md:w-32 h-auto rounded-xl shadow-md"
        src={book.img}
      />
      <div className="flex flex-col gap-2 row-span-2 col-span-2">
        <h5 className="text-sm md:text-base lg:text-lg font-semibold line-clamp-1">
          {book.name}
        </h5>
        <p className="text-xs lg:text-sm w-5/6">{book.title}</p>
        <p className="text-xs lg:text-sm text-gray-500">{book.writer}</p>
      </div>
      <Link className="col-span-2 self-end" to={`/bookDetail/${book.id}`}>
        <button className="w-full rounded-lg md:rounded-xl text-xs md:text-sm lg:text-base font-semibold bg-chekida-slate hover:bg-chekida-gray text-white py-2 hover:text-chekida-slate border-2 border-chekida-slate transition-all">
          مطالعه ی کتاب
        </button>
      </Link>
    </div>
  );
};

export default BookInRandom;
