import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  name: null,
  phoneNumber: null,
  isAuthenticated: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        name: action.payload.name,
        phoneNumber: action.payload.phoneNumber,
        isAuthenticated: true,
      };
    case "logout":
      return {
        name: null,
        phoneNumber: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action!");
  }
}

const AuthProvider = ({ children }) => {
  const [{ name , phoneNumber , isAuthenticated}, dispatch] = useReducer(authReducer, initialState);

  function login(name, phoneNumber) {
    dispatch({ type: "login", payload: { name, phoneNumber } });
  }

  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ name , phoneNumber, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
