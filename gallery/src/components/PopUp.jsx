import React, { useEffect, useState } from 'react';
import {
  Dialog,
  IconButton,
  Slide,
  Grid,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styles from '../mui/styles/Common';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const PopUp = ({ change, open, image }) => {
  const classes = styles();
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (flag === true) {
      change(false);
      setFlag(false);
    }
  }, [flag]);
  return (
    <div>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <Grid container justifyContent="center">
          <Grid item>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => {
                setFlag(true);
              }}
              aria-label="close"
              className={classes.iconBtn}
              size="large"
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <img
          src={image?.image?.urls?.regular}
          alt="NoImage"
          className={classes.imageDialogue}
        />
      </Dialog>
    </div>
  );
};

export default PopUp;
