import { React, useEffect, useState } from 'react'
import CardDisplay from './CardDisplay'
import MiniCards from './MiniCards'

export default function DetailFav(props) {
  
  const [fav, setFav] = useState({})
  useEffect(() => {
    props.getFavouretes()
    const fav_id = props.match.params._id
    const favTemp = props.fav.find(f => f._id == fav_id)
    setFav(favTemp)
  },[])
 
  return (
    <div>
      {
        props.fav.length<1?<div></div>:<MiniCards item={props.fav.find(f => f._id ==  props.match.params._id)}></MiniCards>
      }
      <p>detail</p>
    </div>
  )
}
