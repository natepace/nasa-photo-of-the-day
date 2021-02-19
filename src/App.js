import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/header';
import Footer from './components/footer';
import Pic from './components/pic';


function App() {
  const [nasaData, setNasaData] = useState([]);
  useEffect(()=>{
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=k2u0GaPPpg8eMAaiNw28h5l3KHD3g5aBgZjTVjPl`)
    .then((res)=>{
      setNasaData(res.data);
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err,"youbad");
    })
  },[])
  return (
    <StyledBackground className="App">
    <Header />
    <Pic bigPic = {nasaData.hdurl} parker = {nasaData.copyright}/>
    <Footer
    title={nasaData.title}
    explanation={nasaData.explanation}
    date={nasaData.date}
    />
    </StyledBackground>
  );
}


const StyledBackground = styled.div`
background-image: url("https://images.starregister.com/2.jpg");
padding: 2%


`


export default App;

