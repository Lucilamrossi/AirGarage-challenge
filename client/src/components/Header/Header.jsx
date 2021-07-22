import React from 'react';

import { useStyles } from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

import ImageLogo from '../../utils/img/logo-with-title.png'

const Header = () => {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
        <CardMedia
          className={classes.media}
          image={ImageLogo}
          title="Logo"
          style={{backgroundSize: 'contain'}}
        />
        <Typography variant="h4" className={classes.title}> - </Typography>
          <Typography variant="h4" className={classes.title}>Challenge</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
