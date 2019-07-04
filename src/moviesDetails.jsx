import React  from 'react';
import { saveMovie } from './Starter Code/services/fakeMovieService';

const MovieDetails = (props) => {
    return (  
        <div>
            <h1> Movie : {props.match.params.id} </h1>
            <button className = 'btn btn-primary' onClick = {()=>{props.history.push('/movies')}}> Save </button>
        </div>
    );
}
 
export default MovieDetails;