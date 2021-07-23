import React from 'react';

import { Typography, Toolbar, AppBar, CardMedia } from '@material-ui/core';
import ImageLogo from '../../utils/img/logo-with-title.png';
import { useStyles } from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <CardMedia
            className={classes.media}
            image={ImageLogo}
            title="Logo"
            style={{ backgroundSize: 'contain' }}
          />
          <Typography variant="h4" className={classes.title}>
            {' '}
            -{' '}
          </Typography>
          <Typography variant="h4" className={classes.title}>
            Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
