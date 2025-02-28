import { useState } from "react"

export default function Input({ onSubmit }) {

    const [text, setText] = useState("");

    function handleChange(event) {
        setText(event.target.value)
        console.log(text)        
    }
    return (
        <div className="input" >
            <input onChange={handleChange} value={text} placeholder="Enter a Character"></input>
            <button onClick={function(){
                 onSubmit(text);
            }}>my selection</button>
            
        </div>
    )
}

