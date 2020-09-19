import React, {useContext} from 'react';

function Movie({name,price,id}) {
    
    return (
        <div>
            <h3>{name}</h3>
            <p>{id}</p>
            <h1>{price}</h1>
        </div>
    )
}

export default Movie
