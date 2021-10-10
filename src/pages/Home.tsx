import { Grid } from '@mui/material'
import MovieTable from '../components/movie-table/MovieTable'

function Home() {
    return (
        <Grid container>
            <Grid item xs={12}>
                {/* TODO: Table Filter goes here */}
            </Grid>
            <Grid item xs={12}>
                <MovieTable />
            </Grid>
        </Grid>
    )
}

export default Home
