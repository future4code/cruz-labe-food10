import GlobalStateContext from "./GlobalStateContext";
import React, { useState, useEffect } from "react";

export const GlobalState = (props) => {
  const [cart, setCart] = useState([])
  const [selection, setSelection] = useState(1);

  const providerValue = {
   cart, setCart, selection, setSelection
  };

  return (
    <div>
      <GlobalStateContext.Provider value={providerValue}>
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};
