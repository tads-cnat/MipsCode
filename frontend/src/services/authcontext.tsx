import { createContext, useState } from "react";
import api from "./api";

interface Providerprops {
  children: React.ReactNode;
}

interface UserContextprops {
  User: object,
  addUser: (User: object) => void;
}

export const Usercontext = createContext({} as UserContextprops);

export const AuthProvider = ({ children }: Providerprops) => {
  const [User, setUser] = useState({} as object);

  const addUser = (UserData: object) => {
    setUser(UserData);
  };

  return (
    <Usercontext.Provider
      value={{
        User,
        addUser,
      }}
    >
      {children}
    </Usercontext.Provider>
  );
};



export async function AuthContext() {
  //const context = useContext(Usercontext);
  const userId = sessionStorage.getItem("userId");

  if (!userId) {
    return "User Not Found";
  }

  try {
    const res = await api.get(`/users/${userId}`)
    if (res) {
      return res.data
    }

  } catch (error) {
    if (error) {
      return error;
    }
  }

}
