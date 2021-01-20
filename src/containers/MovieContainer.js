import React, { Component } from "react";
import MovieCards from "../components/MovieCards";
import SearchBar from "../components/SearchBar";

import photo from "../shopify.png";

export default class MovieContainer extends Component {
  state = {
    movies: [],
    startIndex: 0,
    progress: 0,
    startIndex: 0
  };

  fetchMovies = (query) => {
    
    fetch(
      `http://www.omdbapi.com/?s=${query}&type=movie&page=1&apikey=a5bbe8e0`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          movies: data.Search,
          progress: 0, 
          startIndex: 0
        });
      });
  };
  addProgress = () => {
  let movies = this.state.movies.slice(0,9)
  switch (movies.length) {
    case 9:
      if(this.state.progress < 100) {
      this.setState({ progress: this.state.progress + 50 })
      } else {

      };
      break;
      case 8:
      if(this.state.progress < 100) {
        this.setState({ progress: this.state.progress + 50 })
        } else {

        };
    case 7:
      if(this.state.progress < 100) {
        this.setState({ progress: this.state.progress + 50 })
        } else {

        };
    case 6:
      if(this.state.progress < 100) {
        this.setState({ progress: this.state.progress + 100})
        } else {

        };
        break;
    case 5:
      if(this.state.progress < 100) {
        this.setState({ progress: this.state.progress + 100})
        } else {

        };
        break;
    case 4:
      if(this.state.progress < 100) {
        this.setState({ progress: this.state.progress + 100})
        } else {

        };
        break;
    case 3:
      this.setState({ progress: 100 });
      break;
    case 2:
      this.setState({ progress: 100 });
      break;
    case 1:
      this.setState({ progress: 100 });
  }
}
decreaseProgress = () => {
  let movies = this.state.movies.slice(0,9)
switch (movies.length) {
      
  case 9:
    this.setState({ progress: this.state.progress -50 });
    break;
  case 8:
    this.setState({ progress: this.state.progress - 50 });
    break;
  case 7:
    this.setState({ progress: this.state.progress - 50 });
    break;
  case 6:
    this.setState({ progress: this.state.progress - 100 });
    break;
  case 5:
    this.setState({ progress: this.state.progress - 100 });
    break;
  case 4:
    this.setState({ progress: this.state.progress - 100 });
    break;
  case 3:
    this.setState({ progress: this.state.progress - 0 });
    break;
  case 2:
    this.setState({ progress: this.state.progress - 0 });
    break;
  case 1:
    this.setState({ progress: this.state.progress - 0 });
}
}


handleMoreMovies = (e) => {
  e.preventDefault();
  let movies = this.state.movies.slice(0,9)
 
  if (this.state.startIndex <= 4 && this.state.progress < 100 && movies.length > 3) {
    this.setState((currentState) => {
    
      return { startIndex: currentState.startIndex + 3 };
    
    })} 
    this.addProgress()
   
    console.log(this.state.startIndex);
  
};
handleMoreMoviesBack = (e) => {
  e.preventDefault();
 
  if (this.state.startIndex >= 1) {
    this.setState((currentState) => {
      return { startIndex: currentState.startIndex - 3 };
    });
    this.decreaseProgress()
    

    console.log(this.state.startIndex);
  }
};
  render() {
    return (
      <div>
        <img class="logo" src={photo} alt="img"></img>
        <SearchBar fetchMovies={this.fetchMovies} />
        <MovieCards  handleMoreMoviesBack = {this.handleMoreMoviesBack} 
                      handleMoreMovies = {this.handleMoreMovies}
                      startIndex = {this.state.startIndex} 
                      decreaseProgress = {this.decreaseProgress} 
                      addProgress= {this.addProgress} 
                      progress = {this.state.progress} 
                      movies={this.state.movies} />
      </div>
    );
  }
}
