import React,{useContext} from 'react'
import Movie from './Movie';
import { Hello } from './MovieContext'


function MovieList() {
    const [user, setUser] = useContext(Hello);
    return (
        <div>
            <Movie name={user.login} id={user.id} url={user.avatar_url} naam={user.name}/>
        </div>
    )
}

export default MovieList
