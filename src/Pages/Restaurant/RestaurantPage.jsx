import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import { DivBack, ImgBack, P } from "./styles";
import iconBack from "../../Assets/Img/back.svg";
import Loading from '../../Components/Loading/Loading'
import axios from "axios";
import GlobalStateContext from "../../Global/GlobalStateContext";
import Footer from '../../Components/Footer/Footer'
import CardProduct from "../../Components/CardProduct/CardProduto";

export default function RestaurantPage() {
  const params = useParams();
  const history = useHistory();
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [categories, setCategories] = useState([]);
  const {cart, setCart} = useContext(GlobalStateContext)
  const {selection, setSelection} = useContext(GlobalStateContext)
   
  useEffect(() => {
    getRestaurantDetails(params.id);
  }, [params.id]);

  const getRestaurantDetails = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/rappi4D/restaurants/${params.id}`,
        { headers: { auth: localStorage.getItem("token") } }
      )
      .then((res) => {
        setRestaurantDetails(res.data.restaurant);
        console.log(res.data.restaurant);
      })
      .catch((err) => {
        alert(err);
      });
  };
  

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

    newCart.push({ ...newItem, amount: selection });
    setCart(newCart);
    alert(`${newItem.name} foi adicionado com sucesso ao carrinho!`)
    setSelection(1)
  };
console.log(cart)
  
  const renderCategories = categories.map((category) => {
    return (
      <div>
        <h1>{category}</h1>
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
                  photo={item.photoUrl}
                  category={item.category}
                  addItemToCart={() => addItemToCart(item)}
                />
              );
            }
            
          })}
      </div>
    );
  });

  return (
    <>
      <DivBack>
        <ImgBack src={iconBack} onClick={() => history.goBack()} />
        <P>Restaurante</P>
        <div></div>
      </DivBack>
      <CardRestaurant id={params.id} page={"Restaurant"} />
      {restaurantDetails ? renderCategories : <Loading/>}
      <Footer/>
    </>
  );
}
