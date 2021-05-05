import React from 'react';
import {Card, Img, Container} from "./styles"


function CardProduct(props) {

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