import React, { useEffect, useState, useContext } from "react"
import useAuthentication from '../../Hooks/useAuthetication'
import axios from "axios"
import { BASE_URL } from "../../constants/url"
import edit from '../../Assets/Img/edit.svg'
import avatar_on from '../../Assets/Img/avatar_on.svg'
import avatar from '../../Assets/Img/avatar.svg'
import shopping_cart from '../../Assets/Img/shopping-cart.svg'
import homepage from '../../Assets/Img/homepage.svg'
import { Title, OrderTitle, AddressContainer, 
  AddressTitle, TitleContainer, ProfileContainer, 
  FooterContainer, HistoryOrderTitle, 
  FooterImgContainer, FooterImg, OrderHistoryCard,
  OrderHistoryContainer, HistoryContainer } from './styled'
import { EditImg } from './styled'
import OrderHistoryCards from '../../Components/OrderHistoryCards/OrderHistoryCards'
import { useHistory } from "react-router-dom"
import {
  goToEditProfilePage,
  goToAddressPage,
  goToFeedPage,
  goToCart,
  goToProfilePage
} from "../../Coordination/coordinator"

const ProfilePage = () => {
  useAuthentication()
  const history = useHistory()
  const [profile, setProfile] = useState({})
  const [orders, setOrders] = useState({})

  useEffect(() => {
    const ordersHistory = () => {
      axios
        .get(`${BASE_URL}/orders/history`, {
          headers: {
            auth: localStorage.getItem("token")
          }
        })
        .then((res) => {
          console.log(res.data.orders);
          setOrders(res.data);
        })
        .catch((err) => console.log(err));
    };
    ordersHistory()
  }, []);

  useEffect(() => {
    const getProfile = () => {
      axios
        .get(`${BASE_URL}/profile`, {
          headers: {
            auth: localStorage.getItem('token')
          }
        })
        .then((res) => {
          console.log(res.data)
          setProfile(res.data.user)
        })
        .catch((err) => console.log(err))
    };
    getProfile()
  }, [])


  const listOfOrders = orders && orders.orders && orders.orders.map((order) => {
    console.log(order.restaurantName)
    return (
      <OrderHistoryCards
      key={order.id}
      restaurant={order.restaurantName}
      created={order.createdAt}
      expires={order.expiresAt}
      total={order.totalPrice}
      />
    )
  })


  return (
    <div>
      <TitleContainer>
        <Title>
          Meu Perfil
        </Title>
      </TitleContainer>
      <ProfileContainer>
        <p>
          {" "}
          {profile.name}
          <EditImg
            src={edit}
            alt={"editar"}
            onClick={() => goToEditProfilePage(history)}
          />
        </p>
        <p>{profile.email}</p>
        <p>{profile.cpf}</p>
      </ProfileContainer>
      {/* ProfileAddressCard - component*/}
      <AddressContainer>
      <EditImg
            src={edit}
            alt={"editar"}
            onClick={() => goToAddressPage(history)}
          />
        <AddressTitle>Endereço cadastrado</AddressTitle>
        <p>
          {profile.address}
          </p>
      </AddressContainer>
      {/* ProfileOrderHistory - component */}
      <TitleContainer>
        <OrderTitle>Histórico de pedidos</OrderTitle>
      </TitleContainer>
      {/* ProfileOrderCards - component*/}
      <OrderHistoryContainer>{console.log(listOfOrders)}
        {listOfOrders ? (
          <HistoryContainer>
            <OrderHistoryCard>
            {listOfOrders}
            </OrderHistoryCard>
          </HistoryContainer>
        ) : (
          <HistoryOrderTitle>Você não realizou nenhum pedido</HistoryOrderTitle>
        )}
      </OrderHistoryContainer>
      <FooterContainer>
        {profile ? (
          <FooterImgContainer>
            <FooterImg src={homepage} alt={"homepage"} onClick={() => goToFeedPage(history)}/>
            <FooterImg src={shopping_cart} alt={"carrinho"} onClick={() => goToCart(history)} />
            <FooterImg src={avatar_on} alt={"perfil"} onCLick={() => goToProfilePage(history)}/>
          </FooterImgContainer>
        ) : 
        (
          <FooterImgContainer>
            <FooterImg src={homepage} alt={"homepage"} onClick={() => goToFeedPage(history)}/>
            <FooterImg src={shopping_cart} alt={"carrinho"} onClick={() => goToCart(history)} />
            <FooterImg src={avatar} alt={"perfil"} onCLick={() => goToProfilePage(history)}/>
          </FooterImgContainer>
        )}
        Footer
        </FooterContainer>
    </div>
  );
};

export default ProfilePage;