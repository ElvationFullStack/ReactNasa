import React from 'react'
import NavBarLinks from './components/NavBarLinks'

function NavBar(props) {
    return (
            <NavBarLinks addToFaviroutes={props.addToFaviroutes} getFavouretes={props.getFavouretes} fav={props.fav} 
            deleteFromFaviroutes={props.deleteFromFaviroutes}>
            </NavBarLinks>
    )
}

export default NavBar
