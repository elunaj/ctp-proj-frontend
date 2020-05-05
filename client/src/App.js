import React, { Component } from "react";
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <HomePage />
    </div>
  );
};

export default App;
