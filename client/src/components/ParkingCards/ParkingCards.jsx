import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getParkings } from '../../redux/actions/getParkings';

import Pagination from '@material-ui/lab/Pagination';

import ParkingCard from './ParkingCard/ParkingCard';

export default function ParkingCards() {
  const {parkings, queries, totalPages} = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (event, value) => {
    dispatch(getParkings(queries.location, value))
  };

  return (
    <>
    <Pagination count={totalPages} page={queries?.page || 1} onChange={handleChange} />
      {parkings.map((parkingLot) => {
        console.log(parkingLot);
        return <ParkingCard parkingLot={parkingLot} />;
      })}
    </>
  );
}
