import React from 'react'
import useRequestData from "../../Hooks/useRequestData";
import {All, Content, Img, Name, Text} from "./styled";

export default function CardRestaurant({id, page}){
  const [restaurant] = useRequestData(`/restaurants/${id}`, null, 'restaurant')

  return(
    restaurant ?(
    <All>
      <Content page={page}>
        {(page==='Feed'||page==='Restaurant') &&
          <Img src={restaurant.logoUrl} />
        }

        <Name>{restaurant.name}</Name>

        {page==='Restaurant' &&
          <Text>{restaurant.category}</Text>
        }

        {(page==='Feed'||page==='Restaurant')&&
          <Text>{restaurant.deliveryTime}min  Frete:R${restaurant.shipping}</Text>
        }

        <Text>{restaurant.address}</Text>

        {page==='Cart' &&
          <Text>{restaurant.deliveryTime}min</Text>
        }
      </Content>
    </All>):(
      <></>
    )
  )
}