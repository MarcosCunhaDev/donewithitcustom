import React, { useContext, useState } from "react";
import authStorage from "@/auth/storage";
import { jwtDecode, JwtPayload } from "jwt-decode";

export interface UserI {
  email: string;
  iat: number;
  name: string;
  userId: number;
}

interface AuthContextType {
  user: UserI | null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  logOut: () => void;
  logInUser: (authToken: string) => void;
}

const defaultState: AuthContextType = {
  user: null,
  setUser: () => {},
  logOut: () => {},
  logInUser: () => {},
};

export const AuthContext = React.createContext<AuthContextType>(defaultState);

export const AuthContextProvider = ({ children }: { children: any }) => {
  const [user, setUser] = useState(null);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const logInUser = (authToken: string) => {
    const user = jwtDecode<JwtPayload>(authToken);
    setUser(user);
    authStorage.storeToken(authToken);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logOut, logInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
