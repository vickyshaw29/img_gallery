import React, { useState, useEffect } from 'react';
import styles from '../mui/styles/Common';
import {
  Card,
  Grid,
  Typography,
  CardActions,
  CardMedia,
  Avatar,
} from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import PopUp from './PopUp';

const Cards = (image) => {
  const classes = styles();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(open);
  }, [image]);
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className={classes.cardContainer}
      onClick={() => setOpen(true)}
    >
      <CardMedia
        component="img"
        height="140"
        image={image?.image?.urls?.regular}
        alt="green iguana"
        classes={{ root: classes.rootMedia }}
      />
      <CardActions>
        <Grid container alignItems="center" style={{ marginTop: '0.5rem' }}>
          <Grid item xs={2}>
            <Avatar
              alt="Remy Sharp"
              src={image?.image?.user?.profile_image?.large}
            />
          </Grid>
          <Grid item container direction="column" xs={8}>
            <Grid item>
              <Typography variant="body1">
                {image?.image?.user?.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="GrayText">
                {`@${image?.image?.user?.username}`}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <ThumbUpAltOutlinedIcon />
            <Typography variant="body2" color="GrayText">
              {image?.image?.user?.total_likes}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
      <PopUp open={open} change={(val) => setOpen(val)} image={image} />
    </Card>
  );
};

export default Cards;
