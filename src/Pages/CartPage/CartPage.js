import React, { useContext, useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import axios from "axios";
import CardProduct from "../../Components/CardProduct/CardProduto";
import { BASE_URL } from "../../constants/url";
import {
  DivBack,
  ImgBack,
  P,
  AddressTitle,
  AddressContainer,
  PaymentMethodContent,
  Space,
  SubTotalContainer,
  SubTotalTitle,
  CartMainContent,
  SubTotalCount,
  EmptyCart,
  RestaurantAddress,
  RestaurantAddressTitle,
  RestaurantAddressInfo,
} from "./styles";
import GlobalStateContext from "../../Global/GlobalStateContext";
import useRequestData from "../../Hooks/useRequestData";
import { Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import iconBack from "../../Assets/Img/back.svg";
import Footer from "../../Components/Footer/Footer";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import theme from "../../constants/themes";
import { ThemeProvider } from "@material-ui/core/styles";
import { goToFeedPage } from "../../Coordination/coordinator";
import { DriveEta } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function CartPage() {
  const [activeOrder] = useRequestData("/active-order", {}, "order");
  const classes = useStyles();
  const history = useHistory();
  const {
    cart,
    setCart,
    removeItemFromCart,
    profile,
    restaurantOrder,
  } = useContext(GlobalStateContext);
  const [price, setPrice] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("money");

  const handlePaymentMethod = (event) => {
    setPaymentMethod(event.target.value);
  };

  const postOrder = () => {
    const products = cart.map((product) => {
      return { id: product.id, quantity: product.amount };
    });
    const restaurantId = restaurantOrder.id;
    const body = { products: products, paymentMethod: paymentMethod };
    axios
      .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then(() => {
        alert("Seu pedido foi recebido ");
        setCart([]);
        goToFeedPage(history);
      })
      .catch((err) => {
        alert(
          "Algo deu errado verifique seus pedidos, tente novamente mais tarde!"
        );
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

  return (
    <div>
      <DivBack>
        <ImgBack src={iconBack} onClick={() => history.goBack()} />
        <P>Carrinho</P>
        <div></div>
      </DivBack>
      <div>
        <AddressContainer>
          <AddressTitle>Endereço Entrega</AddressTitle>
          <p>{profile.address}</p>
        </AddressContainer>
      </div>
      {cart.length > 0 ? (
        <RestaurantAddress>
          <RestaurantAddressTitle>
            {restaurantOrder && restaurantOrder.name}
          </RestaurantAddressTitle>
          <RestaurantAddressInfo>
            {restaurantOrder && restaurantOrder.address}
          </RestaurantAddressInfo>
          <RestaurantAddressInfo>
            {restaurantOrder && restaurantOrder.deliveryTime} min
          </RestaurantAddressInfo>
        </RestaurantAddress>
      ) : null}
      <CartMainContent>
        {activeOrder ? (
          <EmptyCart> Já existe um pedido em andamento!</EmptyCart>
        ) : cart.length > 0 ? (
          cart.map((item) => {
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
          })
        ) : (
          <EmptyCart>Carrinho Vazio</EmptyCart>
        )}
      </CartMainContent>
      <SubTotalContainer>
        <SubTotalTitle>
          <p>SUBTOTAL</p>
        </SubTotalTitle>
        <div>
          <div>
            {price.length > 0 ? (
              <div>Frete R${restaurantOrder.shipping.toFixed(2)}</div>
            ) : (
              <div>Frete R$0,00</div>
            )}
          </div>
          <SubTotalCount>
            {price.length > 0 ? <div>R${price}</div> : <div>R$0,00</div>}
          </SubTotalCount>
        </div>
      </SubTotalContainer>
      <PaymentMethodContent>
        <p>Forma de Pagamento</p>
        <hr />
        <ThemeProvider theme={theme}>
          <RadioGroup value={paymentMethod} onChange={handlePaymentMethod}>
            <FormControlLabel
              value="money"
              control={<Radio />}
              label="Dinheiro"
              color="secondary"
            />
            <FormControlLabel
              value="creditcard"
              control={<Radio />}
              label="Cartão de Crédito"
              color="secondary"
            />
          </RadioGroup>
        </ThemeProvider>
      </PaymentMethodContent>
      <Space>
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => postOrder()}
          >
            CONFIRMAR
          </Button>
        </ThemeProvider>
      </Space>
      <Footer />
    </div>
  );
}
