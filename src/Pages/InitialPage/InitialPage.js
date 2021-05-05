import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../Assets/Img/logo-rappi4-invert@2x.png";
import { Background } from "./Style";

const InitialPage = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");

    setTimeout(() => {
      token ? history.push("/feed") : history.push("login");
    }, 2000);
  });
  return (
    <Background>
      <img src={Logo} alt="future eats logo" />
    </Background>
  );
};

export default InitialPage;
