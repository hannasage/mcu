import { Grid } from '@mui/material';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/nav-bar/Navbar';

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Grid container>
          <Grid item md={2}>
            <Navbar className="static" />
          </Grid>
          <Grid item md={10}>
            <Home />
          </Grid>
        </Grid>
      </div>
    </Router>
  );
}

export default App;
