import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EcoIcon from "@material-ui/icons/Eco";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(3),
    },
    item: {
        paddingLeft: theme.spacing(2)
    },
    button: {
        backgroundColor: "#7CC9C3",
        color: "#FFF"
    },
    link: {
      color: "#FFF"
    }
  }));

const onSearchBirthday = () => {
    // Navigate to a different page and search for which AC character has the same birthday
}

function UsersBirthday() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.container} direction="column" alignItems="center">
        <Grid item>
          Enter your birthday and find out with Animal Crossing character has
          the same birthday as you!
        </Grid>

        <Grid item xs={12} container direction="row" alignItems="flex-end" justify="center" className={classes.container}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
              label="Your Birthday"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>

            <Grid item className={classes.item}>
                <Button variant="contained" className={classes.button} onClick={onSearchBirthday} startIcon={<EcoIcon />}>
                    <Link className={classes.link} to="/CharacterBirthday">Let's Go!</Link>
                </Button>
            </Grid>
        </Grid>

      </Grid>
    </div>
  );
}

export default UsersBirthday;
