import { useState, useEffect, type ReactNode } from "react";
import { AuthContext } from "../hooks/useAuth";

export type AuthContextType = {
  user: string | null;
  token: string | null;
  login: (user: string, token: string) => void;
  logout: () => void;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // load from localStorage on app start
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedToken = localStorage.getItem("token");
    if (savedUser && savedToken) {
      setUser(savedUser);
      setToken(savedToken);
    }
  }, []);

  const login = (user: string, token: string) => {
    localStorage.setItem("user", user);
    localStorage.setItem("token", token);
    setUser(user);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
