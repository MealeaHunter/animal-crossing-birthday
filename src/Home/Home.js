import React, { Component } from "react";
import TodaysBirthday from "./todays-birthday.js";
import UsersBirthday from "../UserBirthday/users-birthday.js";

class Home extends Component {
  render() {
    return (
      <div>
        <TodaysBirthday />
        <UsersBirthday />
      </div>
    );
  }
}

export default Home;
