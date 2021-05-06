import React, { useContext, useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import CardProduct from "../../Components/CardProduct/CardProduto";
import { Card, Img } from "./styles";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Dialog from '../../Components/AlertDialog'
import axios from "axios";
import Footer from '../../Components/Footer/Footer'

export default function CartPage() {
  const { cart, setCart } = useContext(GlobalStateContext);
  const [address, setAddress] = useState();
  
  useEffect(() => {
    getAddress();
  }, []);

  const getAddress = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4D/profile/address",
        { headers: { auth: localStorage.getItem("token") } }
      )
      .then((res) => {
        setAddress(res.data.address);
      })
      .catch((err) => {
        alert("erro ao tentar pegar o endereço");
      });
  };
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
  console.log(cart)
  return (
    <div>
      <h1> Carrinho</h1>
      <div>
        <h4>Endereço de Entrega</h4>
        </div>
      {cart.map((item)=>{
         return (
          <CardProduct
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            photo={item.photoUrl}
            category={item.category}
            removeItemFromCart={() => removeItemFromCart(item)}
          />
         );
      })}
      <Footer/>
    </div>
  );
}
