import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Home from "./landingpage";
import AboutMe from "./aboutme";
import Contact from "./contact";
import Resume from "./resume";
import Projects from "./projects";
const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/landingpage" component={Home}/>
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/resume" component={Resume} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main;