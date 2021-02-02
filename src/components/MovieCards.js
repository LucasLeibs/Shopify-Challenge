import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import NominationsContainer from "../containers/NominationsContainer";
import MenuItem from "@material-ui/core/MenuItem";
import { Alert, AlertTitle } from "@material-ui/lab";
import Fab from "@material-ui/core/Fab";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import LinearProgress from "@material-ui/core/LinearProgress";

export default class MovieCards extends Component {
  state = {
    startIndex: 0,
    nominations: [],
    limit: false,
    open: false,
    progress: 0,
  };
   movies = this.props.movies.slice(0,9)
  
  
  
  // handleMoreMovies = (e) => {
  //   e.preventDefault();
  //   let movies = this.props.movies.slice(0,9)
  //   console.log("hello", this.props.progress)
  //   if (this.props.startIndex <= 4 && this.props.progress < 100 && movies.length > 3) {
  //     this.setState((currentState) => {
      
  //       return { startIndex: currentState.startIndex + 3 };
      
  //     })} 
  //     this.props.addProgress()
     
  //     console.log(this.state.startIndex);
    
  // };
  // handleMoreMoviesBack = (e) => {
  //   e.preventDefault();

  //   if (this.state.startIndex >= 1) {
  //     this.setState((currentState) => {
  //       return { startIndex: currentState.startIndex - 3 };
  //     });
  //     this.props.decreaseProgress()
      

      
  //   }
  // };

  addNomination = (movie) => {
    if (this.state.nominations.length === 5) {
      this.setState({ limit: true });
    } else {
      this.setState({
        nominations: [...this.state.nominations, movie],
        open: true,
      });
    }
    console.log(this.state.open);
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
   removeNomination = (nom) => {
    console.log("hi", nom)
    this.setState({ nominations: this.state.nominations.filter(nomination => nomination.Title !== nom.Title)
    })
  };

  render() {
    {
      console.log(this.state.nominations);
    }
    const backward = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-caret-left-fill"
        viewBox="0 0 16 16"
      >
        <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
      </svg>
    );
    const forward = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-caret-right-fill"
        viewBox="0 0 16 16"
      >
        <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
      </svg>
    );
    const sad = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        class="bi bi-emoji-frown"
        viewBox="0 0 16 16"
      >
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
      </svg>
    );
    return (
      <div>
        {this.state.limit ? (
          <Alert
            onClose={() => {
              this.setState({ limit: false });
            }}
            variant="filled"
            severity="error"
          >
            <strong>Can only make five nominations</strong>
          </Alert>
        ) : (
          ""
        )}

        {this.props.movies ? (
           
          <div className="row">
           
            {this.props.movies
              .slice(this.props.startIndex, this.props.startIndex + 3)
              .map((movie) => (
                <div className="column">
                  <div className="card">
                    {this.state.nominations.includes(movie) ? (
                      <Button
                        variant="disabled"
                        onClick={() => this.addNomination(movie)}
                      >
                        Nominate
                      </Button>
                    ) : (
                      <Button
                        className="nominate-button"
                        onClick={() => this.addNomination(movie)}
                      >
                        Nominate
                      </Button>
                    )}
                    <img className="movie-poster" src={movie.Poster} />
                    <p>({movie.Year})</p>
                    <p className="movie-title">{movie.Title}</p>
                  </div>
                </div>
              ))}
              </div>
          
        ) : (
          <div className="no-results">
            {sad}
            <h2>No results </h2>
          </div>
        )}
        <NominationsContainer
          movies={this.props.movies}
          nominations={this.state.nominations}
          removeNomination = {this.removeNomination}
        />

        <div className="directional-buttons">
          <LinearProgress
            className="progress-bar"
            variant="determinate"
            value={this.props.progress}
          ></LinearProgress>
          <Fab
            className="pager"
            variant="contained"
            onClick={(e) => this.props.handleMoreMoviesBack(e)}
          >
            {backward}
          </Fab>
          <Fab
            className="pager"
            variant="contained"
            onClick={(e) => this.props.handleMoreMovies(e)}
          >
            {forward}
          </Fab>
        </div>
      </div>
    );
  }
}
