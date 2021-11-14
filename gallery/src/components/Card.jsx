import React, { useEffect } from 'react';
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

const Cards = (image) => {
  const classes = styles();

  useEffect(() => {
    console.log(image.image);
  }, [image]);
  return (
    <Card sx={{ maxWidth: 345 }} className={classes.cardContainer}>
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
    </Card>
  );
};

export default Cards;
