import { createContext, useState } from "react";

export let Auth = createContext();

export let AuthContextProvide = ({ children }) => {
    const [registeredAmin, setRegisteredAmin] = useState([])
    const [logInAdmin, setLogInAdmin] = useState(null)

  return <Auth.Provider
    value={{
      registeredAmin,
      setRegisteredAmin,
      logInAdmin,
      setLogInAdmin,
    }}
  >{children}</Auth.Provider>;
};
