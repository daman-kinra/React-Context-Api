import React,{useContext} from 'react'
import { Hello } from './MovieContext'

function NAv() {
    const [movie, setMovie]  = useContext(Hello);
    return (
        <div>
          <h3>XcLass</h3>  
          <p>{'Total Repos:'}{movie.public_repos}</p>
        </div>
    )
}

export default NAv
