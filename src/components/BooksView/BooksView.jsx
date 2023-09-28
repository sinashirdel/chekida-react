import React from 'react';

const BooksView = () => {
    return (
        <div>
        <div class="mx-auto xl:max-w-[1100px] my-12 flex flex-col">
            <div class="container flex flex-row justify-between items-center">
                <h1 class="text-xl md:text-2xl font-bold">جدیدترین خلاصه کتاب‌ها</h1>
                <a class="flex flex-row justify-between items-center md:gap-3 gap-2 cursor-pointer" href="#">
                    <p class="text-sm text-gray-700 md:text-base">مشاهده بقیه</p>
                    <span>
                        <svg class="w-2 h-auto" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.99924 12.2807L1.65258 7.93404C1.13924 7.4207 1.13924 6.5807 1.65258 6.06737L5.99924 1.7207" stroke="#858585" stroke-width="2px" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
                        </svg>
                    </span>
                </a>
            </div>

            <div id="newstBooksUl-Wrapper" class="container overflow-auto py-4">
                <span>next</span>
                <ul id="newstBooksUl" class="mt-4 w-max flex gap-1 lg:gap-2 justify-start items-center">

                </ul>
                <span>back</span>
            </div>
        </div>
        </div>
    );
};

export default BooksView;