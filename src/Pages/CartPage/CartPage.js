import React, { useContext } from "react";
import  GlobalStateContext  from "../../Global/GlobalStateContext";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";

export default function CartPage() {
  const {restaurantDetailsData} = useContext(GlobalStateContext);

  //enquanto não tem cart com produtos no global state
  const cart=[
    {
      id:1, //id do restaurante
      products:[
        {
          id:'bEj2JorVLWo86iJf7OF9',
          quantity: 2
        },
        {
          id:'fMMfstMTxeos8NWTS4j1',
          quantity: 3
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Carrinho</h1>
      <CardRestaurant id={cart[0].id} page={'Cart'} />
    </div>
  );
}
