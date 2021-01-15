import React, { useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "&$focused $notchedOutline": {
      borderColor: "green",
    },
  },
  focused: {},
  notchedOutline: {},
}));

export default function SearchBar(props) {
  const query = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const queryVal = query.current.value;
    props.fetchMovies(queryVal.trim());
  };

  const classes = useStyles();

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <TextField
        className="search-bar"
        autoFocus={true}
        inputRef={query}
        id="outlined-full-width"
        label="Search Movies"
        style={{ margin: 8 }}
        placeholder="Movie Title"
        required={true}
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
          endAdornment: (
            <InputAdornment position="end">
              <Button className="go" variant="contained" type="submit">
                Go
              </Button>
            </InputAdornment>
          ),
          classes: {
            root: classes.root,
            focused: classes.focused,
            notchedOutline: classes.notchedOutline,
          },
        }}
        variant="outlined"
      />
    </form>
  );
}
