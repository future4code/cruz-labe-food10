import React, { useState } from 'react';
import {Card, Img, Container} from "./styles"


function CardProduct(props) {
  const [cart, setCart] = useState([])
   const addItemToCart = ()=>{
    const index = cart.findIndex((i) => i.id === newItem.id);
    let newCart = [...cart];
    if (index === -1) {
      newCart.push({ ...newItem, amount: 1 });
    } else {
      newCart[index].amount += 1;
    }
    setCart(newCart);
   }
  // const changeButtonAddRemover = () =>{
  //   const index = cart
  // }
  return (
      <div>
         <Card>
              <div>
                <Img src={props.photoUrl} />
              </div>
              <div>
                <div>{props.name}</div>
                <div>{props.description}</div>
                <div>{props.price.toFixed(2)}</div>
              </div>
            </Card>
      </div>
  );
}

export default CardProduct;