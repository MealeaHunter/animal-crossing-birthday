import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EcoIcon from "@material-ui/icons/Eco";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import moment from "moment";
import PickerToolbar from "@material-ui/pickers/_shared/PickerToolbar";
import ToolbarButton from "@material-ui/pickers/_shared/ToolbarButton";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  item: {
    paddingLeft: theme.spacing(2),
  },
  toolbar: {
		display: "flex",
		flexDirection: "column",
		alignItems: "flex-start"
	},
  button: {
    backgroundColor: "#7CC9C3",
    color: "#FFF",
  },
  link: {
    color: "#FFF",
  },
}));

const CustomToolbar = function (props) {
  const { date, isLandscape, openView, setOpenView, title } = props;

  const handleChangeViewClick = (view) => (e) => {
    setOpenView(view);
  };

  const classes = useStyles();

  return (
    <PickerToolbar
      className={classes.toolbar}
      title={title}
      isLandscape={isLandscape}
    >
      <ToolbarButton
        onClick={handleChangeViewClick("date")}
        variant="h4"
        selected={openView === "date"}
        label={date.format("MMM Do")}
      />
    </PickerToolbar>
  );
};

class LocalizedUtils extends MomentUtils {
  getDatePickerHeaderText(date) {
    return moment(date).format("ll");
  }
}

function UsersBirthday() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        className={classes.container}
        direction="column"
        alignItems="center"
      >
        <Grid item>
          Enter your birthday and find out which Animal Crossing character has
          the same birthday as you!
        </Grid>

        <Grid
          item
          xs={12}
          container
          direction="row"
          alignItems="flex-end"
          justify="center"
          className={classes.container}
        >
          <MuiPickersUtilsProvider utils={LocalizedUtils}>
            <DatePicker
              label="Your Birthday"
              value={selectedDate}
              onChange={handleDateChange}
              ToolbarComponent={CustomToolbar}
            />
          </MuiPickersUtilsProvider>

          <Grid item className={classes.item}>
            <Button
              variant="contained"
              className={classes.button}
              onClick={() => handleDateChange}
              startIcon={<EcoIcon />}
            >
              <Link
                className={classes.link}
                to={{
                  pathname: "/CharacterBirthday",
                  selectedDate,
                }}
              >
                Let's Go!
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default UsersBirthday;
