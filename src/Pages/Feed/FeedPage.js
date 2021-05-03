import React from "react";
import useRequestData from "../../Hooks/useRequestData";

export default function FeedPage() {
  const [restaurants] = useRequestData('/restaurants', [], 'restaurants')

  console.log('restaurants', restaurants)
  return <h1>Feed</h1>;
}
