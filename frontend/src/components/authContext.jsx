import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [state, setState] = useState({
    isAuth: false,
    token: null,
  });

  const Login = (token) => {
    setState({
      ...state,
      isAuth: true,
      token,
    });
  };

  const Logout = () => {
    setState({
      ...state,
      isAuth: false,
      token: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState: state, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
