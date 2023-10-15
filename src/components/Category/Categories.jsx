import React, { useEffect, useState } from "react";
import { useBooks } from "../Context/BookContext";
import Category from "./Category";
import { useSearchParams } from "react-router-dom";

const Categories = () => {
  const [searchParams] = useSearchParams();
  const categoryParams = searchParams.get("category");

  const bookList = useBooks();

  const [books, setBooks] = useState([]);
  const [cateName, setCateName] = useState("");

  useEffect(() => {
    if (categoryParams === "all") {
      setBooks(bookList);
      setCateName("جدید");
    } else {
      const booksCate = bookList.filter(
        (b) => b.categoryParams === categoryParams
      );
      const cateNameFind = bookList.find(
        (b) => b.categoryParams === categoryParams
      );
      setBooks(booksCate);
      setCateName(cateNameFind.category);
    }
  }, []);

  return (
    <div>
      <div>
        <h2 className="container py-20 px-8 text-4xl font-bold text-center leading-normal">
          خلاصه کتاب های {cateName}
        </h2>
      </div>
      <div>
        {books.map((b) => (
          <div className="odd:bg-gray-100 even:bg-gray-50 xl:max-w-[1100px] container md:rounded-xl my-[2px] hover:ring-1 ring-gray-400 transition-all">
            <Category book={b} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
