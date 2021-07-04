import { React, useEffect, useState, Link } from 'react'
import MiniCards from './MiniCards'
function Favorites(props) {

    const [favirote, setFavirote] = useState([])

    useEffect(() => {

        props.getFavouretes()

        setFavirote(props.fav)

    })

    return (

        <div className="search-display">
            {
                favirote.map((i, indx) => {
                    return (



                        <MiniCards deleteFromFaviroutes={props.deleteFromFaviroutes} key={indx} item={i}></MiniCards>


                    )
                })


            }
        </div>

    )
}

export default Favorites
