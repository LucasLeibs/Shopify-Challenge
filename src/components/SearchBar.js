import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import InputBase from '@material-ui/core/InputBase'

export default class SearchBar extends Component {
    render() {
        return (
    <form className="search-bar">
           <TextField
          id="outlined-full-width"
          label="Search Movies"
          style={{ margin: 8 }}
          placeholder="Movie Title"
          
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
    </form>
                    
        )
    }
}
