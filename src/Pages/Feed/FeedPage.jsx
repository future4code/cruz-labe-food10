import React, {useState, useEffect} from "react";
import useRequestData from "../../Hooks/useRequestData";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";

export default function FeedPage() {
  const [restaurants] = useRequestData('/restaurants', [], 'restaurants')
  const [restaurantsFilter, setRestaurantsFilter] = useState([]);
  const [activeOrder] = useRequestData('/active-order',{}, 'order')

  console.log('activeOrder', activeOrder)

  return <>
    <Search restaurants={restaurants}/>
    <Filter restaurants={restaurants} setRestaurantsFilter={setRestaurantsFilter}/>
  </>
}
