import React from "react";
import "./App.css";
import { SignupUserPage } from "./components/SignupPages/SignupUserPage";
import { SignupBandPage } from "./components/SignupPages/SignupBandPage";
import { SignupAdminPage } from "./components/SignupPages/SignupAdminPage";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <div>
      <HomePage/>
      <SignupUserPage />
      <SignupAdminPage />
      <SignupBandPage />
    </div>
  );
}

export default App;
