import { Route, Routes, ScrollRestoration } from "react-router-dom";
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
import UserPanel from "./components/UserPanel/UserPanel";
import ProtectedRoute from "./components/ProtectedRoute.jsx/ProtectedRoute";
import ReadLayout from "./components/ReadLayout/ReadLayout";
import ReadBook from "./components/ReadLayout/ReadBook";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [favourites, setFavourites] = useState([]);
  const handleAddFavourite = (book) => {
    setFavourites((preFav) => [...preFav, book]);
  };

  const handleDeleteFavourite = (id) => {
    setFavourites((preFav) => preFav.filter((fav) => fav.id !== id));
  };

  const [settingBox, setSettingBox] = useState(false);
  const [editRead, setEditRead] = useState("default");
  return (
    <>
      <AuthProvider>
        <BookContext>
          <Toaster />
<ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/userPanel"
                element={
                  <ProtectedRoute>
                    <UserPanel />
                  </ProtectedRoute>
                }
              />
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
            <Route
              path="/readBooks"
              element={
                <ReadLayout setSettingBox={setSettingBox} editRead={editRead} />
              }
            >
              <Route
                path="/readBooks/:id"
                element={
                  <ReadBook
                    settingBox={settingBox}
                    setSettingBox={setSettingBox}
                    editRead={editRead}
                    setEditRead={setEditRead}
                  />
                }
              />
            </Route>
          </Routes>
        </BookContext>
      </AuthProvider>
    </>
  );
}

export default App;
