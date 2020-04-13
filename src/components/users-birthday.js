import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import EcoIcon from "@material-ui/icons/Eco";

const onSearchBirthday = () => {
    // Navigate to a different page and search for which AC character has the same birthday
}

function UsersBirthday() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div>
      <Grid container spacing={3} direction="column" alignItems="center">
        <Grid item>
          Enter your birthday and find out with Animal Crossing character has
          the same birthday as you!
        </Grid>

        <Grid item>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker
              label="Your Birthday"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>

          <Button variant="contained" color="primary" onClick={onSearchBirthday} startIcon={<EcoIcon />}>
            Let's Go!
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default UsersBirthday;
