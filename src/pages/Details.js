import React from 'react';
import { useSelector } from 'react-redux';

export default function Details() {
  const planeStats = useSelector((state) => state.detailsReducer.data);

  const plane = planeStats.map((plane) => (
    <div key={plane.id}>
      <img
        className="d-block w-100 img"
        src={plane.images}
        alt="airplane"
      />
    </div>
  ));

  return (
    <div>
      { plane }
    </div>
  );
}
