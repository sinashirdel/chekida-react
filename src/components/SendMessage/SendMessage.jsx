import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";

const SendMessage = () => {
  return (
    <div>
      <div className="container xl:max-w-[1100px] my-12">
        <div className="flex justify-between sm:gap-4 items-center p-4 sm:px-4 sm:py-4 bg-chekida-slate-light my-6 rounded-2xl">
          <div className="sm:bg-white sm:p-4 sm:rounded-xl">
            <BsTelephoneFill
              size={30}
              className=" fill-white sm:fill-chekida-slate-light"
            />
          </div>
          <div className="flex flex-col text-white justify-center sm:w-2/3 lg:w- gap-2 h-full">
            <h3 className="text-base sm:text-lg md:text-xl font-bold">
              سوالی داری؟
            </h3>
            <p className="text-xs sm:font-sm md:text-base">
              به پشتیبانیِ چکیدا پیام بده!
            </p>
          </div>
          <div className="flex justify-evenly items-center gap-1 p-2 md:p-3 rounded-lg bg-white">
            <span>
              <MdMail size={20} className="fill-chekida-slate-light" />
            </span>
            <p className="text-xs md:text-sm font-medium text-cyan-900">
              ارسال پیام
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
