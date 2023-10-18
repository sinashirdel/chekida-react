import React from "react";
import { useBooks } from "../Context/BookContext";
import {FaAngleLeft} from "react-icons/fa6"
import { Link } from "react-router-dom";

const Banner = ({ id, color, titleFree }) => {
  const books = useBooks();
  const book = books.find((b) => b.id === id);

  return (
    <div>
      {/* <!-- start free book --> */}
      <div className="container">
        <div
          className={`mx-auto ${color.bg} xl:max-w-[1100px] flex flex-col gap-y-4 sm:flex-row sm:gap-8 lg:justify-evenly  my-6 lg:mt-12 rounded-3xl py-6 md:p-12 px-8 items-center justify-center`}
        >
          <div>
            <img className="w-32 md:w-40 lg:w-48 rounded-xl" src={book.img} />
          </div>

          <div className="flex flex-col lg:items-start gap-y-4 lg:justify-around lg:h-56">
            <h1
              className={`${color.textOne} text-center text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-black`}
            >
              {titleFree ? "خلاصه کتاب رایگان هفته" : "به پیشنهاد چکیدا بخون"}
            </h1>
            <p
              className={`${color.textOne} text-center mt-2 text-sm md:text-lg md:font-semibold lg:text-2xl`}
            >
              {book.title}
            </p>
            <Link
              to={`/bookDetail/${id}`}
              className={`group cursor-pointer ${color.hover} w-full border-[3px] transition-all ${color.border} h-10 md:h-14 rounded-full flex flex-row justify-between`}
            >
              <span
                className={`flex flex-row justify-center items-center text-sm md:text-lg md:font-medium ${color.bgTwo} w-5/6 ${color.textTwo} rounded-full`}
              >
                رایگان بخون یا گوش بده
              </span>

              <div className="m-auto">
                <FaAngleLeft
                  className={`${color.textOne} ${color.hoverGroup}  text-[15px] md:text-[18px] lg:text-[23px]`}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- finish free book --> */}
    </div>
  );
};

export default Banner;
