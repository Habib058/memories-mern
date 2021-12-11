import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import { getPosts } from './actions/posts';
import { useDispatch } from 'react-redux';
import imageItem from './assets/mypic.jpeg'
import './App.css';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles'

//className={classes.appBar}   className={classes.heading} className={classes.image}
function App() {
  const classes = useStyles();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">Memories</Typography> 
        <img className={classes.image} src={imageItem} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              {/* <Posts setCurrentId={setCurrentId} /> */}
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <Form currentId={currentId} setCurrentId={setCurrentId} /> */}
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
