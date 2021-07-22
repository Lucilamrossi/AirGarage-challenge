import { useStyles } from './styles';
import SearchBar from '../SearchBar/SearchBar';
import { Typography } from '@material-ui/core';

function SearchContainer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.searchContainer}>
        <Typography className={classes.searchTitle}>Search for parking lots here!</Typography>
        <SearchBar />
      </div>
    </div>

  );
}

export default SearchContainer;