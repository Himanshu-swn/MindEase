/* eslint-disable react/prop-types */
//context api
import { createContext, useEffect, useReducer } from "react";

const initialState = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};

export const AuthContext = createContext(initialState);

const AuthReducer = (state, action) => {
  // switch (action.type) {
  //   case "LOGIN_START":
  //     return {
  //       user: "dinesh",
  //       role: "patient",
  //       token: "12341234",
  //     };

  //   case "LOGIN_SUCCESS":
  //     return {
  //       user: action.payload.user,
  //       role: action.payload.role,
  //       token: action.payload.token,
  //     };

  //   case "LOGIN_FAILURE":
  //     return {
  //       user: null,
  //       token: "",
  //       role: "",
  //     };

  //   case "LOGOUT":
  //     return {
  //       user: null,
  //       role: "",
  //       token: "",
  //     };
  
  // default:
  //   return state;
  // }
return {
    user: "Dinesh Surya",
    role: "patient",
    token: "12341234",
  };
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
  }, [state]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
