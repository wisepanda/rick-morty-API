import React, { useState, useEffect } from "react";
import Characters from "../Characters/Characters";
import Title from '../Title/title.js';
import Button from "../Button/button";
import Input from "../Input/Input";
import "../css/app.css"




function App() {

  let randomChar= (Math.floor(Math.random()* 826) + 1)
  const [characters, setCharacters] = useState([]);
  // const [id, setId] = useState((Math.floor(Math.random()* 826) + 1));
  
  
  
  const [API_URL, setAPI_URL] = useState(`https://rickandmortyapi.com/api/character/${randomChar}`);
  

  
 
  useEffect(()=>{
    const loadData = async() =>{
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data)

      const newData = ""

      if(!data.id){

        let {
          id, name, species, status, image, type, gender, location, origin
        } = data.results[0]
        setCharacters({
          id: id,
        name:name, 
        species:species, 
        status:status, 
        image:image, 
        type:type,
        gender:gender,
        location:location.name,
        origin: origin.name
        })
      }


      setCharacters({
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
  },[API_URL]);



  function handleClick() {
    // setId ((Math.floor(Math.random()* 826) + 1))
    setAPI_URL(`https://rickandmortyapi.com/api/character/${randomChar}`)

  }





  function onSubmit(text){
    setAPI_URL(`https://rickandmortyapi.com/api/character/?name=${text}`)
    // console.log(text)
  }



  return (
    <div>
      <div>
        <Title/>
        <Characters characters={characters}/>  
      <Input onSubmit={onSubmit}/>
      </div>
      <div>
        <Button handleClick={handleClick}>"Wubbalubbadubdub!"</Button>
      </div>
    </div>
  );
 }


export default App;
