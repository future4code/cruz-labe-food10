import GlobalStateContext from "./GlobalStateContext";
import React, { useState, useEffect } from "react";

export const GlobalState = (props) => {
  const [cart, setCart] = useState()

  const providerValue = {
   cart, setCart
  };

  return (
    <div>
      <GlobalStateContext.Provider value={providerValue}>
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};
