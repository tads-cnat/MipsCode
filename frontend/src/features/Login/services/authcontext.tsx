import { createContext, useState ,useContext} from "react";

interface Providerprops {
  children: React.ReactNode;
}

interface UserContextprops {
  User : object,
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

export function AuthContext() {
  const context = useContext(Usercontext);
  return context;
}
