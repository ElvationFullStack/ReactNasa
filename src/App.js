import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import NavBar from './NavBar';
import { React, useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const [api_url, setApiUrl] = useState("")
  const [favorites, setFavorites] = useState([])
  const [updateData, setUpdateData] = useState(true)
  useEffect(() => {
     mode_api_url()
     getFavorites()
  },[])
  useEffect(() => {
    getFavorites()
    
  
  },[favorites])

  async function addToFavorites(fav) {

    let postResponse = await axios.post(`${api_url}images`, fav)
    if (postResponse.status === 201) {

    }
  }

  async function deleteFromFavorites(deleteId) {
    console.log("-------delete ",deleteId)
    let deletResponse = await axios.delete(`${api_url}images`, { data: {_id:deleteId }})
    if (deletResponse.status === 204) {
      alert("deleted succsfuly")

    }
  }

  async function getFavorites() {
    const response = await axios.get(`${api_url}images`)
    setFavorites(response.data)
  }
  function mode_api_url() {
    let url
    let port = process.env.PORT || "3005"
    if (process.env.NODE_ENV === 'development') {
      url = `http://localhost:${port}/`
    }

    if (process.env.NODE_ENV === 'production') {
      url = `https://react-bank-musa.herokuapp.com/:${port}`
    }
    setApiUrl(url)

  }


  return (
    <div className="App">
      <Router>
        {
          <NavBar addToFavorites={addToFavorites} getFavorite={getFavorites} fav={favorites}
          deleteFromFavorites={deleteFromFavorites}> </NavBar>
        }
      </Router>
    </div>
  );
}

export default App;
