import React, { Component } from 'react'

                    import { makeStyles } from '@material-ui/core/styles';
                    import Card from '@material-ui/core/Card';
                    import CardActionArea from '@material-ui/core/CardActionArea';
                    import CardActions from '@material-ui/core/CardActions';
                    import CardContent from '@material-ui/core/CardContent';
                    import CardMedia from '@material-ui/core/CardMedia';
                    import Button from '@material-ui/core/Button';
                    import Typography from '@material-ui/core/Typography';
                    import Paper from '@material-ui/core/Paper';

        
              
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
            <Button onClick={e => this.handleMoreMovies(e)} className="forward">forward</Button>
            <Button onClick={e => this.handleMoreMoviesBack(e)} className="forward">back</Button>
            </div>
        )
    }
}
