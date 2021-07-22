import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
}));

export default function SearchCompoment({ parts, option }) {
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <LocationOnIcon className={classes.icon} />
      </Grid>
      <Grid item xs>
        {parts.map((part, index) => (
          <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
            {part.text}
          </span>
        ))}

        <Typography variant="body2" color="textSecondary">
          {option.structured_formatting.secondary_text}
        </Typography>
      </Grid>
    </Grid>
  );
}
