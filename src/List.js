import React, {useContext} from 'react'
import {Data} from './ContextFunc'

function List() {
    const {value1, value2} = useContext(Data);
    const [name, setName] = value2;
    const [user, setUser] = value1;
    return (
        <div>
            <h1>
                {name}
            </h1>
            <h1>
                {user.name}
            </h1>
        </div>
    )
}

export default List
