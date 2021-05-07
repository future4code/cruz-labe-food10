import React, { useState } from "react";
import {
  Card,
  Img,
  AmountBox,
  ProductTitle,
  ProductText,
  ProductDescription,
  ProductContainer,
  AmountContent,
  ProductInfo,
  ImgContent,
} from "./styles";
import AlertDialog from "../AlertDialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";

function CardProduct(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card>
          <Img background={props.photoUrl} />
        <ProductInfo>
          {props.amount ? (
            <AmountBox>
              <AmountContent >{props.amount}</AmountContent>
            </AmountBox>
          ) : (
            <div></div>
          )}
          <ProductDescription>
            <ProductTitle>{props.name}</ProductTitle>
            <ProductText>{props.description}</ProductText>
            <span>R${props.price.toFixed(2)}</span>
          </ProductDescription>

          <AlertDialog
            handleClose={handleClose}
            addItemToCart={props.addItemToCart}
            id={props.id}
            removeItemFromCart={props.removeItemFromCart}
            open={open}
          />
        </ProductInfo>
      </Card>
    </div>
  );
}

export default CardProduct;
