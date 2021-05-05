import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import InitialPage from "../Pages/InitialPage/InitialPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignUpPage from "../Pages/SignUpPage/SignUpPage";
import FeedPage from "../Pages/Feed/FeedPage";
import ProfilePage from "../Pages/ProfilePage/ProfilePage";
import AddressPage from "../Pages/AddressPage/AddressPage";
import RestaurantPage from "../Pages/Restaurant/RestaurantPage";
import EditProfilePage from "../Pages/EditProfilePage/EditProfilePage";
import CartPage from "../Pages/CartPage/CartPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={InitialPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/sign_up" component={SignUpPage} />
        <Route exact path="/feed" component={FeedPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/update_profile" component={EditProfilePage} />
        <Route exact path="/restaurant/:id" component={RestaurantPage} />
        <Route exact path="/address_form" component={AddressPage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </BrowserRouter>
  );
}
