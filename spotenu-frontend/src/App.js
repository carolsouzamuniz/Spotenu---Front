import React from 'react';
import './App.css';
import { SignupUserPage }from './components/SignupPages/SignupUserPage';
import { SignupBandPage } from './components/SignupPages/SignupBandPage';
import { SignupAdminPage } from './components/SignupPages/SignupAdminPage';

function App() {
  return (
    <div>
      <SignupUserPage/>
      <SignupAdminPage/>
      <SignupBandPage/>

    </div>
  );
}

export default App;
