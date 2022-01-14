import react from 'react';



function DisplayCharacter({character}){
   return(
       <div>
       <h1>{character.name}</h1>
       <h3>{character.species}</h3>
       <h3>{character.status}</h3>

       <figure><img src={character.image}/></figure>
       </div>
   )};
export default DisplayCharacter
  
  