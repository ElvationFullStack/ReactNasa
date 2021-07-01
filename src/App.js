import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import NavBar from './NavBar';
import { useState } from 'react';
import axios from 'axios';
function App() {
const [api_url,setApiUrl]=useState("")

 async function getImages () {
  return axios.get(`${api_url}images`)
}

  async function addToFaviroutes(fav) {
    let postResponse = await axios.post(`${api_url}images`, fav)
    console.log(postResponse.status)
    if (postResponse.status === 201) {
      // this.genereteSucssesMsg("add")
      // this.handleAlertModalChange()
    //  getDataFromDb()
    }
  }

     async function getDataFromDb ()  {
      const response = await getImages()
      this.setState({ data: response.data })
    }
  
    function mode_api_url () {
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
        <NavBar addToFaviroutes={addToFaviroutes}> </NavBar>
      </Router>
    </div>
  );
}

export default App;
