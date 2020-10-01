import React, {useState} from 'react'
import {ContextFunc} from './ContextFunc'
import List from './List'
function App() {
    const [input, setInput] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState({name: 'Hello', age: 20})
    const handleInput = () =>{
            setInput(name);  
            setName('');
    }
    return (
        <div>
            <input type="text"
            value={name}
            onChange={e=>setName(e.target.value)}
            />
            <button onClick={handleInput}>Click</button>
        <ContextFunc input={input} user={user}>
        
             <List />

        </ContextFunc>
        </div>
    )
}

export default App
