import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const initialState = {
  user: null,
  username: null,
  password: null,
  isAuthenticated: false,
};

function authReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        username: action.payload.username,
        password: action.payload.password,
        isAuthenticated: true,
      };
    case "logout":
      return {
        user: null,
        username: null,
        password: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action!");
  }
}

const AuthProvider = ({ children }) => {
  const [{user , username , password , isAuthenticated}, dispatch] = useReducer(authReducer, initialState);

  function login(username, password) {
    dispatch({ type: "login", payload: { username, password } });
  }

  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ username , password, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
