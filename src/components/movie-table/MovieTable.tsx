import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell } from '@mui/material'
import movies from '../../content/movies.json'
import MovieTableRow from './MovieTableRow'

export interface Movie {
    title: string,
    releaseYear: number,
    chronologicalYear: number,
    releaseOrder: number,
    chronologicalOrder: number,
    rating: number,
    topCast: string[]
}

function MovieTable() {

    return (
        <div style={{ display: 'flex' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Release Year</TableCell>
                            <TableCell>Chronological Year</TableCell>
                            <TableCell>Release Order</TableCell>
                            <TableCell>Chronological Order</TableCell>
                            <TableCell>Rating</TableCell>
                            <TableCell>Main Cast</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies.map(movie => <MovieTableRow movie={movie} key={movie.title} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MovieTable
