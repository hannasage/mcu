import React from 'react'
import movies from '../../content/movies.json'
import MovieTableRow from './MovieTableRow'
import './Table.css'

export interface Movie {
    title: string,
    releaseYear: number,
    chronologicalYear: number,
    releaseOrder: number,
    chronologicalOrder: number,
    rating: number,
    tags: string[]
}

function MovieTable() {

    return (
        <div style={{display: 'flex'}}>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Release Year</th>
                        <th>Chronological Year</th>
                        <th>Release Order</th>
                        <th>Chronological Order</th>
                        <th>Rating</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    { movies.map(movie => <MovieTableRow movie={movie} />) }
                </tbody>
            </table>
        </div>
    )
}

export default MovieTable
