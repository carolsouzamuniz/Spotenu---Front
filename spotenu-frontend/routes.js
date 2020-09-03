import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { LoginPage } from './src/components/LoginPage';
import { SignupUserPage } from './src/components/SignupPages/SignupUserPage';
import { SignupAdminPage } from './src/components/SignupPages/SignupAdminPage';
import { SignupBandPage } from './src/components/SignupPages/SignupBandPage';
import { HomePage } from './src/components/HomePage';


const Routes = ()=>{
  return(
     <BrowserRouter>
      <Switch>   
        <Route component={LoginPage} exact path='/userlogin'/>
        <Route component={SignupUserPage} exact path='user/signupUSER'/>
        <Route component={SignupAdminPage} exact path='user/signupADMIN'/>
        <Route component={SignupBandPage} exact path='band/signupBAND'/>
        <Route component={HomePage} exact path='/home' />
        <Route  path='/'>
            <h1>
            Ops!
            <br/> <br/> 
            Page not found.
            </h1>
        </Route>
      </Switch>
    </BrowserRouter> 
  )
};
export default Routes