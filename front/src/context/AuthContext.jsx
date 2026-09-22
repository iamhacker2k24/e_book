import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("booknest_user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("booknest_user", JSON.stringify(user));
      } else {
        localStorage.removeItem("booknest_user");
      }
    } catch (e) {
      console.error("Failed to sync user auth state:", e);
    }
  }, [user]);

  const login = (userData) => {
    const defaultData = {
      name: userData.name || userData.email.split("@")[0],
      email: userData.email,
      avatar: userData.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${userData.email}&backgroundColor=2563eb`,
      token: userData.token || "mock-jwt-token-" + Date.now(),
      joinedDate: new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    };
    setUser(defaultData);
    return true;
  };

  const register = (userData) => {
    return login(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
