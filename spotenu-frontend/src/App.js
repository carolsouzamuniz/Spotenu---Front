import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SignupUserPage }from './pages/SignupUserPage';
import { SignupBandPage } from './pages/SignupBandPage';

function App() {
  return (
    <div>
      {/* <SignupUserPage/> */}
      <SignupBandPage/>
    </div>
  );
}

export default App;
