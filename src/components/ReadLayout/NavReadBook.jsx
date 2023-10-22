import React from "react";
import { TbSettings, TbSmartHome } from "react-icons/tb";
import { useBooks } from "../Context/BookContext";
import { Link, useParams } from "react-router-dom";

const NavReadBook = ({ setSettingBox, editRead }) => {
  const booksContext = useBooks();
  const { id } = useParams();
  const book = booksContext.find((b) => b.id === Number(id));
  return (
    <div
      className={`${
        editRead === "readMore"
          ? "bg-[#F5EFE1]"
          : editRead === "dark"
          ? "bg-[#1b1b1b]"
          : "bg-gray-50"
      } w-full sticky top-0 shadow-md p-4 ${
        editRead === "dark" ? "text-[#FFFFFFDE]" : "text-stone-900"
      }`}
    >
      <div className=" flex justify-between items-center container xl:max-w-[1100px]">
        <p className="font-medium">
          خلاصه کتاب <span>{book.name}</span>
        </p>
        <div className="flex gap-4">
          <div onClick={() => setSettingBox(true)}>
            <TbSettings className="text-[25px] md:text-[30px]" />
          </div>
          <Link to={`/bookDetail/${id}`}>
            <TbSmartHome className="text-[25px] md:text-[30px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavReadBook;
