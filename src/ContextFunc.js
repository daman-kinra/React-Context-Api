import React, {useState, createContext, useEffect} from 'react';

export const Data = createContext();
export function ContextFunc(props) {
    const [name, setName] = useState(props.input);
    const [user, setUser] = useState(props.user)
    useEffect(()=>{
        setName(props.input)
        setUser(props.user)
    })

    return (
        <div>
           <Data.Provider value={{value1: [user,setUser], value2: [name, setName]}}>
               {props.children}
           </Data.Provider> 
        </div>
    )
}

