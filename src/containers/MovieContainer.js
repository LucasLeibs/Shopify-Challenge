import React, { Component } from 'react'
import MovieCards from '../components/MovieCards'

export default class MovieContainer extends Component {
    state = {
        movies:[]
    }
    render() {
        return (
            <div>
                <MovieCards />
            </div>
        )
    }
}
