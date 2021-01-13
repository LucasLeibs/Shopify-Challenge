import React, { Component } from 'react'
import MovieCards from '../components/MovieCards'
import SearchBar from '../components/SearchBar'
export default class MovieContainer extends Component {
    state = {
        movies:[]
    }
    
    fetchMovies = (query) => {
        fetch(`http://www.omdbapi.com/?t=${query}&apikey=a5bbe8e0`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                movies: data
            })
        })
    }

    render() {
        console.log(this.state.movies)
        return (
            <div>
                <SearchBar fetchMovies = {this.fetchMovies}/>
                <MovieCards movies = {this.state.movies}/>
            </div>
        )
    }
}
