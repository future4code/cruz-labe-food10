import React, {useState, useEffect} from "react";
import useRequestData from "../../../Hooks/useRequestData";
import {All, DivText, Img} from "./styled";
import iconClock from '../../../Assets/Img/clock.svg'

export default function ActiveOrder() {
  const [activeOrder] = useRequestData('/active-order',{}, 'order')

  return(
    activeOrder && activeOrder.totalPrice?(
      <All>
        <Img src={iconClock} />
        <DivText>
          <p>Pedido em andamento</p>
          <p>{activeOrder.restaurantName}</p>
          <p>SUBTOTAL R${activeOrder.totalPrice.toFixed(2)}</p>
        </DivText>
      </All>
    ):(
      <></>
    )
  )
}
