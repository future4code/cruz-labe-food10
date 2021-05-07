import GlobalStateContext from "./GlobalStateContext";
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BASE_URL } from "../constants/url"

export const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [selection, setSelection] = useState(1);
  const [profile, setProfile] = useState({});
  
  useEffect(() => {
    const getProfile = () => {
      axios
        .get(`${BASE_URL}/profile`, {
          headers: {
            auth: localStorage.getItem('token')
          }
        })
        .then((res) => {
          console.log(res.data)
          setProfile(res.data.user)
        })
        .catch((err) => console.log(err))
    };
    getProfile()
  }, [])

  const removeItemFromCart = (itemToRemove) => {
    const index = cart.findIndex((item) => item.id === itemToRemove.id);
    let newCart = [...cart];
    if (newCart[index].amount === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].amount -= 1;
    }
    setCart(newCart);
  };

  const providerValue = {
    cart,
    setCart,
    selection,
    setSelection,
    profile,
    setProfile,
    removeItemFromCart
  };

  return (
    <div>
      <GlobalStateContext.Provider value={providerValue}>
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};
