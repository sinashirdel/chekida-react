import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import BooksView from "../Books/BooksView";
import AboutSite from "../About/AboutSite";

const Landing = () => {
  return (
    <div>
      <Banner />
      <Category />
      <BooksView navSlide={1} />
      <BooksView navSlide={2} />
      <Banner />
      <BooksView navSlide={3} />
      <AboutSite />
    </div>
  );
};

export default Landing;
