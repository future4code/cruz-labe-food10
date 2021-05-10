import React, { useContext, useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import CardProduct from "../../Components/CardProduct/CardProduto";
import {
  AddressContainer,
  Header,
  CartEmpty,
  Container,
  ContentRestaurant,
  DivPrice, DivPagamento, DivRadio, Content, All
} from "./styles";
import GlobalStateContext from "../../Global/GlobalStateContext";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import {BASE_URL} from "../../constants/url";
import {api} from "../../Services/api";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CartPage() {
  const { cart, removeItemFromCart, setCart } = useContext(GlobalStateContext);
  const [price, setPrice] = useState(0);
  const [address, setAddress] = useState();
  const [shipping, setShipping] = useState(0);
  const [payment, setPayment] = useState('creditcard');

  useEffect(() => {
    getAddress();
  }, []);

  const getShipping = async ()=>{
    try {
      const res = await api.get(`/restaurants/${cart[0].id}`)
      setShipping(res.data.restaurant.shipping)
    }
    catch (err){
      console.log('erro', err)
    }
  }

  useEffect(()=>{
    if(cart.length>0)getShipping()
  },[cart])

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
      let cartPrice = cart[0].products.map((item) => {
          return item.item.price * item.quantity;
        });
      const total = cartPrice.reduce(
        (total, currentElement) => total + currentElement
      );
      setPrice(total+shipping);
    }
  };
  
  const placeOrder = async()=>{
    const products = cart[0].products.map(item=>{
      return {
        id: item.item.id,
        quantity: item.quantity
      }
    })
    const body = {
      products: products,
      paymentMethod: payment
    }
    console.log('body', body)
    try{
      const res = await api.post(`/restaurants/${cart[0].id}/order`, body)
      window.alert('Pedido realizado')
      const newCart = [...cart]
      newCart.splice(0,1)
      setCart(newCart)
    }
    catch (err){
      window.alert(err.response.data.message)
    }
  }

  const onClickConfirme = ()=>{
    if(cart.length===0){
      window.alert('Carrinho vazio')
      return
    }
    if(window.confirm('Confirmar pedido?')){
      placeOrder()
    }
  }

  const onChangeRadio = (e)=>{
    setPayment(e.target.value)
  }

  useEffect(() => {
    getPrice();
  }, [cart]);

  return (
    <All>
      <Container>
        <Header> Meu carrinho</Header>
        <AddressContainer>
          <p>Endereço de entrega</p>
          {address &&
            <p>{address.street}, {address.number} - {address.neighbourhood}</p>
          }
        </AddressContainer>

        {cart.length > 0 &&
          <ContentRestaurant>
            <CardRestaurant id={cart[0].id} page={'Cart'}/>
          </ContentRestaurant>
        }

        <Content>
          {cart.length>0 && cart[0].products.map((item) => {
            return (
              <CardProduct
                key={item.item.id}
                id={item.item.id}
                idRestaurant={cart[0].id}
                name={item.item.name}
                description={item.item.description}
                price={item.item.price}
                amount={item.quantity}
                photoUrl={item.item.photoUrl}
                category={item.item.category}
                removeItemFromCart={() => removeItemFromCart(item.item, cart[0].id)}
              />
            );
          })}

          {cart.length > 0 ? <></> : <CartEmpty> Carrinho Vazio</CartEmpty>}

          <DivPrice>
            <p>Frete R${shipping.toFixed(2)}</p>
            <div>
              <p>SUBTOTAL</p>
              <p>R${price.toFixed(2)}</p>
            </div>
          </DivPrice>

          <DivPagamento>
            <div>Forma de pagamento</div>
            <DivRadio>
              <input
                type={'radio'}
                value={'money'}
                name={'money'}
                onClick={onChangeRadio}
              />
              <label htmlFor={'money'}>Dinheiro</label>
            </DivRadio>
            <DivRadio>
              <input
                type={'radio'}
                value={'creditcard'}
                name={'money'}
                onClick={onChangeRadio}
                defaultChecked={true}
              />
              <label htmlFor={'money'}>Cartão de crédito</label>
            </DivRadio>
          </DivPagamento>

          <Button variant="contained" color="secondary" onClick={onClickConfirme}>
            CONFIRMAR
          </Button>
        </Content>
        <Footer />
      </Container>
    </All>
  );
}
