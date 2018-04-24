import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardContainer from './card_container'
import ClamContainer from "./clam_container";

const Battleclam = () => (
  <Router>
    <div>
      <Route exact path="/whats-your-battleclam" component={CardContainer} />
      <Route path="/clams/:type" component={ClamContainer} />
    </div>
  </Router>
);
export default Battleclam;
