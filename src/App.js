import React from "react";
import "./App.scss";
import "typeface-roboto";
import Header from "./components/header.js";
import TodaysBirthday from "./components/todays-birthday.js";
import UsersBirthday from "./components/users-birthday.js";

function App() {
  return (
    <div className="App">
        <Header />
        <TodaysBirthday />
        <UsersBirthday />
    </div>
  );
}

export default App;
