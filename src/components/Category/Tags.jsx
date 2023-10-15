import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Tags = () => {
  const breakpoint = {
    320: {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },

    480: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2.8,
      spaceBetween: 20,
    },
    780: {
      slidesPerView: 3.2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3.7,
      spaceBetween: 10,
    },
    1210: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
  };
  return (
    <div>
      <div className="container xl:max-w-[1100px] my-8 py-4 relative">
        <ul>
          <Swiper
            slidesPerView={4.5}
            freeMode={true}
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              nextEl: ".review-swiper-button-next",
              prevEl: ".review-swiper-button-prev",
            }}
            breakpoints={breakpoint}
          >
            <SwiperSlide>
              <Link to="/categories?category=all">
                <li className="flex gap-2 justify-between items-center p-2 md:p-3 transition-all hover:border-opacity-100 border-2 border-opacity-0 border-chekida-slate bg-chekida-gray rounded-lg text-xs md:text-sm lg:text-base font-medium">
                  <img
                    className="w-5 md:w-6 h-auto"
                    src="./assets/category/e3e4a0beb712ae4902303babd62bdc3f.png"
                    alt=""
                  />
                  <a href="#">همه ی کتاب ها</a>
                </li>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <li className="flex gap-2 justify-between items-center p-2 md:p-3 transition-all hover:border-opacity-100 border-2 border-opacity-0 border-chekida-slate bg-chekida-gray rounded-lg text-xs md:text-sm lg:text-base font-medium">
                <img
                  className="w-5 md:w-6 h-auto"
                  src="./assets/category/2c640130a760e17fe1a8bb3c0911330d.png"
                  alt=""
                />
                <a href="#">کتاب های رایگان</a>
              </li>
            </SwiperSlide>

            <SwiperSlide>
              <Link to="/categories?category=success">
                <li className="flex gap-2 justify-between items-center p-2 md:p-3 transition-all hover:border-opacity-100 border-2 border-opacity-0 border-chekida-slate bg-chekida-gray rounded-lg text-xs md:text-sm lg:text-base font-medium">
                  <img
                    className="w-5 md:w-6 h-auto"
                    src="./assets/category/ca2c7b72233eb8db4ed90929ed46d97b.png"
                    alt=""
                  />
                  <a href="#">برای راه اندازی کسب و کار</a>
                </li>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="/categories?category=philosophy">
                <li className="flex gap-2 justify-between items-center p-2 md:p-3 transition-all hover:border-opacity-100 border-2 border-opacity-0 border-chekida-slate bg-chekida-gray rounded-lg text-xs md:text-sm lg:text-base font-medium">
                  <img
                    className="w-5 md:w-6 h-auto"
                    src="./assets/category/01ac4036ae1ffff25c02be2cb9767433.png"
                    alt=""
                  />
                  <a href="#">برای شناخت بهتر خودت</a>
                </li>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to="/categories?category=psychology">
              <li className="flex gap-2 justify-between items-center p-2 md:p-3 transition-all hover:border-opacity-100 border-2 border-opacity-0 border-chekida-slate bg-chekida-gray rounded-lg text-xs md:text-sm lg:text-base font-medium">
                <img
                  className="w-5 md:w-6 h-auto"
                  src="./assets/category/03835e4bde22a9db1cc124afa8ece8b9.png"
                  alt=""
                />
                <a href="#">برای آرامش زندگی</a>
              </li>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <li className="flex gap-2 justify-between items-center p-2 md:p-3 transition-all hover:border-opacity-100 border-2 border-opacity-0 border-chekida-slate bg-chekida-gray rounded-lg text-xs md:text-sm lg:text-base font-medium">
                <img
                  className="w-5 md:w-6 h-auto"
                  src="./assets/category/41d6a42dde9bf1c274664fc1d435a6d5.png"
                  alt=""
                />
                <a href="#">برای عبور از سختی ها</a>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="flex gap-2 justify-between items-center p-2 md:p-3 transition-all hover:border-opacity-100 border-2 border-opacity-0 border-chekida-slate bg-chekida-gray rounded-lg text-xs md:text-sm lg:text-base font-medium">
                <img
                  className="w-5 md:w-6 h-auto"
                  src="./assets/category/388187df10d964e30bce22e1ab02a427.png"
                  alt=""
                />
                <a href="#">برای زندگی عاشقانه</a>
              </li>
            </SwiperSlide>
          </Swiper>
        </ul>
        <button className="review-swiper-button-prev hidden md:block z-30 absolute bottom-[30px] right-[-25px]">
          <FaAngleRight size={25} className="text-chekida-slate" />
        </button>
        <button className="review-swiper-button-next hidden md:block z-30 absolute bottom-[30px] left-[-25px]">
          <FaAngleLeft size={25} className="text-chekida-slate" />
        </button>
      </div>
    </div>
  );
};

export default Tags;
