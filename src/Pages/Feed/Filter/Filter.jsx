import React, {useState, useEffect} from 'react'
import {All, Button} from "./styled";

export default function Filter({restaurants, setRestaurantsFilter}){
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    const newCategories = [...categories]
    for(const restaurant of restaurants){
      let i
      for(i=0; i<newCategories.length; i++){
        if(restaurant.category===newCategories[i][0])break
      }
      if(i===newCategories.length)newCategories.push([restaurant.category, false])
    }
    setCategories(newCategories)
  },[restaurants])

  const filter = (category)=>{
    const restaurantsFilter = restaurants.filter((restaurant)=>{
      if(restaurant.category === category || category==='')return restaurant
    })
    setRestaurantsFilter(restaurantsFilter)
  }

  const setActive = (index)=>{
    const newCategories = [...categories]
    for(let i=0; i<newCategories.length; i++){
      if(index===i){
        newCategories[i][1] = !newCategories[i][1]
        if(newCategories[i][1])filter(newCategories[i][0])
        else filter('')
      }
      else{
        newCategories[i][1] = false
      }
    }
    setCategories(newCategories)
  }

  const render = ()=>{
    return categories.map((category, index)=>{
      return (
        <Button
          key={index}
          active={category[1]}
          onClick={()=>setActive(index)}
        >
          {category[0]}
        </Button>
      )
    })
  }

  return(
    <All>
      {render()}
    </All>
  )
}