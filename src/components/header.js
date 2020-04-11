import React, { useState, useEffect } from 'react';
import fetch from 'cross-fetch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Header() {
    const [searchAnchorEl, searchSetAnchorEl] = useState(null);
    const [menuAnchorEl, menuSetAnchorEl] = useState(null);
    
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

    const useStyles = makeStyles((theme) => ({
        grow: {
            flexGrow: 1
        },
        typography: {
            padding: theme.spacing(2),
        },
    }));

    function sleep(delay = 0) {
        return new Promise((resolve) => {
            setTimeout(resolve, delay);
        });
    }

    const classes = useStyles();

    const o = Boolean(searchAnchorEl);
    const id = o ? 'simple-popover' : undefined;

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
            await sleep(1e3); // For demo purposes.
            const countries = await response.json();

            if (active) {
                setOptions(Object.keys(countries).map((key) => countries[key].item[0]));
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <AppBar className={classes.grow} position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.grow} noWrap>
                    Animal Crossing Birthdays
                </Typography>

                <IconButton color="inherit" aria-label="search">
                    <SearchIcon onClick={onSearchClick} />
                </IconButton>

                <Popover
                    id={id}
                    open={o}
                    anchorEl={searchAnchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >

                    <Autocomplete
                        id="asynchronous-demo"
                        style={{ width: 300 }}
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        onClose={() => {
                            setOpen(false);
                        }}
                        getOptionSelected={(option, value) => option.name === value.name}
                        getOptionLabel={(option) => option.name}
                        options={options}
                        loading={loading}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search"
                                variant="outlined"
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />

                </Popover>

                <IconButton edge="end" color="inherit" aria-label="menu">
                    <MenuIcon onClick={onMenuClick} />
                </IconButton>

                <Menu
                    id="simple-menu"
                    anchorEl={menuAnchorEl}
                    keepMounted
                    open={Boolean(menuAnchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                    <MenuItem onClick={handleClose}>Events</MenuItem>
                    <MenuItem onClick={handleClose}>Birthday</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default Header;


