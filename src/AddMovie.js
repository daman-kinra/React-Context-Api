import React, {useState, useContext} from 'react';
import {Hello} from './MovieContext'

function AddMovie() {
    const [name, setName] = useState('');
    const [movie, setMovie] = useContext(Hello);
    const update = (e) =>{
        setName(e.target.value);
    }
    const add = (e) =>{
        e.preventDefault();
        setMovie(prev => [...prev, {name:name}])
    }
    return (
        <div>
            <form onSubmit={add}>
                <input type="text" name="name" onChange={update}/>
                <button type="Submit">click</button>
            </form>
        </div>
    )
}

export default AddMovie
