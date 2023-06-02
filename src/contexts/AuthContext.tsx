import { createContext, ReactElement, useReducer } from "react";
import { userReducer, initialState } from "../reducers/UserReducer";

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
