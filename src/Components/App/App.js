import React, { useState, useEffect } from "react";
import Characters from "../Characters/Characters";
import Title from '../Title/title.js';
import Input from "../Input/Input";
import "../css/app.css"




function App() {
  const [characters, setCharacters] = useState([]);
  const [id, setId] = useState(1);

 
  
  const API_URL = `https://rickandmortyapi.com/api/character/${id}`;

  
 
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
  },[id]);



  function handleClick() {
    setId ((Math.floor(Math.random()* 826) + 1))
  }


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
