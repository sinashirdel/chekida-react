import React from "react";
import { useBooks } from "../Context/BookContext";
import BookInList from "./BookInList";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const SimilarBooks = ({ navSlide, categorySimilar , id }) => {
  const booksList = useBooks();
  const booksSimilar = booksList.filter(
    (b) => b.categoryParams === categorySimilar & b.id !== id
  );

  const breakpoint = {
    320: {
      slidesPerView: 2.7,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 3.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    780: {
      slidesPerView: 3.4,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3.6,
      spaceBetween: 10,
    },
    1210: {
      slidesPerView: 4.3,
      spaceBetween: 10,
    },
  };

  return (
    <div className="mx-auto w-full container my-12 flex flex-col">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">کتاب های مشابه</h1>
      </div>

      <div className="py-4">
        <ul
          className="relative
          "
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={1}
            modules={[Navigation]}
            // navigation={true}
            navigation={{
              nextEl: `.review-swiper-button-next${navSlide}`,
              prevEl: `.review-swiper-button-prev${navSlide}`,
            }}
            breakpoints={breakpoint}
          >
            {booksSimilar.map((book) => (
              <SwiperSlide key={book.id}>
                <BookInList book={book} />
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            className={`review-swiper-button-next${navSlide} hidden md:block z-30 absolute bottom-36 left-0 py-3 px-1 rounded-br-xl rounded-tr-xl bg-white opacity-70 shadow-xl`}
          >
            <FaAngleLeft size={30} className="text-chekida-slate" />
          </button>
          <button
            className={`review-swiper-button-prev${navSlide} hidden md:block z-30 absolute bottom-36 right-0 py-3 px-1 rounded-bl-xl rounded-tl-xl bg-white opacity-70 shadow-xl`}
          >
            <FaAngleRight size={30} className="text-chekida-slate" />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default SimilarBooks;
