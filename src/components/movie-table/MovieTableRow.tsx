import React from 'react'
import { Movie } from './MovieTable'

export interface MovieTableRowProps {
    movie: Movie
}

/* INFO
   Each table row follows the following order of columns:
   - Title
   - Relesase Year
   - Chronological Year
   - Release Order
   - Chronological Order
   - Rating
   - Tags */
function MovieTableRow({ movie }: MovieTableRowProps) {
    return (
        <tr>
            <td>{movie.title}</td>
            <td>{movie.releaseYear}</td>
            <td>{movie.chronologicalYear}</td>
            <td>{movie.releaseOrder}</td>
            <td>{movie.chronologicalOrder}</td>
            <td>{movie.rating}</td>
            <td>{movie.tags}</td>
        </tr>
    )
}

export default MovieTableRow
