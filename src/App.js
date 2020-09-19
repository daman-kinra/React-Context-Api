import React from 'react';
import './app.css';
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieContext } from './MovieContext';
import AddMovie from './AddMovie';


function App() {
    
    return (
        <MovieContext>
        <div className='App'>
            <Nav />
            <MovieList  />
            <AddMovie />
        </div>
        </MovieContext>
    )
}

export default App
