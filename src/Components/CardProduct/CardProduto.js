import React, { useState } from 'react';
import {Card, Img, Container} from "./styles"
import AlertDialog from "../AlertDialog"

function CardProduct(props) {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  console.log(props.id)
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
                <AlertDialog handleClose={handleClose} addItemToCart={props.addItemToCart}  id={props.id} removeItemFromCart={props.removeItemFromCart} open={open} />
              </div>
            </Card>
      </div>
  );
}

export default CardProduct;