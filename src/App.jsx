import { Route, Routes } from "react-router-dom";
import BookContext from "./components/Context/BookContext";
import BookDetails from "./components/Books/BookDetails";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import AuthProvider from "./components/Context/AuthProvider";
import { Toaster } from "react-hot-toast";
import Categories from "./components/Category/Categories";
import CategoriesNames from "./components/Category/CategoriesNames";
import { useState } from "react";
import MyLibrary from "./components/Books/MyLibrary";
import Layout from "./components/Layout/Layout";


function App() {
  const [favourites, setFavourites] = useState([]);
  const handleAddFavourite = (book) => {
    setFavourites((preFav) => [...preFav, book]);
  };

  const handleDeleteFavourite = (id) => {
    setFavourites((preFav) => preFav.filter((fav) => fav.id !== id));
  };
  return (
    <>
      <AuthProvider>
        <BookContext>
          <Toaster />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/bookDetail/:id"
                element={
                  <BookDetails
                    handleAddFavourite={handleAddFavourite}
                    handleDeleteFavourite={handleDeleteFavourite}
                    favourites={favourites}
                  />
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/CategoriesNames" element={<CategoriesNames />} />
              <Route path="/categories" element={<Categories />} />
              <Route
                path="/myLibrary"
                element={<MyLibrary favourites={favourites} />}
              />
              <Route index element={<Landing />} />
            </Route>
          </Routes>
        </BookContext>
      </AuthProvider>
    </>
  );
}

export default App;
