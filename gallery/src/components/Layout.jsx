import React, { useState, useEffect } from 'react';
import styles from '../mui/styles/Common';
import { Grid, Typography, InputBase, Button, Hidden } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Cards from '../components/Card';
import { Fragment } from 'react';

const Layout = () => {
  const classes = styles();
  const [val, setVal] = useState('');
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const { data } = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: process.env.REACT_APP_API_KEY,
        query: val,
      },
    });
    if (data) {
      setImages(data);
    } else {
      setImages(images);
    }
  };

  /* eslint-disable */
  useEffect(() => {
    getImages();
  }, [val]);
  return (
    <Fragment>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className={classes.layoutContainer}
      >
        <Grid item style={{ color: '#fff' }} className={classes.item}>
          <Typography variant="h3" className={classes.title} align="center">
            Download High Quality Images By Creators
          </Typography>
        </Grid>
        <Grid item className={classes.item} align="center">
          <Typography variant="h6">
            Over 2.5 million+ stock Images by our talented community
          </Typography>
        </Grid>
        <Grid item>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search images"
              classes={{
                root: classes.inputRoot,
              }}
              className={classes.inputInput}
              inputProps={{ 'aria-label': 'search' }}
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
          </div>
        </Grid>
      </Grid>
      <Hidden mdDown>
        <Grid
          container
          justifyContent="space-evenly"
          spacing={5}
          className={classes.imageContainer}
        >
          <Grid item>
            <Button variant="outlined" onClick={() => setVal('Elephaants')}>
              Elephaants
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => setVal('Tigers')}>
              Tigers
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => setVal('Birds')}>
              Birds
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => setVal('Mammals')}>
              Mammals
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => setVal('Nature')}>
              Nature
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => setVal('Wallpaper')}>
              Wallpaper
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => setVal('Background')}>
              Background
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" onClick={() => setVal('Brown')}>
              Brown
            </Button>
          </Grid>
        </Grid>
      </Hidden>
      <Grid
        container
        justifyContent="space-evenly"
        spacing={5}
        className={classes.imageContainer}
        style={{ paddingTop: 10 }}
      >
        {images &&
          images.results &&
          images.results.map((image) => (
            <Grid item lg={4} md={6} sm={6} xs={12}>
              <Cards image={image} />
            </Grid>
          ))}
      </Grid>
    </Fragment>
  );
};

export default Layout;
