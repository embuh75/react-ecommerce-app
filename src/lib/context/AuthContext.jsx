import { useState } from "react";
import { AuthContext } from "./createContext";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(localStorage.getItem("currentUser"));

  console.log(user);

  const signUp = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = [...users, { email, password }];

    if (users.find((u) => u.email === email)) {
      return { success: false, error: "email already exist!" };
    }

    localStorage.setItem("users", JSON.stringify(newUser));
    localStorage.setItem("currentUser", JSON.stringify(email));
    setUser(users);
    return { success: true };
  };

 /*  const signIn = () => {

  } */

  const signOut = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signUp, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
