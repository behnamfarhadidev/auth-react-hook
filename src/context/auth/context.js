import { createContext, useContext, useReducer } from "react";
import { AuthReducer, initialState } from "./reducers";
const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

export function useAuthState() {
  return useContext(AuthStateContext);
}

export function useAuthDispatch() {
  return useContext(AuthDispatchContext);
}

export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);
  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
