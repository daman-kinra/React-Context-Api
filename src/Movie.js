import React, {useContext} from 'react';

function Movie({name, id, url, naam}) {
    
    return (
        <div>
            <h3>{name}</h3>
            <p>{id}</p>
            <img src={url}></img>
            <p>
                {naam}
            </p>
        </div>
    )
}

export default Movie
