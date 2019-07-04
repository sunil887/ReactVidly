import React, { Component } from 'react';
import {getGenres} from '../Starter Code/services/fakeGenreService'

class Genres extends Component {
    state = {  
        Genres : getGenres()
    }
    changeGenreClass(currentGenreName,genre){
        console.log(currentGenreName);
        if(currentGenreName === genre.name )
            {
                return 'list-group-item active';
                
;            }
        else 
            return 'list-group-item'

    }
    render() { 
        console.log(this.props)
        const {currentGenreName} = this.props;
        return (
            <div>
                <ul className = "list-group">
                    
                    {
                        this.state.Genres
                            .map(genre => <li  className ={this.changeGenreClass(currentGenreName,genre) } 
                                                onClick = {()=> this.props.onGenreChange(genre.name)}
                                            >
                                                { genre.name }</li>)
                    }
                </ul>
            </div>
          );
    }
}
 
export default Genres;