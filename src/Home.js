import { React, useState, useEffect } from 'react'
import axios from 'axios'
import CardDisplay from './components/CardDisplay'

const apod_api = "https://api.nasa.gov/planetary/apod?api_key=nZSfzro7xhbmgHS95jj6Ob66bc8Irc4xfayYTJIm"
export default function Home() {

    const [apodData, setApodData] = useState({})


    useEffect(() => {
        const res = axios.get(apod_api)

        res.then(response => {
            setApodData(response.data)
        })



    }, [])
    return (
        <div>
            home

            <CardDisplay apod={apodData}></CardDisplay>
        </div>
    )
}
