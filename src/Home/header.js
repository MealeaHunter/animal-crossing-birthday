import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { Link } from "react-router-dom";

function Header() {
  const [menuAnchorEl, menuSetAnchorEl] = useState(null);
  const [setOpen] = useState(false);

  const onMenuClick = (event) => {
    menuSetAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    menuSetAnchorEl(null);
  };

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    typography: {
      padding: theme.spacing(2),
    },
    button: {
        padding: 0
    }
  }));

  const classes = useStyles();

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <AppBar className={classes.grow} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.grow} noWrap>
          Animal Crossing Birthdays
        </Typography>

        <IconButton onClick={onMenuClick} className={classes.button} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Popover
          open={Boolean(menuAnchorEl)}
          anchorEl={menuAnchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={Boolean(menuAnchorEl)}
                id="header-menu"
                onKeyDown={handleListKeyDown}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="/">Home</Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/Events">Events</Link>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popover>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
