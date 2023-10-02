import { createContext, useReducer,useEffect } from "react";
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};


// const userFromLocalStorage = localStorage.getItem("user");
// let initialUserState = null;

// try {
//   initialUserState = JSON.parse(userFromLocalStorage);
// } catch (error) {
  
// }
// const INITIAL_STATE = {
//   currentUser: initialUserState,
// };



export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser));
  }, [state.currentUser]);


  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};