import React, { useState, } from 'react';
import {Card, Img, DivImg, BlurImg, Description, DivAlert} from "./styles"
import AlertDialog from "../AlertDialog"


function CardProduct(props) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  
    
  console.log('props', props)
  return (
         <Card>
              <DivImg>
                <Img src={props.photoUrl} />
              </DivImg>
              <Description>
                {props.amount}
                <p>{props.name}</p>
                <p>{props.description}</p>
                <p>R${props.price.toFixed(2)}</p>
              </Description>
           <DivAlert>
             <AlertDialog handleClose={handleClose} addItemToCart={props.addItemToCart}  id={props.id} removeItemFromCart={props.removeItemFromCart} open={open} />
           </DivAlert>
         </Card>
  );
}

export default CardProduct;