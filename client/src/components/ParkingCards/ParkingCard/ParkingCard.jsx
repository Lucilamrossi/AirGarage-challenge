import React from 'react';
import NoImage from '../../../utils/img/no-photo.png';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useStyles } from './styles';

export default function ParkingCard({ parkingLot }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={parkingLot?.image_url || NoImage}
        title="Parking Lot Image"
      />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {parkingLot.name}
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          style={{ paddingBottom: '0.5rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Rating value={parkingLot.rating} precision={0.5} readOnly />
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              style={{ paddingLeft: '0.2rem', fontSize: '1.1rem' }}
            >
              ({parkingLot.review_count})
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
              style={{ fontSize: '1.1rem' }}
            >
              Score:{' '}
              {(
                (parkingLot.review_count * parkingLot.rating) /
                (parkingLot.review_count + 1)
              ).toFixed(2)}
            </Typography>
          </div>
        </Grid>

        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={{ fontSize: '1.2rem' }}
        >
          {parkingLot.location.display_address.join(', ')}
        </Typography>
      </CardContent>

      <CardActions className={classes.btnContainer}>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          endIcon={<ArrowForwardIosIcon />}
          href={parkingLot.url}
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
