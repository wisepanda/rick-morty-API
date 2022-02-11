import React, { useState, useEffect } from "react";
import Characters from "../Characters/Characters";
import Title from '../Title/title.js';
import Input from "../Input/Input";
import "../css/app.css"




function App() {
  const [characters, setCharacters] = useState([]);
  const [id, setId] = useState((Math.floor(Math.random()* 826) + 1));
  //const [charInput, setCharInput] = useState("")

 
  
  const API_URL = `https://rickandmortyapi.com/api/character/${id}`;
 // const API_URL2 = `https://rickandmortyapi.com/api/character/${charInput}`;

  
 
  useEffect(()=>{
    const loadData = async() =>{
      const response = await fetch(API_URL);
      const data = await response.json();
      setCharacters(
        {
        id: data.id,
        name:data.name, 
        species:data.species, 
        status:data.status, 
        image:data.image, 
        type:data.type,
        gender:data.gender,
        location:data.location.name,
        origin: data.origin.name

      });
      console.log(data);
    }
    loadData();
  },[id, API_URL]);



  function handleClick() {
    setId ((Math.floor(Math.random()* 826) + 1))
  }

  // write a function that takes in a string all lower cases
  // on click we are searching the api for the name
  // we need a state 





  return (
    <div>
    <div>
      <Title/>
      <Input />
      <button onClick={handleClick}>"Wubbalubbadubdub!"</button>
    </div>
      <Characters characters={characters}/>
      
     
    </div>
  );
}

export default App;
