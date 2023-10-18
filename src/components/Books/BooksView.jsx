import React from "react";
import BookInList from "./BookInList";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BooksView = ({ navSlide , books , title , params }) => {

  const breakpoint = {
    320: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },

    370: {
      slidesPerView: 2.7,
      spaceBetween: 10,
    },

    420: {
      slidesPerView: 3.4,
      spaceBetween: 10,
    },

    530: {
      slidesPerView: 3.8,
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

  return (
    <div>
      <div className="mx-auto xl:max-w-[1100px] my-12 flex flex-col">
        <div className="container flex flex-row justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
          <Link
            className="flex flex-row items-center md:gap-2 gap-1 cursor-pointer"
            to={`/categories?category=${params}`}
          >
            <p className="text-xs md:text-sm text-gray-500 lg:text-base">
              مشاهده بقیه
            </p>
            <span>
              <FaAngleLeft className="opacity-70 text-gray-500 text-[15px] md:text-[18px] lg:text-[23px]" />
            </span>
          </Link>
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
              {books.map((book) => (
                <SwiperSlide key={book.id}>
                  <BookInList book={book} />
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className={`review-swiper-button-next${navSlide} hidden md:block z-10 absolute bottom-36 left-0 py-3 px-1 rounded-br-xl rounded-tr-xl bg-white opacity-70 shadow-xl`}
            >
              <FaAngleLeft size={30} className="text-chekida-slate" />
            </button>
            <button
              className={`review-swiper-button-prev${navSlide} hidden md:block z-10 absolute bottom-36 right-0 py-3 px-1 rounded-bl-xl rounded-tl-xl bg-white opacity-70 shadow-xl`}
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
