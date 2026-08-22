import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
const AuthContext = createContext();

function getInitialAuth() {
  return localStorage.getItem("shopzone-auth") === "true";
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(getInitialAuth);

  useEffect(() => {
    localStorage.setItem("shopzone-auth", String(isAuthenticated));
  }, [isAuthenticated]);

  function loginAsGuest() {
    setIsAuthenticated(true);
  }

  function logout() {
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loginAsGuest, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}