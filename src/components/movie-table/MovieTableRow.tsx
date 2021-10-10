import { TableCell, TableRow } from '@mui/material'
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
        <TableRow>
            <TableCell>{movie.title}</TableCell>
            <TableCell>{movie.releaseYear}</TableCell>
            <TableCell>{movie.chronologicalYear}</TableCell>
            <TableCell>{movie.releaseOrder}</TableCell>
            <TableCell>{movie.chronologicalOrder}</TableCell>
            <TableCell>{movie.rating}</TableCell>
            <TableCell>{movie.tags}</TableCell>
        </TableRow>
    )
}

export default MovieTableRow
