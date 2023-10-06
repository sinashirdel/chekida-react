import React from 'react';

const Enamad = () => {
    return (
        <div>
            <div className="container xl:max-w-[1100px] flex gap-2 justify-between items-center w-full text-center md:text-start md:mt-12 mb-4">
            <p className="text-gray-500 text-[10px] md:text-xs font-normal w-full text-right md:w-1/2 xl:w-1/3">تمامی حقوق چکیدا متعلق به شرکت رساگویان نوآور ایرانیان می‌باشد</p>
            <hr className="hidden md:block w-1/3 xl:w-1/2 h-0.5 mx-auto bg-cyan-900 opacity-10 border-0 rounded"/>
            <img className="w-12 p-2 border-2 border-cyan-900 border-opacity-10 rounded-xl" src="/assets/enamad.png"/>
        </div>
        </div>
    );
};

export default Enamad;