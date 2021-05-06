import React, { useEffect, useState } from "react"
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
  OrderHistoryContainer } from './styled'
import { EditImg } from './styled'
import { useHistory } from "react-router-dom"
import {
  goToEditProfilePage,
  goToEditAddressPage,
  goToFeedPage,
  goToCart,
  goToProfilePage
} from "../../Coordination/coordinator"

const ProfilePage = () => {
  useAuthentication()
  const history = useHistory()
  const [profile, setProfile] = useState({})
  const [order, setOrder] = useState({})

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

  useEffect(() => {
    const ordersHistory = () => {
      axios
        .get(`${BASE_URL}/orders/history`, {
          headers: {
            // auth: localStorage.getItem("token")
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFUMEVHclRKWmJST3FNeHdUc0hjIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTEzIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYyMDE2MDkzNn0.-ubAiJ4H374qzPYCCZAFpePv9-NyBJiC4dYPKiDZlLc"
          }
        })
        .then((res) => {
          console.log(res.data);
          setOrder(res.data.user);
        })
        .catch((err) => console.log(err));
    };
    ordersHistory();
  }, []);

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
            onClick={() => goToEditAddressPage(history)}
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
      <OrderHistoryContainer>
        {order ? (
          <AddressContainer>
            <OrderHistoryCard>
            <p>Bullger Vila Madalena</p>
            <p>23 outubro 219</p>
            <h3>SUBTOTAL R$89,00</h3>
            </OrderHistoryCard>
          </AddressContainer>
        ) : (
          <HistoryOrderTitle>Você não realizou nenhum pedido</HistoryOrderTitle>
        )}
      </OrderHistoryContainer>
      <FooterContainer>
        {profile ? (
          <FooterImgContainer>
            <FooterImg src={homepage} alt={"homepage"} onClick={() => goToFeedPage(history)}/>
            <FooterImg src={shopping_cart} alt={"carrinho"} onClick={() => goToCart()} />
            <FooterImg src={avatar_on} alt={"perfil"} onCLick={() => goToProfilePage()}/>
          </FooterImgContainer>
        ) : 
        (
          <FooterImgContainer>
            <FooterImg src={homepage} alt={"homepage"} onClick={() => goToFeedPage(history)}/>
            <FooterImg src={shopping_cart} alt={"carrinho"} onClick={() => goToCart()} />
            <FooterImg src={avatar} alt={"perfil"} onCLick={() => goToProfilePage()}/>
          </FooterImgContainer>
        )}
        Footer
        </FooterContainer>
    </div>
  );
};

export default ProfilePage;
