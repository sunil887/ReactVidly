import React, { Component } from 'react';
import { getMovies } from '../Starter Code/services/fakeMovieService'
import _ from 'lodash'
import Pagination from './pagination';
import  {Paginate } from '../utils/paginate'
import Genres from './genreList'
import MoviesTable from './moviesTable';
import { getGenres } from '../Starter Code/services/fakeGenreService';

class Movies extends Component {
    constructor(){
        super();
        this.deleteMovie = this.deleteMovie.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);        
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.changeLike = this.changeLike.bind(this); 
        this.sort = this.sort.bind(this)   
    }

    state = {  
                Movies : getMovies(),
                pageSize:4,
                currentPage:1,
                sortedColumn:{ path : 'title',order:'asc'},
                currentGenreName : getGenres()[0].name,
                
            }

    changeLike(movie){  
        let localMovie = [...this.state.Movies];
        let index = localMovie.indexOf(movie);

        localMovie[index].liked = !localMovie[index].liked;
        this.setState({Movies:localMovie})
        
    }

    sort(path){
        this.setState({sortedColumn:{path:path, order:'asc'}});
    }

    handlePageChange(page){

        this.setState({currentPage:page});
    }
    handleGenreChange(genreName){
        let allMovie = getMovies();
        this.setState({currentPage:1});
        if(genreName !== 'All Genres')
            allMovie = allMovie.filter(movie =>{ if(movie.genre.name === genreName) return movie });
            this.setState({Movies:allMovie ,
                currentGenreName : genreName
            })
    }

    deleteMovie(id){
        const movie = this.state.Movies
                         .filter((value)=>{if(value._id !== id) return value })
                    
                         
        
        this.setState({Movies:movie})           
    }
    
    
    render() { 

        const { Movies , pageSize , currentPage, sortedColumn }  = this.state;
        
        const sortedMovies = _.sortBy(Movies,sortedColumn.path,sortedColumn.order);

        const PagedMovies =  Paginate(sortedMovies ,currentPage ,pageSize)

        return (  <div>
                        <div>
                            <div style = {{float: "left",width:100}}>
                                <Genres  currentGenreName    = {this.state.currentGenreName} 
                                         onGenreChange = { this.handleGenreChange}/>
                            </div>
                            <div style = {{marginLeft: 500}}>                        
                            <Pagination count = { this.state.Movies.length } 
                                perPageCount = { this.state.pageSize }
                                onPageChange = {this.handlePageChange}
                                currentPage = {this.state.currentPage}
                            />
                            </div>
                        </div> 
                            <div> 
                                <MoviesTable PagedMovies = {PagedMovies}
                                             changeLike = {this.changeLike}
                                             deleteMovie = {this.deleteMovie}
                                             onSort = {this.sort}

                                /> 
                            </div>
                        </div>
                
                    );
    }
}
 
export default Movies;