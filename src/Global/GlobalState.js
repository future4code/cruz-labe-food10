import GlobalStateContext from "./GlobalStateContext";
import React, { useState, useEffect } from "react";
import useRequestData from "../Hooks/useRequestData";
import {api} from '../Services/api'

export const GlobalState = (props) => {
  const [restaurantData] = useRequestData("/restaurants");
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    setRestaurantList(restaurantData);
  }, [restaurantData]);

  const providerValue = {
    restaurantList: restaurantList,
    restaurantDetails:restaurantDetails
  };

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  const getRestaurantDetails = (restaurantId) => {
    const token = window.localStorage.getItem("token");
    api
      .get(`/restaurants/${restaurantId}`, 
      {
        headers: {
          auth: token,
        },
      }
      )
      .then((response) => {
        setRestaurantDetails(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div>
      <GlobalStateContext.Provider value={providerValue}>
        {props.children}
      </GlobalStateContext.Provider>
    </div>
  );
};
