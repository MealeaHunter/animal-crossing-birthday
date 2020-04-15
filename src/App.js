import React, { Component } from "react";
import "./App.scss";
import "typeface-roboto";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import TodaysEvent from "./TodaysEvent/TodaysEvent";
import CharacterBirthday from "./CharacterBirthday/CharacterBirthday";
import Home from "./Home/Home";
import Header from "./Home/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/Events" component={TodaysEvent} />
            <Route path="/CharacterBirthday" component={CharacterBirthday} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
