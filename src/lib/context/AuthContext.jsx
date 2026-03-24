import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")),
  );

  const signUp = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = [...users, { email, password }];

    if (users.find((u) => u.email === email)) {
      return { success: false, error: "email already exist!" };
    }

    localStorage.setItem("users", JSON.stringify(newUser));
    localStorage.setItem("currentUser", JSON.stringify(email));
    return { success: true };
  };

  const signIn = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.email === email && u.password === password);

    if(!user) {
      return {success: false, error: "user atau password salah atau user tidak ada!"};
    }

    localStorage.setItem("currentUser", JSON.stringify(email));
    window.location.reload();
    return { success: true };
  };

  const signOut = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ signUp, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}
