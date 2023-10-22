import React from "react";
import { useParams } from "react-router-dom";
import { useBooks } from "../Context/BookContext";
import SettingBox from "./SettingBox";

const ReadBook = ({ settingBox, setSettingBox, editRead, setEditRead }) => {
  const booksContext = useBooks();
  const { id } = useParams();
  const book = booksContext.find((b) => b.id === Number(id));

  return (
    <div
      className={`${
        editRead === "readMore"
          ? "bg-[#F5EFE1]"
          : editRead === "dark"
          ? "bg-[#121212]"
          : "bg-gray-50"
      } py-12`}
    >
      <div className="container xl:max-w-[800px] text-justify text-lg">
        <div
          className={`flex flex-col gap-4 text-xl leading-10 p-4 ${
            editRead === "dark" ? "text-[#FFFFFFDE]" : "text-stone-900"
          }`}
        >
          <h1 className="text-xl md:text-3xl leading-10 md:leading-[50px] font-bold">
            {book.reading.page1.title}
          </h1>
          <hr className="w-full border-2" />
          <p>{book.reading.page1.p1}</p>
          <p>{book.reading.page1.p2}</p>
          <p>{book.reading.page1.p3}</p>
          <p>{book.reading.page1.p4}</p>
          <strong>{book.reading.page1.strong}</strong>
          <div
            className={`w- h-full border-4 ${editRead === "default" ? "border-chekida-green" : "border-current"} ${
              editRead === "default" ? "bg-green-200" : "bg-inherit"
            } rounded-xl p-4 md:p-8 lg:p-12`}
          >
            <ul className="font-semibold  list-disc list-inside flex flex-col gap-4">
              <li>{book.reading.page1.li1}</li>
              <li>{book.reading.page1.li2}</li>
              <li>{book.reading.page1.li3}</li>
            </ul>
          </div>
        </div>
        {settingBox && (
          <SettingBox setSettingBox={setSettingBox} setEditRead={setEditRead} />
        )}
      </div>
    </div>
  );
};

export default ReadBook;
