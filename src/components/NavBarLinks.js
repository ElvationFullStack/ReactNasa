import React from 'react'
import Home from '../Home'
import Search from './Search'
import Favirotes from './Favirotes'

import { Route, Link, Switch } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Breadcrumbs } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function NavBarLinks(props) {

    const classes = useStyles();

    return (
        <div>
            {
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/home">
                        <HomeIcon className={classes.icon} />
                        Home
                    </Link>
                    <Link to="/search">
                        <SearchIcon className={classes.icon} />
                        search
                    </Link>
                    <Link to="/favirotes">
                        <FavoriteIcon className={classes.icon} />
                        faviroutes
                    </Link>
                </Breadcrumbs>
            }

            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/search" component={Search} />
                <Route path="/favirotes" component={Favirotes} />

            </Switch>

        </div>
    )
}

export default NavBarLinks
