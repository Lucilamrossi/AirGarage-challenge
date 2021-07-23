import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getParkings } from '../../redux/actions/getParkings';
import ParkingCard from './ParkingCard/ParkingCard';

import Pagination from '@material-ui/lab/Pagination';
import {
  LinearProgress,
  Grid,
  Fade,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useStyles } from './styles';

export default function ParkingCards() {
  const classes = useStyles();
  const { parkings, queries, totalPages, loading, error } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const handlePageChange = (event, value) => {
    dispatch(getParkings({ ...queries, page: value }));
  };
  const handlePageSizeChange = (event) => {
    dispatch(getParkings({ ...queries, page: 1, pageSize: event.target.value }));
  };

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : parkings.length > 0 ? (
        <Fade in={true}>
          <Grid container className={`${classes.container} ${classes.root}`}>
            <Grid item xs={12} className={classes.paginationContainer}>
              <Pagination
                color="primary"
                count={totalPages}
                page={queries?.page || 1}
                onChange={handlePageChange}
                className={classes.pagination}
              />
              <Select
                labelId="demo-simple-select-outlined-label"
                id="pageSize"
                value={queries?.pageSize || 6}
                onChange={handlePageSizeChange}
                label="PageSize"
                className={classes.pagination}
              >
                <MenuItem value={6}>6 per page</MenuItem>
                <MenuItem value={8}>8 per page</MenuItem>
                <MenuItem value={10}>10 per page</MenuItem>
              </Select>
            </Grid>
            <Grid container xs={12}>
              {parkings.map((parkingLot) => {
                return (
                  <Grid item sm={12} md={6} className={classes.container}>
                    <ParkingCard parkingLot={parkingLot} />
                  </Grid>
                );
              })}
            </Grid>
            <Grid item xs={12} style={{ paddingBottom: '2rem' }}>
              <Pagination
                color="primary"
                count={totalPages}
                page={queries?.page || 1}
                onChange={handlePageChange}
                className={classes.pagination}
              />
            </Grid>
          </Grid>
        </Fade>
      ) : error ? (
        <Fade in={true}>
          <Grid
            container
            className={`${classes.container} ${classes.notFound}`}
          >
            <div className={classes.filter}>
              <Typography className={classes.notFoundText}>
                No parking lots found
                <span>Please try again with a different location</span>
              </Typography>
            </div>
          </Grid>
        </Fade>
      ) : (
        <></>
      )}
    </>
  );
}
