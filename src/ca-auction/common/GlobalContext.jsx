import React, { createContext, useState } from "react";

export const GlobalCommonContext = createContext();

const GlobalContext = (props) => {
  let [userId, setUserId] = useState(null);
  let [userRole, setUserRole] = useState(null);


  return (
    <GlobalCommonContext.Provider value={{
      userId, setUserId, userRole, setUserRole
    }}>
      {props.children}
    </GlobalCommonContext.Provider>
  )
}

export default GlobalContext;
