import React from "react";
import { IoClose } from "react-icons/io5";

const SettingBox = ({ setSettingBox, setEditRead, fontSize , setFontSize }) => {
    const increaseFontHandle = () => {
        setFontSize(fontSize + 1)
        if(fontSize >= 30) setFontSize(fontSize)
    }
const decreaseFontHandle = () => {
  setFontSize(fontSize - 1);
  if (fontSize <= 8) setFontSize(fontSize);
};
  return (
    <div className="backdrop">
      <div className="container my-32 sm:w-2/3 md:w-1/2 lg:w-1/3">
        <div className="bg-white flex flex-col gap-8 p-3 rounded-xl">
          <div className="flex justify-between items-center">
            <h5 className="font-semibold text-sm md:text-lg">
              رنگ متن و پس زمینه
            </h5>
            <IoClose
              onClick={() => setSettingBox(false)}
              className="text-gray-500 cursor-pointer"
              size={20}
            />
          </div>
          <hr className="w-full border-2" />

          <div className="grid grid-cols-3 gap-3 md:gap-6 text-xs md:text-base font-medium">
            <button
              onClick={() => setEditRead("readMore")}
              className="bg-[#E3DECD] text-[#544703] text-center p-2 md:p-3 rounded-lg"
            >
              الف
            </button>
            <button
              onClick={() => setEditRead("default")}
              className="bg-gray-200 text-[#404040] text-center p-2 md:p-3 rounded-lg"
            >
              الف
            </button>
            <button
              onClick={() => setEditRead("dark")}
              className="bg-[#404040] text-[#CDCDCD] text-center p-2 md:p-3 rounded-lg"
            >
              الف
            </button>
            <button
              onClick={increaseFontHandle}
              className="bg-chekida-slate text-chekida-green text-center p-2 md:p-3 rounded-lg"
            >
              افزایش اندازه
            </button>
            <button
              onClick={decreaseFontHandle}
              className="bg-chekida-green text-chekida-slate text-center p-2 md:p-3 rounded-lg"
            >
              کاهش اندازه
            </button>
            <button
              onClick={() => setFontSize(16)}
              className="bg-black text-gray-50 text-center p-2 md:p-3 rounded-lg"
            >
              اندازه پیش‌فرض
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingBox;
