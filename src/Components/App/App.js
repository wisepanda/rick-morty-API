import Title from '../Title/title.js';
import Header from '../Header/header.js';
import './App.css';
import React, { useState, useEffect } from "react";
import DisplayCharacter from '../Character/character.js';
import Button from '../Button/button.js';


function App() {
  const [character, setCharacter] = useState({handleClick});
  
  const API_URL = `https://rickandmortyapi.com/api/character/2`;
  
 
  useEffect(()=>{
    const loadData = async() =>{
      const response = await fetch(API_URL);
      const data = await response.json();
      setCharacter(
        {
        id: data.id,
        name:data.name, 
        species:data.species, 
        status:data.status, 
        image:data.image, 
        type:data.type});
      console.log(data.name, data.species, data.status, data.image, data.type);
    }
    loadData();
  },[]);
  function handleClick(id) {
    id = (Math.floor(Math.random()* 826) + 1)
    console.log(id)
  }
  

  return (
    <div>
    <div>
      <Title/>
    </div>
      <DisplayCharacter character={character}/>
      <button onClick={handleClick}>Get a random character</button>
    </div>
  );
}

export default App;
