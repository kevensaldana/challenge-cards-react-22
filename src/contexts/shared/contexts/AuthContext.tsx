import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import User from "../domain/User";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

const initAuthContext = {
  user: null,
};

interface AuthContext {
  user: User | null;
  setUser?: Dispatch<SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContext>(initAuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
