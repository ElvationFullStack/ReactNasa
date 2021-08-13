import React from 'react'
import NavBarLinks from './components/NavBarLinks'

function NavBar(props) {
    return (
            <NavBarLinks addToFavorites={props.addToFavorites} getFavorite={props.getFavorite} fav={props.fav} 
           

            deleteFromFavorites={props.deleteFromFavorites}>
            </NavBarLinks>
    )
}

export default NavBar
