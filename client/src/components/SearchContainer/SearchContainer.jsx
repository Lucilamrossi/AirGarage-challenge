import React from 'react';

import SearchBar from '../SearchBar/SearchBar';

import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function SearchContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.searchContainer}>
        <Typography className={classes.searchTitle}>
          Search for parking lots here!
        </Typography>
        <SearchBar />
      </div>
    </div>
  );
}
