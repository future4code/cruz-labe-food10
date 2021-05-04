import React from 'react'
import useRequestData from "../../Hooks/useRequestData";

export default function CardRestaurant({id, page}){
  const [restaurant] = useRequestData(`/restaurants/${id}`, null, 'restaurant')

  console.log('restaurant', restaurant)

  return(
    restaurant ?(
    <>
      {(page==='Feed'||page==='Restaurant') &&
        <img src={restaurant.logoUrl} />
      }

      <p>Nome:{restaurant.name}</p>

      {page==='Restaurant' &&
        <p>{restaurant.category}</p>
      }

      {(page==='Feed'||page==='Restaurant')&&
        <p>{restaurant.deliveryTime}min  Frete:R${restaurant.shipping}</p>
      }

      <p>{restaurant.address}</p>

      {page==='Cart' &&
        <p>{restaurant.deliveryTime}min</p>
      }
    </>):(
      <></>
    )
  )
}