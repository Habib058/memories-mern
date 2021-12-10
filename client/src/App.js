import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import image from './assets/mypic.jpeg'
import './App.css';

//className={classes.appBar}   className={classes.heading} className={classes.image}
function App() {
  return (
    <Container maxWidth="lg">
      <AppBar  position="static" color="inherit">
        <Typography   variant="h2" align="center">Memories</Typography> 
        <img  src={image} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              {/* <Posts setCurrentId={setCurrentId} /> */}
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
