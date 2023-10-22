import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useBooks } from "../Context/BookContext";
import AboutBook from "../About/AboutBook";
import { IoDocumentTextOutline, IoMicOutline } from "react-icons/io5";
import SimilarBooks from "./SimilarBooks";
import { FaBookOpen } from "react-icons/fa";
import { BiSolidTime, BiSolidCategory } from "react-icons/bi";
import { GoHeart, GoHeartFill } from "react-icons/go";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";

const BookDetails = ({
  favourites,
  handleDeleteFavourite,
  handleAddFavourite,
}) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const booksContext = useBooks();

  const { id } = useParams();
  const book = booksContext.find((b) => b.id === Number(id));

  const isAddToFavourite = favourites.find((fav) => fav.id === book.id);

  const handleAddFav = () => {
    if (!isAuthenticated) {
      toast("ابتدا باید وارد حساب کاربری شوید", {
        style: {
          color: "black",
          backgroundColor: "#FED334",
        },
        iconTheme: {
          primary: "white",
          secondary: "#FED334",
        },
      });
      navigate("/login", { state: `/bookDetail/${id}` });
    } else {
      handleAddFavourite(book);
      toast.success(`کتاب ${book.name} به کتابخونه اضافه شد`, {
        style: {
          color: "white",
          backgroundColor: "#10b981",
        },
        iconTheme: {
          primary: "white",
          secondary: "#10b981",
        },
      });
    }
  };

  return (
    <div>
      <div className="container xl:max-w-[1100px] flex flex-col md:flex-row items-center gap-4 md:items-start md:justify-between mt-6">
        {/* <!-- image of book --> */}
        <div className="flex flex-col md:w-1/3 md:pr-12 lg:pr-24 md:gap-4 md:sticky md:top-28 lg:top-28">
          <img
            id="imageBook"
            className="rounded-xl shadow-xl"
            alt=""
            src={book.img}
          />
          {/* <!-- download button --> */}
          <div className="hidden md:flex md:flex-col lg:flex-row items-center md:gap-2 lg:gap-0 lg:justify-evenly bg-emerald-400 rounded-xl p-2 py-3 md:text-xs xl:text-base font-semibold">
            <Link
              to={`/readBooks/${book.id}`}
              className="flex items-center"
              href=""
            >
              <IoDocumentTextOutline size={20} />
              <p>خلاصه متنی</p>
            </Link>
            <a className="flex items-center" href="">
              <IoMicOutline size={20} />
              <p>خلاصه صوتی</p>
            </a>
          </div>
        </div>
        {/* <!-- details wrapper --> */}
        <div className="flex flex-col gap-4 md:items-start w-screen md:w-2/3 md:order-first">
          {/* <!-- title of book --> */}
          <div className="container flex flex-col items-center md:items-start gap-2 md:gap-4 my-4">
            <h1 className="text-xl md:text-4xl text-center md:text-right font-bold md:inline">
              خلاصه کتاب {book.name}
            </h1>
            <h3
              id="nameBook"
              className="text-base md:text-xl text-center font-medium"
            >
              {book.title}
            </h3>
          </div>
          {/* <!-- details --> */}
          <div className="container flex w-full md:gap-4 md:justify-start items-center text-xs lg:text-base">
            <div className="flex w-1/3 md:w-fit flex-col md:flex-row items-center gap-1 md:border border-slate-900 md:p-2 rounded-xl md:justify-center">
              <div>
                <div className="border-2 md:border-0 w-fit rounded-xl border-slate-900 p-2 md:p-0">
                  <BiSolidCategory size={20} />
                </div>
              </div>
              <Link to={`/categories?category=${book.categoryParams}`}>
                <p>{book.category}</p>
              </Link>
            </div>
            <div className="flex w-1/3 md:w-fit flex-col md:flex-row items-center gap-1 md:border border-slate-900 md:p-2 rounded-xl md:justify-center">
              <div>
                <div className="border-2 md:border-0 w-fit rounded-xl border-slate-900 p-2 md:p-0">
                  <BiSolidTime size={20} />
                </div>
              </div>
              <p>{book.time} دقیقه</p>
            </div>
            <div className="flex w-1/3 md:w-fit flex-col md:flex-row items-center gap-1 md:border border-slate-900 md:p-2 rounded-xl md:justify-center">
              <div>
                <div className="border-2 md:border-0 w-fit rounded-xl border-slate-900 p-2 md:p-0">
                  <FaBookOpen size={20} />
                </div>
              </div>
              <p>{book.page} صفحه</p>
            </div>
            <div className="flex w-1/3 md:w-fit flex-col md:flex-row items-center gap-1 md:border border-slate-900 md:p-2 rounded-xl md:justify-center">
              <div>
                <div className="border-2 md:border-0 w-fit rounded-xl border-slate-900 p-2 md:p-0">
                  {isAddToFavourite ? (
                    <GoHeartFill
                      onClick={() => {
                        handleDeleteFavourite(book.id);
                        toast.success(`کتاب ${book.name} از کتابخونه حذف شد`, {
                          style: {
                            color: "black",
                            backgroundColor: "#FED334",
                          },
                          iconTheme: {
                            primary: "white",
                            secondary: "#FED334",
                          },
                        });
                      }}
                      size={20}
                    />
                  ) : (
                    <GoHeart onClick={handleAddFav} size={20} />
                  )}
                </div>
              </div>
              <p>کتابخونه</p>
            </div>
          </div>

          {/* <!-- download button --> */}
          <section className="w-full container md:hidden sticky top-28 z-10 my-8">
            <div className="flex justify-around bg-emerald-400 rounded-xl p-4 font-semibold">
              <Link to={`/readBooks/${book.id}`} className="flex gap-2" href="">
                <IoDocumentTextOutline size={20} />
                <p>خلاصه متنی</p>
              </Link>
              <a className="flex gap-2" href="">
                <IoMicOutline size={20} />

                <p>خلاصه صوتی</p>
              </a>
            </div>
          </section>

          {/* <!-- about book --> */}
          <AboutBook about={book.about} id={book.id} />

          {/* Similar books  */}
          <div className="w-full">
            <SimilarBooks
              navSlide={4}
              categorySimilar={book.categoryParams}
              id={book.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
