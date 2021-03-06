import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ScrollToTop from "../src/components/ScrollToTop";
import ResultsPage from "./pages/ResultsPage";
import Navigation from "./components/Navigation";
import ShowMoviePage from "./pages/ShowMoviePage";
import ShowTvPage from "./pages/ShowTvPage";
const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Navigation />

      <Switch>
        <Route path="/results" component={ResultsPage} />
        <Route path="/show" component={ShowMoviePage} />
        <Route path="/showTv" component={ShowTvPage} />
        <Route path="/" component={HomePage} />
        <HomePage />
      </Switch>
    </Router>
  );
};

export default App;
