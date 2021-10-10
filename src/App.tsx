import { Grid } from '@mui/material';
import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Home />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
