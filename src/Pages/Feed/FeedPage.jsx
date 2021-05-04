import React, {useState, useEffect} from "react";
import useRequestData from "../../Hooks/useRequestData";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import ActiveOrder from "./ActiveOrder/ActiveOrder";
import {All, Content, Header, Title} from "./styled";

export default function FeedPage() {
  const [restaurants] = useRequestData('/restaurants', [], 'restaurants')
  const [restaurantsFilter, setRestaurantsFilter] = useState([]);


  return <All>
    <Content>
      <Header>
        <Title>
          <p>Rappi4</p>
        </Title>
        <Search restaurants={restaurants}/>
        <Filter restaurants={restaurants} setRestaurantsFilter={setRestaurantsFilter}/>
      </Header>
      <ActiveOrder />
    </Content>
  </All>
}
