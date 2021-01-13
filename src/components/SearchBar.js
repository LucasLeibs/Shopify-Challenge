import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';

export default class SearchBar extends Component {
    render() {
        return (
    <form className="search-bar">
       
           <TextField
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
            }}
          variant="outlined"
        />
     
    </form>
                    
        )
    }
}
