import React, { Component } from 'react';
import Like from './like';
import {Link} from 'react-router-dom'

class MoviesTable extends Component {
    render(){
        
        const { PagedMovies ,changeLike,deleteMovie,onSort} = this.props;

    return (  
    
    <div  style ={{float :"left", marginLeft: 150}}>
        <span>showing {PagedMovies.length} movies on page</span>
        <table className = "table">
        <thead >
        <tr>
            <th >id</th>
            <th onClick = { ()=> { onSort('title')}}>title</th>
            <th onClick = { ()=> { onSort('genre')}}>genre</th>
            <th onClick = { ()=> { onSort('numberInStock')}}>numberInStock</th>
            <th onClick = { ()=> { onSort('dailyRentalRate')}}>dailyRentalRate</th>
            <th> like </th>
        </tr>
        </thead>
        {PagedMovies.map((movie,index) =>{return <tr>
                                                <td >{index+1}</td> 
                                                <td><Link to = {`/movies/${movie._id}`}>{movie.title}</Link></td>
                                                <td>{movie.genre.name}</td>
                                                <td>{movie.numberInStock}</td>
                                                <td>{movie.dailyRentalRate}</td>
                                                <td onClick = {()=>changeLike(movie)}>
                                                    <Like liked = {movie.liked}/>
                                                </td>
                                                <td onClick = {()=> deleteMovie(movie._id)}
                                                    className = "btn btn-sm btn-warning">
                                                    Delete
                                                </td>   
                                                
                                                </tr>})}
        
        </table>
    </div>);

    }
}
 
export default MoviesTable;