import React from 'react'

export default function Button({handleClick}) {
    return (
        <div className='button-container'>
            <button className='button'onClick={handleClick}>"Wubbalubbadubdub!"</button>
        </div>
    )
}
