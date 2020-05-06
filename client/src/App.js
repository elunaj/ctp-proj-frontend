import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/results" component={ResultsPage} />
        <Route path="/" component={HomePage} />
        <HomePage />
      </Switch>
    </Router>
  );
};

export default App;
