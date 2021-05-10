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

  const removeItemFromCart = (itemToRemove, idRestaurant) => {
    const indexRestaurant = cart.findIndex(restaurant=>{
      return restaurant.id === idRestaurant
    })
    const indexProduct = cart[indexRestaurant].products.findIndex(item=>{
      return itemToRemove.id === item.item.id
    })
    let newCart = [...cart];

    if (newCart[indexRestaurant].products[indexProduct].quantity === 1) {
      newCart[indexRestaurant].products.splice(indexProduct, 1)
    } else {
      newCart[indexRestaurant].products[indexProduct].quantity--
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
