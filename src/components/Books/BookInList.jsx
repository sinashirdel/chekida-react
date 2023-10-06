import React from "react";
import { Link } from "react-router-dom";
import { RiMicFill } from "react-icons/ri";

const BookInList = ({ book }) => {
  return (
    <Link to={`/bookDetail/${book.id}`}>
      <li className="flex flex-col justify-between ml-4 w-28 lg:w-36 h-64 lg:h-72">
        <img
          alt="newbook${book.id}"
          className="w-28 lg:w-36 h-auto rounded-xl shadow-md transition-all"
          src={book.img}
        />
        <p className="text-sm text-cyan-900 line-clamp-2">{book.title}</p>
        <div className="flex justify-between items-center">
          <p className="text-xs lg:text-sm opacity-50">{book.writer}</p>
          <span className="flex border lg:border-2 border-[--color-secondary] rounded-md justify-center items-center p-[2px]">
            <RiMicFill size={15} />
          </span>
        </div>
      </li>
    </Link>
  );
};

export default BookInList;
