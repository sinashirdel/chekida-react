import { Route, Routes } from "react-router-dom";
import BookContext from "./components/Context/BookContext";
import BookDetails from "./components/Books/BookDetails";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import AuthProvider, { useAuth } from "./components/Context/AuthProvider";
import { Toaster } from "react-hot-toast";
import Categories from "./components/Category/Categories";
import CategoriesNames from "./components/Category/CategoriesNames";
import MyLibrary from "./components/Books/MyLibrary";
import Layout from "./components/Layout/Layout";
import UserPanel from "./components/UserPanel/UserPanel";
import ProtectedRoute from "./components/ProtectedRoute.jsx/ProtectedRoute";
import ReadLayout from "./components/ReadLayout/ReadLayout";
import ReadBook from "./components/ReadLayout/ReadBook";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound/NotFound";

function AppContent() {
  const {
    preferences = {
      favourites: [],
      settingBox: false,
      editRead: "default",
      fontSize: 16,
    },
    updatePreferences,
    addFavourite,
    removeFavourite,
  } = useAuth();

  const { favourites, settingBox, editRead, fontSize } = preferences;

  const handleAddFavourite = (book) => {
    addFavourite(book);
  };

  const handleDeleteFavourite = (id) => {
    removeFavourite(id);
  };

  const handleSettingBoxChange = (value) => {
    updatePreferences({ settingBox: value });
  };

  const handleEditReadChange = (value) => {
    updatePreferences({ editRead: value });
  };

  const handleFontSizeChange = (value) => {
    updatePreferences({ fontSize: value });
  };

  return (
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
            <ReadLayout
              setSettingBox={handleSettingBoxChange}
              editRead={editRead}
            />
          }
        >
          <Route
            path="/readBooks/:id"
            element={
              <ReadBook
                settingBox={settingBox}
                setSettingBox={handleSettingBoxChange}
                editRead={editRead}
                setEditRead={handleEditReadChange}
                fontSize={fontSize}
                setFontSize={handleFontSizeChange}
              />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BookContext>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
