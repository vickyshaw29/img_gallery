import React, { Fragment, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Hidden,
} from '@mui/material';
import styles from '../mui/styles/Common';
import { useTheme } from '@mui/styles';

const Header = () => {
  const classes = styles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (value, i) => {
    setValue(i);
  };
  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar} elevation={0}>
        <Toolbar className={classes.toolBar}>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className={classes.typo}
            color="textPrimary"
          >
            Image Gallery
          </Typography>
          <Hidden mdDown>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className={classes.tabContainer}
              indicatorColor={theme.palette.primary.main}
            >
              <Tab className={classes.tab} label="Explore" disableRipple />
              <Tab className={classes.tab} label="Collection" disableRipple />
              <Tab className={classes.tab} label="Community" disableRipple />
            </Tabs>
          </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
