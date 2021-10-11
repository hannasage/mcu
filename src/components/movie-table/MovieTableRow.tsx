import { Avatar, Chip, TableCell, TableRow } from '@mui/material'
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
   - topCast */
function MovieTableRow({ movie }: MovieTableRowProps) {
    return (
        <TableRow>
            <TableCell>{movie.title}</TableCell>
            <TableCell>{movie.releaseYear}</TableCell>
            <TableCell>{movie.chronologicalYear}</TableCell>
            <TableCell>{movie.releaseOrder}</TableCell>
            <TableCell>{movie.chronologicalOrder}</TableCell>
            <TableCell>{movie.rating}</TableCell>
            <TableCell>
                {
                    movie.topCast.length > 0 ?
                        movie.topCast.map(char =>
                            <Chip
                                size="small"
                                label={char}
                                avatar={<Avatar>{char[0]}</Avatar>}
                                style={{ margin: "2px" }}
                            />
                        )
                        :
                        null
                }
            </TableCell>
        </TableRow>
    )
}

export default MovieTableRow
