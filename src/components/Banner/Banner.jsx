import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* <!-- start free book --> */}
        <div class="container">
            <div class="mx-auto xl:max-w-[1100px] flex flex-col gap-y-4 sm:flex-row sm:gap-8 lg:justify-evenly bg-purple-950 my-6 lg:mt-12 rounded-3xl py-6 md:p-12 px-8 items-center justify-center">
                <div>
                    <img class="w-32 md:w-40 lg:w-48 rounded-xl" src="./assets/4848bd5e71dd380819fbb40a046a6fc1.webp"/>
                </div>
                
                <div class="flex flex-col lg:items-start gap-y-4 lg:justify-around lg:h-56">
                    <h1 class="text-purple-400 text-center text-2xl md:text-3xl lg:text-6xl font-black">خلاصه کتاب رایگان هفته</h1>
                    <p class="text-purple-400 text-center mt-2 text-sm md:text-lg md:font-bold lg:text-2xl">مغزت همیشه بهت دروغ میگه</p>
                    <div class="group cursor-pointer hover:bg-purple-400 w-full border-[3px] transition-all border-purple-400 h-10 md:h-14 rounded-full flex flex-row justify-between">
                        <a class="flex flex-row justify-center items-center text-sm md:text-lg md:font-medium w-5/6 bg-purple-400 text-purple-950 rounded-full" href="#">رایگان بخون یا گوش بده</a>
        
                        <div class="m-auto">
                            <svg class="w-2 md:w-3 h-auto stroke-purple-400 group-hover:stroke-purple-900" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0004 24.5595L3.30711 15.8661C2.28044 14.8395 2.28044 13.1595 3.30711 12.1328L12.0004 3.43945" stroke="currect" stroke-width="5px" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- finish free book --> */}
        </div>
    );
};

export default Banner;