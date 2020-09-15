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
import { RegisterMusic } from "./components/MainPage/BandPage/RegisterMusic";

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
    </Switch>
  );
};

export default Routes;
