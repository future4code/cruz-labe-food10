import axios from 'axios'
import {api} from "../../Services/api";

export const getAllRestaurants=(setRestaurants)=>{
  api.defaults.headers.common["auth"] = localStorage.getItem("token");
  api.get()
}