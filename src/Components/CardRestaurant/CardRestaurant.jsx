import React from 'react'
import useRequestData from "../../Hooks/useRequestData";

export default function CardRestaurant({id, complete}){
  const [restaurant] = useRequestData(`/restaurants/${id}`, null, 'restaurant')

  console.log('restaurant', restaurant)

  return(
    <>CardRestaurant</>
  )
}