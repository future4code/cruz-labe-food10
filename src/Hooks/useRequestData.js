import { useState, useEffect } from "react";
import { api } from "../Services/api";

export default function useRequestData(url, initState, id) {
  const [data, setData] = useState(initState);
  api.defaults.headers.common["auth"] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IklrVlRTSlNhbEhKRDVsR1Zob1JzIiwibmFtZSI6IlNhbSIsImVtYWlsIjoic2FtQGdtYWlsLmNvbSIsImNwZiI6IjExMS4xMTEuMTExLTEyIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYyMDA4MzA0NH0.t2yZ-LIZ86maG773j53g7D4Wxp5SPi-CBopgbbD10Fk'

  useEffect(() => {
    api
      .get(url)
      .then((response) => {
        if(id)setData(response.data[id])
        else setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);

  return [data];
}
