import React from "react";
import Banner from "../Banner/Banner";
import BooksView from "../Books/BooksView";
import AboutSite from "../About/AboutSite";
import Tags from "../Category/Tags";
import RandomBooks from "../Books/RandomBooks";
import { useBooks } from "../Context/BookContext";

const Landing = () => {
  const books = useBooks();
  const allBooks = books.slice().reverse(books);
  const successBooks = books
    .slice()
    .reverse(books)
    .filter((b) => b.categoryParams === "success");
  const psychologyBooks = books
    .slice()
    .reverse(books)
    .filter((b) => b.categoryParams === "psychology");

  console.log(successBooks);
  return (
    <div>
      <Banner
        id={36}
        color={{
          bg: "bg-[#A5D7E8]",
          bgTwo: "bg-[#182D56]",
          textOne: "text-[#182D56]",
          textTwo: "text-[#A5D7E8]",
          hover: "hover:bg-[#182D56]",
          hoverGroup: "group-hover:text-[#A5D7E8]",
          border: "border-[#182D56]",
        }}
        titleFree={true}
      />
      <Tags />
      <BooksView
        navSlide={1}
        books={allBooks}
        title={"جدیدترین خلاصه کتاب‌ها"}
        params={"all"}
      />
      <BooksView
        navSlide={2}
        books={successBooks}
        title={"منتخب توسعه فردی"}
        params={"success"}
      />
      <Banner
        id={33}
        color={{
          bg: "bg-[#497A5D]",
          bgTwo: "bg-[#FED334]",
          textOne: "text-[#FED334]",
          textTwo: "text-[#497A5D]",
          hover: "hover:bg-[#FED334]",
          hoverGroup: "group-hover:text-[#497A5D]",
          border: "border-[#FED334]",
        }}
        titleFree={false}
      />
      <BooksView
        navSlide={3}
        books={psychologyBooks}
        title={"منتخب روانشناسی"}
        params={"psychology"}
      />

      <RandomBooks />
      <AboutSite />
    </div>
  );
};

export default Landing;
