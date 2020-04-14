import React, { Component } from "react";
import TodaysBirthday from "./todays-birthday.js";
import UsersBirthday from "./users-birthday.js";
import axios from "axios";

class Home extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    axios.get(`/api/today/?api_key=${process.env.REACT_APP_AC}`)
      .then((response) => {
        const characters = response.data;
        this.setState({ characters });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <TodaysBirthday today={this.state.characters} />
        <UsersBirthday />
      </div>
    );
  }
}

export default Home;
