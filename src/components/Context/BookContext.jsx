import React, { createContext, useContext, useState } from "react";
import newstbooks from "./booksList";

export const bookContext = createContext();

const BookContext = ({ children }) => {
  const [books, setBooks] = useState(newstbooks);

  return <bookContext.Provider value={books}>{children}</bookContext.Provider>;
};

export default BookContext;

export function useBooks() {
  return useContext(bookContext);
}
