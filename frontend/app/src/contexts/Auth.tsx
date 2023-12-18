// Auth.jsx

import React, { createContext, useState } from "react";

export const AuthContext = createContext({});
interface props {
    children: React.ReactNode;
  }

const AuthProvider:React.FC<props> = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;