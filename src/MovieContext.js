import React, {useState, createContext} from 'react';
import uuid from 'uuid/dist/v4';

export const Hello = createContext();

 export const MovieContext = (props) => {
    const [movie, setMovie] = useState([
        {
            name: 'Daman',
            price: '40$',
            id: uuid()
        },
        {
            name: 'Aayush',
            price: '50$',
            id: uuid()
        },
        {
            name: 'Ravi',
            price: '60$',
            id: uuid()
        }
    ])
    return (
        <div>
            <Hello.Provider value={[movie, setMovie]}>
                {props.children}
            </Hello.Provider>
        </div>
    )
}

