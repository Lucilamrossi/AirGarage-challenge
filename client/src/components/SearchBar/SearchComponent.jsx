import React from 'react';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import theme from '../../utils/theme';

export const useStyles = makeStyles({
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(2),
  },
});


export default function SearchCompoment({ parts, option }) {
  const classes = useStyles();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <LocationOnIcon className={classes.icon} />
      </Grid>
      <Grid item xs>
        {parts.map((part, index) => (
          <span key={index} style={{ fontWeight: part.highlight ? 700 : 400, color: theme.palette.primary.main}}>
            {part.text}
          </span>
        ))}

        <Typography variant="body2" >
          {option.structured_formatting.secondary_text}
        </Typography>
      </Grid>
    </Grid>
  );
}
