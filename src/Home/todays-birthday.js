import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import "./todays-birthday.scss";
import villagersBirthday from "../Shared/map-birthdays";

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  link: {
    color: "#3f948d",
  },
});

const TodaysBirthday = () => {
  const classes = useStyles();
  const info = villagersBirthday();

  return (
    <div className="todays-birthday">
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5" noWrap>
            Today's Birthday
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="Animal Crossing Character"
              height="200"
              image={info["villager-img-src"]}
              title="Animal Crossing Character"
            />
            <CardActions disableSpacing>
              <Typography variant="h5" component="h2">
                {info.name}
              </Typography>
              <Button size="small">
                <a className={classes.link} href={info["name-href"]}>
                  Learn More
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" noWrap>
            {info.birthday}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default TodaysBirthday;
