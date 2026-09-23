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
    const activeUser = {
      name: userData.name || userData.email?.split("@")[0] || "User",
      email: userData.email,
      role: userData.role || "user",
      avatar: userData.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(userData.email || "user")}&backgroundColor=2563eb`,
      ...(userData.id ? { id: userData.id } : {}),
      ...(userData._id ? { id: userData._id } : {}),
      joinedDate: userData.joinedDate || new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" }),
    };
    setUser(activeUser);
    return activeUser;
  };

  const register = (userData) => {
    return login(userData);
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("booknest_user");
    } catch (e) {
      console.error("Failed to clear user from storage:", e);
    }
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
