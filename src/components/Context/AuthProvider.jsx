import { createContext, useContext, useReducer, useEffect } from "react";

const AuthContext = createContext();
const initialState = {
  name: null,
  phoneNumber: null,
  isAuthenticated: false,
  email: null,
  googleId: null,
  preferences: {
    favourites: [],
    settingBox: false,
    editRead: "default",
    fontSize: 16,
  },
};

// Load initial state from localStorage
const loadInitialState = () => {
  const savedState = localStorage.getItem("authState");
  return savedState ? JSON.parse(savedState) : initialState;
};

function authReducer(state, action) {
  let newState;
  switch (action.type) {
    case "login":
      newState = {
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber || null,
        isAuthenticated: true,
        email: action.payload.email || null,
        googleId: action.payload.googleId || null,
        preferences: state.preferences || initialState.preferences,
      };
      break;
    case "logout":
      newState = {
        name: null,
        phoneNumber: null,
        isAuthenticated: false,
        email: null,
        googleId: null,
        preferences: initialState.preferences,
      };
      break;
    case "editProfile":
      newState = {
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
        isAuthenticated: true,
        email: state.email,
        googleId: state.googleId,
        preferences: state.preferences || initialState.preferences,
      };
      break;
    case "updatePreferences":
      newState = {
        ...state,
        preferences: {
          ...(state.preferences || initialState.preferences),
          ...action.payload,
        },
      };
      break;
    case "addFavourite":
      newState = {
        ...state,
        preferences: {
          ...(state.preferences || initialState.preferences),
          favourites: [
            ...(state.preferences?.favourites || []),
            action.payload,
          ],
        },
      };
      break;
    case "removeFavourite":
      newState = {
        ...state,
        preferences: {
          ...(state.preferences || initialState.preferences),
          favourites: (state.preferences?.favourites || []).filter(
            (fav) => fav.id !== action.payload
          ),
        },
      };
      break;
    default:
      throw new Error("Unknown action!");
  }

  // Save to localStorage after each state change
  localStorage.setItem("authState", JSON.stringify(newState));
  return newState;
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, loadInitialState());
  const {
    name,
    phoneNumber,
    isAuthenticated,
    email,
    googleId,
    preferences = initialState.preferences,
  } = state;

  function login(name, phoneNumber, email = null, googleId = null) {
    dispatch({
      type: "login",
      payload: { name, phoneNumber, email, googleId },
    });
  }

  function logout() {
    dispatch({ type: "logout" });
    localStorage.removeItem("authState");
  }

  function editProfile(name, phoneNumber) {
    dispatch({ type: "editProfile", payload: { name, phoneNumber } });
  }

  function updatePreferences(newPreferences) {
    dispatch({ type: "updatePreferences", payload: newPreferences });
  }

  function addFavourite(book) {
    dispatch({ type: "addFavourite", payload: book });
  }

  function removeFavourite(bookId) {
    dispatch({ type: "removeFavourite", payload: bookId });
  }

  return (
    <AuthContext.Provider
      value={{
        name,
        phoneNumber,
        login,
        logout,
        editProfile,
        isAuthenticated,
        email,
        googleId,
        preferences,
        updatePreferences,
        addFavourite,
        removeFavourite,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
