import React, {useState, useContext} from 'react';
import {Hello} from './MovieContext'

function AddMovie() {
    const [name, setName] = useState('');
    const [user, setUser] = useContext(Hello);
    const update = (e) =>{
        setName(e.target.value);
    }
    const add = (e) =>{
        e.preventDefault();
        setUser(prev => {
            
            return ({...prev, name: name})
        })
        setName('')
    }
    return (
        <div>
            <form onSubmit={add}>
                <input type="text" name="name" onChange={update} value={name}/>
                <button type="Submit">click</button>
            </form>
        </div>
    )
}

export default AddMovie
