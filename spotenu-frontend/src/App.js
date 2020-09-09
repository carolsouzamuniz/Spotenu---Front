import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { HomePage } from "./components/HomePage";
import { UserSignupPage } from "./components/SignupPages/UserSignupPage";
import { AdminSignupPage } from './components/SignupPages/AdminSignupPage';
import { BandSignupPage } from './components/SignupPages/BandSignupPage';
import { UserLoginPage } from './components/LoginPages/UserLoginPage';
import { AdminLoginPage } from './components/LoginPages/AdminLoginPage';
import { AdminPage } from './components/MainPage/AdminPage';
import { UserPage } from './components/MainPage/UserPage';
import { BandPage } from './components/MainPage/BandPage';
import { Header } from "./components/Styles/Header";
import { Main } from "./components/Styles/Main";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  background-color: red;
  display: flex;
  flex-direction: column;
`

function App() {
  return <Container>
    <Header/>
    <Main/>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>

        <Route exact path="/signup-user">
          <UserSignupPage/>
        </Route>

        <Route exact path="/signup-band">
          <BandSignupPage/>
        </Route>
        
        <Route exact path="/signup-admin">
          <AdminSignupPage/>
        </Route>

        <Route exact path="/login-user">
          <UserLoginPage/>
        </Route>

        <Route exact path="/login-admin">
          <AdminLoginPage/>
        </Route>

        <Route exact path="/admin">
          <AdminPage/>
        </Route>

        <Route exact path="/user">
          <UserPage/>
        </Route>

        <Route exact path="/band">
          <BandPage/>
        </Route>

      </Switch>
    </Router>
  </Container>
}

export default App;
