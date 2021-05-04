import React from 'react'
import {useParams} from 'react-router-dom'
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";

export default function RestaurantPage(){
  const {id} = useParams()

  return(
    <>
      <CardRestaurant id={id} />
    </>
  )
}