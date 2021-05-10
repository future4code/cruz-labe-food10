import React, { useContext, useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import CardProduct from "../../Components/CardProduct/CardProduto";
import {Card, Img, AddressTitle, AddressContainer, Header, CartEmpty, Container} from "./styles";
import GlobalStateContext from "../../Global/GlobalStateContext";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CartPage() {
  const { cart, removeItemFromCart } = useContext(GlobalStateContext);
  const [price, setPrice] = useState([]);
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

  const getPrice = () => {
    if (cart.length > 0) {
      let cartPrice =
        cart &&
        cart.map((item) => {
          return item.price * item.amount;
        });
      const total = cartPrice.reduce(
        (total, currentElement) => total + currentElement
      );
      setPrice(total.toFixed(2));
    }
  };
  

  useEffect(() => {
    getPrice();
  }, [cart]);

  console.log('cart',cart)

  return (
    <Container>
      <Header> Meu carrinho</Header>
      <AddressContainer>
        <p>Endereço de entrega</p>
        {address &&
          <p>{address.street}, {address.number} - {address.neighbourhood}</p>
        }
      </AddressContainer>

      {cart.map((item) => {
        return (
          <CardProduct
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            amount={item.amount}
            photoUrl={item.photoUrl}
            category={item.category}
            removeItemFromCart={() => removeItemFromCart(item)}
          />
        );
      })}
      <div>
        {cart.length > 0 ? <></> : <CartEmpty> Carrinho Vazio</CartEmpty>}
        <h2>TOTAL</h2>
      </div>
      <Button variant="contained" color="secondary">
        CONFIRMAR
      </Button>
      <div>
        <h1>Colocar espaço aqui</h1>
      </div>
      <Footer />
    </Container>
  );
}
