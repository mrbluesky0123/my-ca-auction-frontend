import React, { createContext, useState } from "react";

export const GlobalCommonContext = createContext();

const GlobalContext = (props) => {
  let [userId, setUserId] = useState("keedi.kim");

  return (
    <GlobalCommonContext.Provider value={{
      userId, setUserId
    }}>
      {props.children}
    </GlobalCommonContext.Provider>
  )
}

export default GlobalContext;
