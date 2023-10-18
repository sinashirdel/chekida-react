import React, { useEffect, useState } from "react";
import { useBooks } from "../Context/BookContext";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const SearchBox = ({ setSearchBox, setOpen }) => {
  const books = useBooks();
  const [input, setInput] = useState("");
  const [search, setSearch] = useState(null);

  useEffect(() => {
    const searchBooks = books.filter(
      (b) => b.name.includes(input) || b.writer.includes(input)
    );
    console.log(searchBooks);
    if (input && input.length >= 1 && input != " ") setSearch(searchBooks);
    else if (input.length === 0) setSearch(null);
  }, [input]);
  return (
    <div className="backdrop">
      <div className="container my-32">
        <div className="bg-white grid grid-cols-2 grid-rows-3 p-3 gap-3 rounded-xl">
          <h2 className="col-span-1 self-center text-sm font-semibold">
            جست و جو در چکیدا
          </h2>
          <IoClose
            onClick={() => setSearchBox(false)}
            className="col-span-1 place-self-end self-center text-gray-500"
            size={20}
          />
          <form
            className={`relative col-span-2 row-span-2 border-2 border-gray-200 p-2 ${
              search ? "rounded-t-xl" : "rounded-lg"
            }`}
          >
            <input
              className="text-xs w-full outline-none p-2"
              placeholder="اسم کتاب، نویسنده یا موضوع رو اینجا جست‌وجو کن"
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            {search && (
              <div className="absolute z-50 bg-white flex flex-col text-sm gap-2 w-full h-auto top-[53px] right-0 border-2 border-gray-200 p-3 rounded-b-lg">
                {search &&
                  search.map((b) => {
                    if (b.name.includes(input))
                      return (
                        <Link
                          className="hover:text-chekida-green"
                          onClick={() => {
                            setInput("");
                            setSearchBox(false);
                            setOpen(false);
                          }}
                          to={`/bookDetail/${b.id}`}
                        >
                          {b.name}
                        </Link>
                      );
                    else if (b.writer.includes(input))
                      return (
                        <Link
                          className="hover:text-chekida-green"
                          onClick={() => {
                            setInput("");
                            setSearchBox(false);
                            setOpen(false);
                          }}
                          to={`/bookDetail/${b.id}`}
                        >
                          {b.writer}
                        </Link>
                      );
                  })}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
