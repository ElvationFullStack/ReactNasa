import React from 'react'
import Home from '../Home'
import Search from './Search'
import Favorites from './Favirotes';

import { Route, Link, Switch } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Breadcrumbs } from '@material-ui/core';
import DetailFav from './DetailFav';
import { matchPath } from "react-router";


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
    // console.info('You clicked a breadcrumb.');
}

function NavBarLinks(props) {
    // console.log(props.getFavouretes().then((res)=>console.log(res,"insideNAbarlimf")))
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

         
                <Route exact path="/home" component={Home} />
                <Route exact path="/search" >
                    <Search addToFaviroutes={props.addToFaviroutes} ></Search>
                </Route>
               
                <Route exact path="/favirotes" >
                    <Favorites getFavouretes={props.getFavouretes} fav={props.fav} deleteFromFaviroutes={props.deleteFromFaviroutes}></Favorites>
                </Route>

                <Route  path="/favirotes/:_id" exact exact render={({match})=>
            
                <DetailFav getFavouretes={props.getFavouretes} match ={match} fav={props.fav}  fav={props.fav} ></DetailFav>
            }>
             
                </Route>
          

        </div>
    )
}

export default NavBarLinks
