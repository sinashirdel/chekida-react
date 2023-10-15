import React from 'react';
import {FaAngleLeft} from "react-icons/fa6"

const Footer = () => {
    return (
        <div>
            <footer className="container xl:max-w-[1100px] flex flex-col gap-8 md:gap-4 md:flex-row md:flex-wrap lg:flex-nowrap lg:justify-between md:h-auto">
            {/* <!-- links --> */}
            <ul className="flex flex-col justify-between gap-y-6 md:gap-y-4">
                <li className="flex flex-row justify-between items-center">
                    <h3 className="text-sm font-semibold text-chekida-slate-light w-48">خدمات مشترکین</h3>
                    <hr className="md:hidden w-full border-2 border-chekida-slate-light opacity-20"/>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                    <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">سوالات متداول</p>
                    <span>
                        <FaAngleLeft className='text-chekida-slate-light' />
                    </span>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                    <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">قوانین و مقررات</p>
                    <span>
                        <FaAngleLeft className='text-chekida-slate-light' />
                    </span>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                        <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">راهنمای استفاده</p>
                        <span>
                            <FaAngleLeft className='text-chekida-slate-light' />
                        </span>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                        <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">پیشنهاد کتاب</p>
                        <span>
                            <FaAngleLeft className='text-chekida-slate-light' />
                        </span>
                </li>
            </ul>

            <ul className="flex flex-col justify-between gap-y-6 md:gap-y-4">
                <li className="flex flex-row justify-between items-center">
                    <h3 className="text-sm font-semibold text-chekida-slate-light w-48">لینک‌های چکیدا</h3>
                    <hr className="w-full md:hidden border-2 border-chekida-slate-light opacity-20"/>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                    <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">درباره چکیدا</p>
                    <span>
                        <FaAngleLeft className='text-chekida-slate-light' />
                    </span>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                    <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">تبلیغات در چکیدا</p>
                    <span>
                        <FaAngleLeft className='text-chekida-slate-light' />
                    </span>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                        <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">تماس با ما</p>
                        <span>
                            <FaAngleLeft className='text-chekida-slate-light' />
                        </span>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                        <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">مجله چکیدا</p>
                        <span>
                            <FaAngleLeft className='text-chekida-slate-light' />
                        </span>
                </li>
            </ul>

            <ul className="flex flex-col justify-between gap-y-6 md:gap-y-4">
                <li className="flex flex-row justify-between items-center">
                    <h3 className="text-sm font-semibold text-chekida-slate-light w-48">کتاب‌های محبوب</h3>
                    <hr className="w-full md:hidden border-2 border-chekida-slate-light opacity-20"/>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                    <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">خلاصه کتاب‌ راز</p>
                    <span>
                        <FaAngleLeft className='text-chekida-slate-light' />
                    </span>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                    <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">خلاصه کتاب توتالیتاریسم</p>
                    <span>
                        <FaAngleLeft className='text-chekida-slate-light' />
                    </span>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                        <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">‌خلاصه کتاب  آینده نزدیک</p>
                        <span>
                            <FaAngleLeft className='text-chekida-slate-light' />
                        </span>
                </li>
                <li className="flex justify-between items-center w-fit" href="#">
                        <p className="text-xs md:text-sm font-normal text-chekida-slate-light ml-2">خلاصه کتاب قدرت بی قدرتان</p>
                        <span>
                            <FaAngleLeft className='text-chekida-slate-light' />
                        </span>
                </li>
            </ul>

            {/* <!-- download app --> */}
            <div >
                <div className="flex flex-col w-full justify-between items-center md:items-start gap-2 md:gap-4">
                    <h3 className="text-sm font-bold text-chekida-slate-light">دانلود اپلیکیشن چکیدا</h3>
                    <div className="flex justify-center w-full">
                            <div className="grid grid-cols-4 grid-rows-2 gap-1 w-1/3">
                                <span className="row-span-2 col-span-1">
                                    <img src="/assets/social media/googleplay.png"/>
                                </span>
                                
                                <h3 className="col-span-3 text-xs font-black text-chekida-slate-light">گوگل پلی</h3>
                                <p className="col-span-3 text-[10px] font-normal text-chekida-slate-light">برای کاربران اندورید</p>
                                
                            </div>
                            <div className="grid grid-cols-4 grid-rows-2 gap-1  w-1/3">
                                <span className="row-span-2 col-span-1">
                                    <img src="/assets/social media/bazar.png"/>
                                </span>
                                
                                <h3 className="col-span-3 text-xs font-black text-chekida-slate-light">بازار</h3>
                                <p className="col-span-3 text-[10px] font-normal text-chekida-slate-light">برای کاربران اندورید</p>
                                
                            </div>
                            <div className="grid grid-cols-4 grid-rows-2 gap-1  w-1/3">
                                <span className="row-span-2 col-span-1">
                                    <img src="/assets/social media/internet.png"/>
                                </span>
                                
                                <h3 className="col-span-3 text-xs font-black text-chekida-slate-light">لینک مستقیم</h3>
                                <p className="col-span-3 text-[10px] font-normal text-chekida-slate-light">برای کاربران اندورید</p>
                                
                            </div>
                    </div>
                    
                    {/* <!-- social media --> */}
                    <div className="flex flex-col md:flex-row md:gap-1 md:bg-gray-200 md:p-4 md:w-full md:rounded-xl justify-between items-center my-12 md:my-0 h-16">
                        <div className="flex justify-between items-center w-20 md:w-1/3">
                            <svg className="fill-chekida-slate-light md:w-6 md:h-6" width="16px" height="16px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                                <g>
                                    <path d="M127.999746,23.06353 C162.177385,23.06353 166.225393,23.1936027 179.722476,23.8094161 C192.20235,24.3789926 198.979853,26.4642218 203.490736,28.2166477 C209.464938,30.5386501 213.729395,33.3128586 218.208268,37.7917319 C222.687141,42.2706052 225.46135,46.5350617 227.782844,52.5092638 C229.535778,57.0201472 231.621007,63.7976504 232.190584,76.277016 C232.806397,89.7746075 232.93647,93.8226147 232.93647,128.000254 C232.93647,162.177893 232.806397,166.225901 232.190584,179.722984 C231.621007,192.202858 229.535778,198.980361 227.782844,203.491244 C225.46135,209.465446 222.687141,213.729903 218.208268,218.208776 C213.729395,222.687649 209.464938,225.461858 203.490736,227.783352 C198.979853,229.536286 192.20235,231.621516 179.722476,232.191092 C166.227425,232.806905 162.179418,232.936978 127.999746,232.936978 C93.8200742,232.936978 89.772067,232.806905 76.277016,232.191092 C63.7971424,231.621516 57.0196391,229.536286 52.5092638,227.783352 C46.5345536,225.461858 42.2700971,222.687649 37.7912238,218.208776 C33.3123505,213.729903 30.538142,209.465446 28.2166477,203.491244 C26.4637138,198.980361 24.3784845,192.202858 23.808908,179.723492 C23.1930946,166.225901 23.0630219,162.177893 23.0630219,128.000254 C23.0630219,93.8226147 23.1930946,89.7746075 23.808908,76.2775241 C24.3784845,63.7976504 26.4637138,57.0201472 28.2166477,52.5092638 C30.538142,46.5350617 33.3123505,42.2706052 37.7912238,37.7917319 C42.2700971,33.3128586 46.5345536,30.5386501 52.5092638,28.2166477 C57.0196391,26.4642218 63.7971424,24.3789926 76.2765079,23.8094161 C89.7740994,23.1936027 93.8221066,23.06353 127.999746,23.06353 M127.999746,0 C93.2367791,0 88.8783247,0.147348072 75.2257637,0.770274749 C61.601148,1.39218523 52.2968794,3.55566141 44.1546281,6.72008828 C35.7374966,9.99121548 28.5992446,14.3679613 21.4833489,21.483857 C14.3674532,28.5997527 9.99070739,35.7380046 6.71958019,44.1551362 C3.55515331,52.2973875 1.39167714,61.6016561 0.769766653,75.2262718 C0.146839975,88.8783247 0,93.2372872 0,128.000254 C0,162.763221 0.146839975,167.122183 0.769766653,180.774236 C1.39167714,194.398852 3.55515331,203.703121 6.71958019,211.845372 C9.99070739,220.261995 14.3674532,227.400755 21.4833489,234.516651 C28.5992446,241.632547 35.7374966,246.009293 44.1546281,249.28042 C52.2968794,252.444847 61.601148,254.608323 75.2257637,255.230233 C88.8783247,255.85316 93.2367791,256 127.999746,256 C162.762713,256 167.121675,255.85316 180.773728,255.230233 C194.398344,254.608323 203.702613,252.444847 211.844864,249.28042 C220.261995,246.009293 227.400247,241.632547 234.516143,234.516651 C241.632039,227.400755 246.008785,220.262503 249.279912,211.845372 C252.444339,203.703121 254.607815,194.398852 255.229725,180.774236 C255.852652,167.122183 256,162.763221 256,128.000254 C256,93.2372872 255.852652,88.8783247 255.229725,75.2262718 C254.607815,61.6016561 252.444339,52.2973875 249.279912,44.1551362 C246.008785,35.7380046 241.632039,28.5997527 234.516143,21.483857 C227.400247,14.3679613 220.261995,9.99121548 211.844864,6.72008828 C203.702613,3.55566141 194.398344,1.39218523 180.773728,0.770274749 C167.121675,0.147348072 162.762713,0 127.999746,0 Z M127.999746,62.2703115 C91.698262,62.2703115 62.2698034,91.69877 62.2698034,128.000254 C62.2698034,164.301738 91.698262,193.730197 127.999746,193.730197 C164.30123,193.730197 193.729689,164.301738 193.729689,128.000254 C193.729689,91.69877 164.30123,62.2703115 127.999746,62.2703115 Z M127.999746,170.667175 C104.435741,170.667175 85.3328252,151.564259 85.3328252,128.000254 C85.3328252,104.436249 104.435741,85.3333333 127.999746,85.3333333 C151.563751,85.3333333 170.666667,104.436249 170.666667,128.000254 C170.666667,151.564259 151.563751,170.667175 127.999746,170.667175 Z M211.686338,59.6734287 C211.686338,68.1566129 204.809755,75.0337031 196.326571,75.0337031 C187.843387,75.0337031 180.966297,68.1566129 180.966297,59.6734287 C180.966297,51.1902445 187.843387,44.3136624 196.326571,44.3136624 C204.809755,44.3136624 211.686338,51.1902445 211.686338,59.6734287 Z"></path>
                                </g>
                            </svg>
                            <svg className="fill-chekida-slate-light md:w-6 md:h-6" width="16px" height="16px" data-name="Social Media Icons" id="Social_Media_Icons" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><defs></defs><path className="cls-1" d="M477,43.86,13.32,223.29a5.86,5.86,0,0,0-.8.38c-3.76,2.13-30,18.18,7,32.57l.38.14,110.41,35.67a6.08,6.08,0,0,0,5.09-.62L409.25,120.57a6,6,0,0,1,2.2-.83c3.81-.63,14.78-1.81,7.84,7-7.85,10-194.9,177.62-215.66,196.21a6.3,6.3,0,0,0-2.07,4.17l-9.06,108a7.08,7.08,0,0,0,2.83,5.67,6.88,6.88,0,0,0,8.17-.62l65.6-58.63a6.09,6.09,0,0,1,7.63-.39l114.45,83.1.37.25c2.77,1.71,32.69,19.12,41.33-19.76l79-375.65c.11-1.19,1.18-14.27-8.17-22-9.82-8.08-23.72-4-25.81-3.56A6,6,0,0,0,477,43.86Z" id="Telegram"/></svg>
                            <svg className="fill-chekida-slate-light md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 5 1036 990"><path d="M0 120c0-33.334 11.667-60.834 35-82.5C58.333 15.833 88.667 5 126 5c36.667 0 66.333 10.666 89 32 23.333 22 35 50.666 35 86 0 32-11.333 58.666-34 80-23.333 22-54 33-92 33h-1c-36.667 0-66.333-11-89-33S0 153.333 0 120zm13 875V327h222v668H13zm345 0h222V622c0-23.334 2.667-41.334 8-54 9.333-22.667 23.5-41.834 42.5-57.5 19-15.667 42.833-23.5 71.5-23.5 74.667 0 112 50.333 112 151v357h222V612c0-98.667-23.333-173.5-70-224.5S857.667 311 781 311c-86 0-153 37-201 111v2h-1l1-2v-95H358c1.333 21.333 2 87.666 2 199 0 111.333-.667 267.666-2 469z"/></svg>
                        </div>
                        <div className="flex flex-col items-center md:items-start md:gap-2 md:order-first">
                            <h3 className="text-xs md:text-sm font-bold text-chekida-slate-light">چکیدا توی شبکه‌های اجتماعی</h3>
                            <p className="text-xs font-normal text-chekida-slate-light">همون رفیقِ کتاب‌باز، اما خودمونی‌تر از اینجا</p>
                        </div>
                    </div>
                    
                </div>

                <div></div>

            </div>

        </footer>
        </div>
    );
};

export default Footer;