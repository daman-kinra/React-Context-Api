import React,{useContext} from 'react'
import Movie from './Movie';
import { Hello } from './MovieContext'


function MovieList() {
    const [movie, setMovie] = useContext(Hello);

    return (
        <div>
            {movie.map(item =>{
                return(
                <Movie name={item.name} price={item.price} id={item.id} key={item.id}/>
                )
            })}
        </div>
    )
}

export default MovieList
