import Title from '../Title/title.js';
import Header from '../Header/header.js';
import './App.css';
import React, { useState, useEffect } from "react";
import DisplayCharacter from '../Character/character.js';


function App() {
  const [character, setCharacter] = useState([]);
  const API_URL = `https://rickandmortyapi.com/api/character/1`;
  
  useEffect(()=>{
    const loadData = async() =>{
      const response = await fetch(API_URL);
      const data = await response.json();
      setCharacter(
        {name:data.name, 
        species:data.species, 
        status:data.status, 
        image:data.image, 
        type:data.type});
      console.log(data.name, data.species, data.status, data.image, data.type);
    }
    loadData();
  },[]);

    

  return (
    <div>
    <div>
      <Title/>
    </div>
      <DisplayCharacter character={character}/>
    </div>
  );
}

export default App;
