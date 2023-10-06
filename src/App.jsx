import { Route, Routes } from "react-router-dom";
import BookContext from "./components/Context/BookContext";
import Enamad from "./components/Enamad/Enamad";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import SendMessage from "./components/SendMessage/SendMessage";
import BookDetails from "./components/Books/BookDetails";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import AuthProvider from "./components/Context/AuthProvider";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <AuthProvider>
        <BookContext>
          <Toaster />
          <NavBar />
          <Routes>
            <Route path="/bookDetail/:id" element={<BookDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Landing />} />
          </Routes>
          <SendMessage />
          <Footer />
          <Enamad />
        </BookContext>
      </AuthProvider>
    </>
  );
}

export default App;
