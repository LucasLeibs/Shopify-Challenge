import React, { Component } from 'react'

                    import { makeStyles } from '@material-ui/core/styles';
                  
                    import Button from '@material-ui/core/Button';
                    import NominationsContainer from '../containers/NominationsContainer'
                    import MenuItem from '@material-ui/core/MenuItem';
                    import { Alert, AlertTitle } from '@material-ui/lab';
                    import Fab from '@material-ui/core/Fab'
                    import Snackbar from '@material-ui/core/Snackbar';
                    import IconButton from '@material-ui/core/IconButton';
                    import Badge from '@material-ui/core/Badge';
                    import LinearProgress from '@material-ui/core/LinearProgress';


             
              
export default class MovieCards extends Component {
    state = {
        startIndex: 0,
        nominations: [],
        limit: false,
        open: false,
        progress: 0

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
        switch (this.props.movies.length) {
            case 10:
              this.setState({ progress: this.state.progress + 33.33});
              break;
            case 9:
              this.setState({ progress: this.state.progress + 50});
              break;
            case 8:
               this.setState({ progress: this.state.progress + 50});
              break;
            case 7:
              this.setState({ progress: this.state.progress + 50});
              break;
            case 6:
              this.setState({ progress: this.state.progress + 100});
              break;
            case 5:
              this.setState({ progress: this.state.progress + 50});
              break;
            case 4:
              this.setState({ progress: this.state.progress + 50});
              break;
            case 3:
                this.setState({ progress: 100})
              break;
            case 2:
                this.setState({ progress: 100})
            break;
            case 1: 
            this.setState({ progress: 100})
            

          }
        console.log(this.state.startIndex)
    } 
    }
    handleMoreMoviesBack = e => {
        e.preventDefault()
       if(this.state.startIndex >= 1) {
        this.setState(currentState => {
            return { startIndex: currentState.startIndex - 3}
        });
        switch (this.props.movies.length) {
            case 10:
              this.setState({ progress: this.state.progress - 33.33});
              break;
            case 9:
              this.setState({ progress: this.state.progress - 50});
              break;
            case 8:
               this.setState({ progress: this.state.progress - 50});
              break;
            case 7:
              this.setState({ progress: this.state.progress - 50});
              break;
            case 6:
              this.setState({ progress: this.state.progress - 100});
              break;
            case 5:
              this.setState({ progress: this.state.progress - 50});
              break;
            case 4:
              this.setState({ progress: this.state.progress - 50});
              break;
            case 3:
                this.setState({ progress: this.state.progress - 0})
              break;
            case 2:
                this.setState({ progress: this.state.progress - 0})
            break;
            case 1: 
            this.setState({ progress: this.state.progress - 0})
            

          }
          

       
        console.log(this.state.startIndex)
    }
    }

    addNomination = (movie) => {
        if(this.state.nominations.length === 5) {
         this.setState({limit: true})}
         else { 
        this.setState({ 
            nominations: [...this.state.nominations, movie],
            open:true
        })}
        console.log(this.state.open)
    }
    handleClose = () => {
        this.setState({
            open:false
        })
    }
   
    render() {
        {console.log(this.state.nominations)}
        const backward = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-left-fill" viewBox="0 0 16 16">
        <path d="M3.86 8.753l5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
      </svg>
      const forward = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
      <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
    </svg>
        return (
            <div>
                {this.state.limit ?  <Alert onClose={() => {this.setState({limit:false})}}  variant="filled" severity="error">
          <strong>Can only make five nominations</strong>
        </Alert>:  ''}
        {/* <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={this.handleClose}
        open={this.state.open}
        autoHideDuration={2500}
        message="Nomination added to list"
      
        /> */}
            <div className="row">
                {this.props.movies.slice(this.state.startIndex, this.state.startIndex + 3).map(movie => (
                    <div className="column">
                        <div className="card"> 
                        {this.state.nominations.includes(movie)? <Button variant="disabled" onClick={() => this.addNomination(movie)}>Nominate</Button> : <Button className="nominate-button" onClick={() => this.addNomination(movie)}>Nominate</Button>}
                        <img className="movie-poster" src={movie.Poster}/>
                        <p>({movie.Year})</p>
                        <p className="movie-title">{movie.Title}</p>
                       
                        </div>
                    </div>
              
                ))}
           
            </div>
            <NominationsContainer movies ={this.props.movies} nominations = {this.state.nominations}/>
            
            <div className="directional-buttons">
            <LinearProgress className="progress-bar" variant="determinate" value={this.state.progress}></LinearProgress>
            <Fab className="pager" variant="contained" onClick={e => this.handleMoreMoviesBack(e)}>{backward}</Fab>
            <Fab className="pager" variant="contained" onClick={e => this.handleMoreMovies(e)} >{forward}</Fab>
            </div>
            </div>
        )
    }
}
