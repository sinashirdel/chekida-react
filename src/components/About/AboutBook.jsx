import React, { useState } from "react";

const AboutBook = ({ props, about }) => {
  const [openMore, setOpenMore] = useState(false);
  return (
    <div
      className={`${
        !props && "container"
      } xl:max-w-[1100px] flex flex-col my-8  justify-between items-center`}
    >
      <h1
        className={`text-xl md:text-2xl font-black w-full ${
          !props && "text-center"
        }`}
      >
        {!props ? "وبسایت و اپلیکیشن خلاصه کتاب" : "درباره ی کتاب"}
      </h1>
      <p
        className={`text-sm text-justify ${
          !openMore ? "h-32" : "h-auto"
        } relative text-gray-700 font-normal leading-6 mt-6 overflow-hidden`}
        id="aboutSite"
      >
        {about}
        <span
          className="absolute block bottom-0 w-full h-12"
          style={
            !openMore
              ? {
                  background:
                    "linear-gradient(0deg,#f9fafb,hsla(210, 20%, 98% ,1),hsla(210, 20%, 98%,.75),hsla(210, 20%, 98%,.2))",
                }
              : { background: "none" }
          }
        ></span>
      </p>

      <div
        className={`flex cursor-pointer ${openMore && "mt-6"}`}
        onClick={() => setOpenMore(!openMore)}
        id="moreBlock"
      >
        <p className="text-sm font-semibold ml-2 ">
          {!openMore ? "بیشتر" : "بستن"}
        </p>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            className={`w-5 h-5 ${openMore && "rotate-180"}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default AboutBook;
