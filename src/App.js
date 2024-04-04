import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {

const [nasaData, setNasaData] = useState();

useEffect(() => {
axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}`)
.then(response => {
  console.log(response.data);
  setNasaData(response.data);
  
})
}, []);

// this is needed for the initial render since state is empty. 
// state is empty until we call setState within axios
if(nasaData === undefined){
  return <h1>loading...</h1>
}
  return (
    <div className="App">
      <NasaCard 
       title = {nasaData.title}
       date = {nasaData.date}
       imgUrl = {nasaData.url}
       desc = {nasaData.explanation}
      />

      </div>

  );
}

export default App;
