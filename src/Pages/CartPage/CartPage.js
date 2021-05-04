import React, { useContext } from "react";
import  GlobalStateContext  from "../../Global/GlobalStateContext";

export default function CartPage() {
  const {restaurantDetailsData} = useContext(GlobalStateContext);


  return (
    <div>
      <h1>Carrinho</h1>

    </div>
  );
}
