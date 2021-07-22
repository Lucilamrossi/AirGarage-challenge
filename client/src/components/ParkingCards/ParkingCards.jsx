import React from 'react';
import { useSelector } from 'react-redux';

import ParkingCard from './ParkingCard/ParkingCard';

export default function ParkingCards() {
  const parkings = useSelector((state) => state.parkings);

  console.log(parkings);
  return (
    <>
      {parkings.map((parkingLot) => {
        console.log(parkingLot);
        return <ParkingCard parkingLot={parkingLot} />;
      })}
    </>
  );
}
