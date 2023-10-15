import React from "react";
import { useBooks } from "../Context/BookContext";
import BookInRandom from "./BookInRandom";
import {chooseRandom} from "../../func/randomPick"

const RandomBooks = () => {
  const booksList = useBooks();

 
const books = chooseRandom(booksList , 4)
console.log(books)
  return (
    <div className="xl:max-w-[1100px] container flex flex-col gap-2">
      <h4 className="text-xl md:text-2xl font-bold">کتاب های شانسی</h4>
      <p className="text-sm md:text-base font-medium text-gray-400">
        بعضی‌وقتا شانس پیشنهادات بهتری داره!
      </p>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4 mt-6">
        {books.map((book) => (
          <BookInRandom key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default RandomBooks;
