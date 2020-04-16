import React from "react";
import moment from "moment";

class CharacterBirthday extends React.Component {

  constructor(props) {
    super(props);

    this.state = { user: null }
  }

  componentDidMount() {
    const userBirthday = moment(this.props.location.selectedDate).format("ll");
    require("datejs");
    const characterData = require("../data/villagers.json");

    for (var i = 0; i < characterData.length; i++) {
      if (characterData[i].birthday) {
        if (Date.parse(characterData[i].birthday).toDateString() === Date.parse(userBirthday).toDateString()) {
          console.log(Date.parse(characterData[i].birthday).toDateString());
          console.log(characterData[i]);
          this.setState({ user: characterData[i] });
        }
      }
    }
  }

  componentWillUnmount() {
    this.setState({
      user: null
    });
  }

  render() {
    const character = JSON.stringify(this.state.user);

    return <div>{character ? character : 'nah'}</div>;
  }
}

export default CharacterBirthday;
