import React, { useContext } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import CardProduct from "../../Components/CardProduct/CardProduto";
import { Card, Img } from "./styles";
export default function CartPage() {
  //enquanto não tem cart com produtos no global state
  const cart = [
    {
      id: 1, //id do restaurante
      products: [
        {
          id: "5omTFSOBYiTqeiDwhiBx",
          category: "Salgado",
          description: "Esfiha deliciosa, receita secreta do Habibs.",
          name: "Bibsfiha queijo",
          price: 1,
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg",
        },
        {
          id: "5qVBu990QDEcBPOzitMy",
          description: "Kibe árabe de verdade",
          category: "Salgado",
          name: "Kibe",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031407_66194536.jpg",
          price: 5.5,
        },
        {
          id: "8CKulpHeAAm1QQqWpReI",
          description: "Batata frita crocante e sequinha.",
          name: "Batata Frita",
          price: 9.5,
          category: "Acompanhamento",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031409_66194560.jpg",
        },
        {
          id: "KqHR80VJp9my0eBLEHvk",
          category: "Pizza",
          price: 31.9,
          description: "Pizza crocante de diversos sabores",
          photoUrl:
            "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031245_66194219.jpg",
          name: "Pizza",
        }
      ],
    },
  ];
  const cartItem = cart[0].products.map((item) => {
    return (
      <CardProduct
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        photo={item.photoUrl}
        category={item.category}
      />
    );
  });

  return (
    <div>
      <h1>Carrinho</h1>
      <CardRestaurant id={cart[0].id} page={"Cart"} />
      {cart &&
        cart[0].products.map((item) => {
          return (
            <Card>
              <div>
                <Img src={item.photoUrl} />
              </div>
              <div>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>{item.price.toFixed(2)}</div>
              </div>
            </Card>
          );
        })}
    </div>
  );
}
