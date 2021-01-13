import React, { Component } from 'react'

                    import { makeStyles } from '@material-ui/core/styles';
                  
                    import Button from '@material-ui/core/Button';
                  
                    import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
                    import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

                    const useStyles = makeStyles((theme) => ({
                        root: {
                          button: {
                            margin: theme.spacing(1),
                          },
                        },
                      }));
              
export default class MovieCards extends Component {
    state = {
        startIndex: 0
    }
    moviesToDisplay() {
        this.props.movies.slice(this.state.startIndex, this.state.startIndex + 3)
        console.log("hi", this.state.movies)
    }
    handleMoreMovies = e => {
        e.preventDefault()
        if(this.state.startIndex < 7) {
        this.setState(currentState => {
            return { startIndex: currentState.startIndex + 3}
        })
        console.log(this.state.startIndex)
    } 
    }
    handleMoreMoviesBack = e => {
        e.preventDefault()
       if(this.state.startIndex >= 1) {
        this.setState(currentState => {
            return { startIndex: currentState.startIndex - 3}
        })
        console.log(this.state.startIndex)
    }
    }
    render() {
        {console.log(this.props.movies)}
        const backward = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
        <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
      </svg>
      const forward = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
      <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg>
        return (
            <div>
            <div className="row">
                {this.props.movies.slice(this.state.startIndex, this.state.startIndex + 3).map(movie => (
                    <div className="column">
                        <div className="card"> 
                       
                        <img className="movie-poster" src={movie.Poster}/>
                        <p>{movie.Title}</p>
                        <Button>Nominate</Button>
                        </div>
                    </div>
              
                ))}
           
            </div>
            <div className="directional-buttons">
            
            <Button  variant="contained" onClick={e => this.handleMoreMoviesBack(e)}>{backward}</Button>
            <Button variant="contained" onClick={e => this.handleMoreMovies(e)} >{forward}</Button>
            </div>
            </div>
        )
    }
}
