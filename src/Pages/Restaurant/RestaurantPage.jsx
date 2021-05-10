import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import {All, AllContent, Category, Content, DivBack, ImgBack, P} from "./styles";
import iconBack from "../../Assets/Img/back.svg";
import Loading from '../../Components/Loading/Loading'
import axios from "axios";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Footer from '../../Components/Footer/Footer'
import CardProduct from "../../Components/CardProduct/CardProduto";
import useRequestData from "../../Hooks/useRequestData";

export default function RestaurantPage() {
  const params = useParams();
  const history = useHistory();
  if(!params.id)history.goBack()
  const [restaurantDetails, setRestaurantDetails] = useRequestData(
    `/restaurants/${params.id}`,
    {},
    'restaurant'
  )
  const [categories, setCategories] = useState([]);
  const {cart, setCart, removeItemFromCart} = useContext(GlobalStateContext)
  const {selection, setSelection} = useContext(GlobalStateContext)

  useEffect(() => {
    if (restaurantDetails && restaurantDetails.products) {
      const arrayCategories = restaurantDetails.products.map((item) => {
        return item.category;
      });
      let newArrayCategories = [...arrayCategories];
      const arraySet = new Set(newArrayCategories);
      newArrayCategories = [...arraySet];
      setCategories(newArrayCategories);
    }
  }, [restaurantDetails]);

  const addItemToCart = (newItem) => {
    let newCart = [...cart];
    const index = newCart.findIndex((restaurant)=>{
      return restaurant.id === params.id
    })
    if(index>=0){
      newCart[index].products.push({
        quantity: selection,
        id: newItem.id
      })
    }
    else{
      const obj = {
        id: params.id,
        products:[{
          quantity: selection,
          id: newItem.id
        }]
      }
      newCart.push(obj)
    }
    setCart(newCart);
    alert(`${newItem.name} foi adicionado com sucesso ao carrinho!`)
    setSelection(1)
  };
  
  
  const renderCategories = categories.map((category) => {
   
    return (
      <div>
        <Category>{category}</Category>
        {restaurantDetails.products &&
          restaurantDetails.products.map((item) => {
            if(item.category === category){
              return (
                <CardProduct
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  photoUrl={item.photoUrl}
                  category={item.category}
                  amount={cart.find((cartItem)=> cartItem.id === item.id)?.amount}
                  addItemToCart={() => addItemToCart(item)}
                  removeItemFromCart={() => removeItemFromCart(item)}
                />
              );
            }
            
          })}
      </div>
    );
  });

  return (
    <All>
      <AllContent>
        <DivBack>
          <ImgBack src={iconBack} onClick={() => history.goBack()} />
          <P>Restaurante</P>
          <div></div>
        </DivBack>

        <Content>
          <CardRestaurant id={params.id} page={"Restaurant"} />
          {restaurantDetails ? renderCategories : <Loading/>}
        </Content>
        <Footer/>
      </AllContent>
    </All>
  );
}
