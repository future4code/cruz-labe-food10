import React, {useState, useEffect} from "react";
import useRequestData from "../../Hooks/useRequestData";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import ActiveOrder from "./ActiveOrder/ActiveOrder";
import {All, Content, ContentRestaurant, Header, MyCircularProgress, Title} from "./styled";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import {StylesProvider} from '@material-ui/core/styles'
import useAuthorization from "../../Hooks/useAuthetication";
import Footer from '../../Components/Footer/Footer'

export default function FeedPage() {
  useAuthorization()
  const [restaurants] = useRequestData('/restaurants', [], 'restaurants')
  const [restaurantsFilter, setRestaurantsFilter] = useState([]);
  const [loading, setLoading] = useState(true)

  const render=()=>{
    return restaurantsFilter.map(restaurant=>{
      return <CardRestaurant page={'Feed'} id={restaurant.id} key={restaurant.id}/>
    })
  }

  useEffect(()=>{
    setRestaurantsFilter(restaurants)
  },[restaurants])

  useEffect(()=>{
    if(restaurantsFilter.length>0){
      setLoading(false)
    }
  },[restaurantsFilter])

  return <All>
    <Content>
      <Header>
        <Title>
          <p>Rappi4</p>
        </Title>
        <Search restaurants={restaurants}/>
        <Filter
          restaurants={restaurants}
          setRestaurantsFilter={setRestaurantsFilter}
        />
      </Header>
      {loading?(
        <StylesProvider injectFirst>
          <MyCircularProgress />
        </StylesProvider>
      ):(
        <ContentRestaurant>
          {render()}
        </ContentRestaurant>
      )}
      <ActiveOrder />
      <Footer/>
    </Content>
  </All>
}
