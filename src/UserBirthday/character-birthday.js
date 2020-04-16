import React from "react";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "../Home/todays-birthday.scss";

// const useStyles = makeStyles({
//   root: {
//     width: 345,
//   },
//   link: {
//     color: "#3f948d",
//   },
// });

class CharacterBirthday extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: null };
  }

  componentDidMount() {
    const userBirthday = moment(this.props.location.selectedDate).format("ll");
    require("datejs");
    const characterData = require("../data/villagers.json");

    for (var i = 0; i < characterData.length; i++) {
      if (characterData[i].birthday) {
        if (
          Date.parse(characterData[i].birthday).toDateString() ===
          Date.parse(userBirthday).toDateString()
        ) {
          this.setState({ user: characterData[i] });
        }
      }
    }
  }

  componentWillUnmount() {
    this.setState({
      user: null,
    });
  }

  render() {
    const character = this.state.user;

    return (
      character ? 
      <div className="character-birthday">
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5" noWrap>
              You have the same birthday as {character.name}!
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Card>
              <CardMedia
                component="img"
                alt="Animal Crossing Character"
                height="200"
                image={character["villager-img-src"]}
                title="Animal Crossing Character"
              />
              <CardActions disableSpacing>
                <Typography variant="h5" component="h2">
                  {character.name}
                </Typography>
                <Button size="small">
                  <a href={character["name-href"]} target="_blank">Learn More</a>
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5" noWrap>
              {character.birthday}
            </Typography>
          </Grid>
        </Grid>
      </div> : 'ww'
    );
  }
}

export default CharacterBirthday;
