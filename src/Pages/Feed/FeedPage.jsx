import React, {useState, useEffect} from "react";
import useRequestData from "../../Hooks/useRequestData";
import Search from "./Search/Search";
import Filter from "./Filter/Filter";
import ActiveOrder from "./ActiveOrder/ActiveOrder";
export default function FeedPage() {
  const [restaurants] = useRequestData('/restaurants', [], 'restaurants')
  const [restaurantsFilter, setRestaurantsFilter] = useState([]);


  return <>
    <Search restaurants={restaurants}/>
    <Filter restaurants={restaurants} setRestaurantsFilter={setRestaurantsFilter}/>
    <ActiveOrder />
  </>
}
