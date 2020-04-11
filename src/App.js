import React from 'react';
import './App.scss';
import 'typeface-roboto';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  grow: {
    flexGrow: 1
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
        <AppBar className={classes.grow} position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.grow} noWrap>
              Animal Crossing Birthdays
            </Typography>

            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>

            <IconButton edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>


    </div>
  );
}

export default App;
