import React, {useState, useRef } from 'react'
import TextField from '@material-ui/core/TextField'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

export default function SearchBar(props) {

const query = useRef()

const handleSearch = (e) => {
e.preventDefault()
const queryVal = query.current.value
props.fetchMovies(queryVal)
}


    
        return (
    <form onSubmit={handleSearch} className="search-bar">
       
           <TextField
          inputRef={query}
          id="outlined-full-width"
          label='Search Movies'
          style={{ margin: 8 }}
          placeholder="Movie Title"
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
              }}
        InputProps={{ 
                startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  endAdornment : (
                    <InputAdornment position="end">
                    <Button variant="contained" type="submit">Go</Button>
                  </InputAdornment>
                  )
                    
                  
                
            }}
          variant="outlined"
        />
     
    </form>
                    
        )
    
}
