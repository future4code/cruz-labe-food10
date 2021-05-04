import React from "react";
import useRequestData from "../../Hooks/useRequestData";
import Search from "./Search/Search";

export default function FeedPage() {
  const [restaurants] = useRequestData('/restaurants', [], 'restaurants')


  return <>
    <h1>Feed</h1>
    <Search />
  </>
}
