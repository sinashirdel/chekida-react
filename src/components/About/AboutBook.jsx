import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const AboutBook = ({ about }) => {
  const [openMore, setOpenMore] = useState(false);
  return (
    <div className="container about xl:max-w-[1100px] flex flex-col my-8  justify-between items-center">
      <h4 className="text-lg md:text-2xl font-bold w-full text-right">
        درباره ی کتاب
      </h4>
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

        <FiChevronDown size={20} className={openMore && "rotate-180"} />
      </div>
    </div>
  );
};

export default AboutBook;
