import React, { useContext } from "react";
import { bookContext } from "../Context/BookContext";
import BookInList from "./BookInList";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Navigation } from "swiper/modules";

const BooksView = ({ navSlide }) => {
  const booksList = useContext(bookContext);

  const breakpoint = {
    320: {
      slidesPerView: 2.7,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    780: {
      slidesPerView: 5.3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5.6,
      spaceBetween: 10,
    },
    1210: {
      slidesPerView: 6.4,
      spaceBetween: 10,
    },
  };

  console.log(booksList);
  return (
    <div>
      <div className="mx-auto xl:max-w-[1100px] my-12 flex flex-col">
        <div className="container flex flex-row justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">
            جدیدترین خلاصه کتاب‌ها
          </h1>
          <a
            className="flex flex-row justify-between items-center md:gap-3 gap-2 cursor-pointer"
            href="#"
          >
            <p className="text-sm text-[--color-secondary] md:text-base">
              مشاهده بقیه
            </p>
            <span>
              <FaAngleLeft
                size={20}
                className="opacity-70 text-[--color-secondary]"
              />
            </span>
          </a>
        </div>

        <div className="container py-4">
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
              {booksList.map((book) => (
                <SwiperSlide>
                  <BookInList key={book.id} book={book} />
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
    </div>
  );
};

export default BooksView;
