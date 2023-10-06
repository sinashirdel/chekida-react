import React, { useState } from "react";

const AboutSite = () => {
  const [openMore, setOpenMore] = useState(false);
  return (
    <div>
      <div className="container xl:max-w-[1100px] flex flex-col my-8  justify-between items-center">
        <h1 className="text-xl md:text-2xl font-black">
          وبسایت و اپلیکیشن خلاصه کتاب
        </h1>
        <p
          className={`text-sm text-justify ${
            !openMore ? "h-32" : "h-auto"
          } relative text-gray-700 font-normal leading-6 mt-6 overflow-hidden`}
          id="aboutSite"
        >
          چکیدا وبسایت و اپلیکیشن خلاصه کتاب ها هست. برای خیلی‌از ما که زمان،
          آرامش فکری یا حتی حوصله‌ی کتاب‌خوندن رو نداریم، خوندن خلاصه کتاب ها
          بهترین راهکار برای استفاده از مفاهیم غنی کتاب‌ها و رشد و توسعه فردی
          هست. وبسایت و اپلیکیشن چکیده کتاب چکیدا مثل یک رفیق کتاب‌باز، کتاب‌ها
          رو به جای تو مطالعه می‌کنه، نکات کلیدی و مهمشون رو استخراج می‌کنه و
          اون‌ها را در یک قالب خلاصه‌شده بهت ارائه میده تا توی مدت‌زمان کوتاهی
          بتونی از مفاهیم غنی کتاب‌ها مطلع بشی و از اون‌ها برای رشد و موفقیت در
          زندگی استفاده کنی. ویکتور هوگو جمله‌ی جالبی داره و میگه: «خوشبخت
          کسی‌ست که کتاب های خوب یا دوستان اهل کتاب داشته باشد.» چکیدا همون دوست
          اهل کتاب تو هست که سعی می‌کنه تا بینشت رو افزایش بده و تو رو در مسیر
          پیشرفت قرار بده؛ پس از الان که با چکیدا آشنا شدی، می‌تونی خودت رو جزو
          آدمای خوشبخت فرض کنی. نکته‌ی مهم درباره‌ی خلاصه کتاب های چکیدا اینه که
          تمام کتاب‌ها با لحن محاوره‌ای روایت میشن؛ درست همون لحنی که ما برای
          مکالمه‌ی روزمره ازش استفاده می‌کنیم. این اتفاق نه‌تنها باعث میشه تا
          محتوا رنگ‌و‌بوی جدیدی برای مخاطب داشته باشه و خیلی راحت‌تر باهاش
          ارتباط برقرار کنه، بلکه انتقال مفهوم رو هم ساده‌تر می‌کنه؛ بنابراین
          توی چکیدا حتی یک کتاب هم نمی‌تونی پیدا کنی که جملات سنگین و نامفهوم
          داشته باشه که این اتفاق باعث میشه تا ازطریق خلاصه کتاب بتونی مفاهیم
          کتاب‌های سنگین رو هم بخونی و متوجه بشی.
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
    </div>
  );
};

export default AboutSite;
