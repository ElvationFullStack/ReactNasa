import { React, useEffect, useState, Link } from 'react'
import MiniCards from './MiniCards'
function Favorites(props) {

    const [favorite, setFavorite] = useState([])


    useEffect(() => {

        props.getFavorite()

        setFavorite(props.fav)

    })

    return (

        <div className="search-display">
            {
                favorite.map((i, indx) => {
                    return (

                        <MiniCards deleteFromFavorites={props.deleteFromFavorites} key={indx} item={i}></MiniCards>


                    )
                })


            }
        </div>

    )
}

export default Favorites
