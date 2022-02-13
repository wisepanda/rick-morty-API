import React from "react";


function Characters({characters}){
   return(
       <div>
          <h1> {characters.name}</h1>

       <div className="img-container">
           <div className="box">
               <img src={characters.image} alt="img"/>
           </div> 
        </div>
        <ul>
            <li>Species: {characters.species}</li>
            <li>Status: {characters.status}</li>
            <li>Type: {characters.type}</li>
            <li>Gender: {characters.gender}</li>
            <li>Location: {characters.location}</li>
            <li>Origin: {characters.origin}</li>
        </ul>
       </div>
   )};
export default Characters
  
  