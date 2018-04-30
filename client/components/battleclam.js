import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardContainer from './card_container'
import ClamContainer from "./clam_container";
import RoutesContainer from "./routes"

const Battleclam = () => (
  <Router>
    <RoutesContainer />
  </Router>
);
export default Battleclam;
