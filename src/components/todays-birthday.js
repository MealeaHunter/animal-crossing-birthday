import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function TodaysBirthday() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="h5" noWrap>
            Happy Birthday
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Animal Crossing Character"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Animal Crossing Character"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn More
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
