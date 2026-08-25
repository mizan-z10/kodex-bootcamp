import { createContext, useEffect, useState } from "react";
import { Storage } from "../utils/localStorage";

export let Auth = createContext();

export let AuthContextProvide = ({ children }) => {
  const [registeredAmin, setRegisteredAdmin] = useState([]);
  const [logInAdmin, setLogInAdmin] = useState(null);

     console.log("register admin -->" ,registeredAmin)
     console.log("login admin -->" ,logInAdmin)


  useEffect(() => {
    let data = Storage.get("registeredAdmin");
    setRegisteredAdmin(data || []);

    let ldata = Storage.get("logInAdmin");
    setLogInAdmin(ldata);
  }, []);

  return (
    <Auth.Provider
      value={{
        registeredAmin,
        setRegisteredAdmin,
        logInAdmin,
        setLogInAdmin,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
