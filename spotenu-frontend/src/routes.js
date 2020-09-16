import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { UserSignupPage } from "./components/SignupPages/UserSignupPage";
import { BandSignupPage } from "./components/SignupPages/BandSignupPage";
import { AdminSignupPage } from "./components/SignupPages/AdminSignupPage";
import { UserAndBandLoginPage } from "./components/LoginPages/UserAndBandLoginPage";
import { AdminLoginPage } from "./components/LoginPages/AdminLoginPage";
import { AdminPage } from "./components/MainPage/AdminPage";
import { UserPage } from "./components/MainPage/UserPage";
import { BandPage } from "./components/MainPage/BandPage";
import { Menu2 } from "./components/MainPage/UserPage/Menus/Menu2";
import { Menu3 } from "./components/MainPage/UserPage/Menus/Menu3";
import { Menu4 } from "./components/MainPage/UserPage/Menus/Menu4";
import { Menu5 } from "./components/MainPage/UserPage/Menus/Menu5";
import { Menu6 } from "./components/MainPage/UserPage/Menus/Menu6";

const Routes = () => {
  return (
    <Switch>
      <Route component={HomePage} exact path="/" />
      <Route component={UserSignupPage} exact path="/signup-user" />
      <Route component={BandSignupPage} exact path="/signup-band" />
      <Route component={AdminSignupPage} exact path="/signup-admin" />
      <Route component={UserAndBandLoginPage} exact path="/login" />
      <Route component={AdminLoginPage} exact path="/login-admin" />
      <Route component={AdminPage} exact path="/admin" />
      <Route component={UserPage} exact path="/user" />
      <Route component={BandPage} exact path="/band" />
      <Route component={Menu2} exact path="/user/menu2" />
      <Route component={Menu3} exact path="/user/menu3" />
      <Route component={Menu4} exact path="/user/menu4" />
      <Route component={Menu5} exact path="/user/menu5" />
      <Route component={Menu6} exact path="/user/menu6" />


    </Switch>
  );
};

export default Routes;
