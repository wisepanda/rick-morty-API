import Title from '../Title/title.js';
import Header from '../Header/header.js';
import './App.css';
import React, { useState, useEffect } from "react";


function App() {
  const API_URL = `https://rickandmortyapi.com/api/character/1`;

  const [character, setCharacter] = useState([]);

  useEffect(()=>{
    loadData();
  },[]);

  const loadData = async() =>{
    const response = await fetch(API_URL);
    const data = await response.json();

    setCharacter(data.name, data.species, data.status, data.image, data.type);
    console.log(data.name, data.species, data.status, data.image, data.type);
  }
  return (
    <div>
    <div>
      <Title/>
    </div>
      <Header/>
    </div>
  );
}

export default App;
