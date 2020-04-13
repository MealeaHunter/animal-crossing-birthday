import React, { useState, useEffect } from "react";
import fetch from "cross-fetch";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

function Header() {
  const [searchAnchorEl, searchSetAnchorEl] = useState(null);
  const [menuAnchorEl, menuSetAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  const onSearchClick = (event) => {
    searchSetAnchorEl(event.currentTarget);
  };

  const onMenuClick = (event) => {
    menuSetAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    searchSetAnchorEl(null);
    menuSetAnchorEl(null);
  };

  /*
    Hardcoded for now
    */
  const characters = [
    { name: "Iabelle" },
    { name: "Tom Nook" },
    { name: "Ace" },
  ];

  //   useEffect(() => {
  //     let active = true;

  //     if (!loading) {
  //       return undefined;
  //     }

  //     (async () => {
  //       const response = await fetch(
  //         "https://country.register.gov.uk/records.json?page-size=5000"
  //       );

  //       await response.json();

  //       if (active) {
  //         setOptions(
  //           Object.keys(characters).map((key) => characters[key].item[0])
  //         );
  //       }
  //     })();

  //     return () => {
  //       active = false;
  //     };
  //   }, [loading]);

  //   useEffect(() => {
  //     if (!open) {
  //       setOptions([]);
  //     }
  //   }, [open]);

  // <IconButton color="inherit" aria-label="search">
  //           <SearchIcon onClick={onSearchClick} />
  //         </IconButton>

  //         <Popover
  //           id={"search-character"}
  //           open={Boolean(searchAnchorEl)}
  //           anchorEl={searchAnchorEl}
  //           onClose={handleClose}
  //           anchorOrigin={{
  //             vertical: "bottom",
  //             horizontal: "center",
  //           }}
  //           transformOrigin={{
  //             vertical: "top",
  //             horizontal: "right",
  //           }}
  //         >
  //           <Autocomplete
  //             id="character-autocomplete"
  //             style={{ width: 300 }}
  //             open={open}
  //             onOpen={() => {
  //               setOpen(true);
  //             }}
  //             onClose={() => {
  //               setOpen(false);
  //             }}
  //             getOptionSelected={(characters, value) =>
  //               characters.name === value.name
  //             }
  //             getOptionLabel={(characters) => characters.name}
  //             options={characters}
  //             loading={loading}
  //             renderInput={(params) => (
  //               <TextField
  //                 {...params}
  //                 label="Search Character"
  //                 variant="outlined"
  //                 InputProps={{
  //                   ...params.InputProps,
  //                   endAdornment: (
  //                     <React.Fragment>
  //                       {false ? (
  //                         <CircularProgress color="inherit" size={20} />
  //                       ) : null}
  //                     </React.Fragment>
  //                   ),
  //                 }}
  //               />
  //             )}
  //           />
  //         </Popover>

  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    typography: {
      padding: theme.spacing(2),
    },
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

        <IconButton edge="end" color="inherit" aria-label="menu">
          <MenuIcon onClick={onMenuClick} />
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
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Events</MenuItem>
                <MenuItem onClick={handleClose}>Your Birthday</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popover>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
