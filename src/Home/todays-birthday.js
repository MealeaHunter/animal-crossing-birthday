import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./todays-birthday.scss";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  link: {
    color: "#3f948d"
  }
});

function TodaysBirthday() {
  const classes = useStyles();

  return (
    <div className="todays-birthday">
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5" noWrap>
            Happy Birthday
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="Animal Crossing Character"
              height="200"
              image="https://nookipedia.com/w/images/9/95/Isabelle_NH.png"
              title="Animal Crossing Character"
            />
            <CardActions disableSpacing>
                <Typography variant="h5" component="h2">
                    Isabelle
                </Typography>
                <Button size="small">
                    <Link className={classes.link} to="/CharacterInfo">Learn More</Link>
                </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" noWrap>
            April 12th
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default TodaysBirthday;
