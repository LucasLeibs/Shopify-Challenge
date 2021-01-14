import React, { Component } from 'react'
import MovieCards from '../components/MovieCards'
import SearchBar from '../components/SearchBar'
import Button from '@material-ui/core/Button';
import NominationsContainer from './NominationsContainer'

export default class MovieContainer extends Component {
    state = {
        movies:[], 
        startIndex: 0
    }
    
    fetchMovies = (query) => {
        fetch(`http://www.omdbapi.com/?s=${query}&type=movie&page=1&apikey=a5bbe8e0`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                movies: data.Search
            })
        })
    }
   
   
    render() {
        console.log(this.state.movies)
        return (
            <div>
                <SearchBar fetchMovies = {this.fetchMovies}/>
                <MovieCards movies = {this.state.movies}/>
                {/* <NominationsContainer movies = {this.state.movies} /> */}
            </div>
        )
    }
}
