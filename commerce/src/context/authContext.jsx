import { useState, useEffect, createContext } from "react";
import axios from "axios";

const AuhContext = createContext();

const AuhContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  // default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;

  useEffect(() => {
  const data = localStorage.getItem("auth")
  if (data) {
    const parseData = JSON.parse(data)
    setAuth({
     user:parseData.user,
     token:parseData.token,
    })
  }
  },[])

  const contextValue = {
    auth,
    setAuth,
  };

  return (
    <AuhContext.Provider value={contextValue}>{children}</AuhContext.Provider>
  );
};

export { AuhContext, AuhContextProvider };
