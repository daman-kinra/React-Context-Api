import React, {useState, createContext, useEffect} from 'react';
import uuid from 'uuid/dist/v4';

export const Hello = createContext();

 export const MovieContext = (props) => {
    const [user, setUser] = useState({})
    const [aaa, setaaa] = useState('')
    useEffect(()=>{
        fetch('https://api.github.com/users/daman-kinra')
        .then(res=>res.json())
        .then(data =>{
            setUser(data);
        })
    },[aaa])
    return (
        <div>
            <Hello.Provider value={[user, setUser]}>
                {props.children}
            </Hello.Provider>
        </div>
    )
}

