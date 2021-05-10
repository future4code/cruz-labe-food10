import React, { useState, } from 'react';
import {Card, Img, DivImg, Description, DivAlert, TopText, MiddleText, BottomText} from "./styles"
import AlertDialog from "../AlertDialog"


function CardProduct(props) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  
    
  return (
         <Card>
              <DivImg>
                <Img src={props.photoUrl} />
              </DivImg>
              <Description>
                <TopText>
                  <p>{props.name}</p>
                  {props.amount>0? (
                    <p>{props.amount}</p>
                  ):(<></>)}
                </TopText>
                <MiddleText>
                  {props.description}
                </MiddleText>
                <BottomText>
                  <p>R${props.price.toFixed(2)}</p>
                  <AlertDialog handleClose={handleClose} addItemToCart={props.addItemToCart}  id={props.id} removeItemFromCart={props.removeItemFromCart} open={open} />
                </BottomText>
                {/*{props.amount}*/}
                {/*<p>{props.name}</p>*/}
                {/*<p>{props.description}</p>*/}
                {/*<p>R${props.price.toFixed(2)}</p>*/}
              </Description>
         </Card>
  );
}

export default CardProduct;