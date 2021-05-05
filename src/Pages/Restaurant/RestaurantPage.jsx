import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import {DivBack, ImgBack, P} from "./styled";
import iconBack from '../../Assets/Img/back.svg'

export default function RestaurantPage(){
  const {id} = useParams()
  const history = useHistory()

  return(
    <>
      <DivBack>
        <ImgBack src={iconBack} onClick={()=>history.goBack()}/>
        <P>Restaurante</P>
        <div></div>
      </DivBack>
      <CardRestaurant id={id} page={'Restaurant'}/>
    </>
  )
}