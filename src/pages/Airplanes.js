import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate, NavLink } from 'react-router-dom';
import { fetchData } from '../redux/airplanes/airplanes';

export default function Airplanes() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const dataArray = useSelector((state) => state.planeReducer.data);

  const airplanes = dataArray.map((plane) => (
    <div className="plane-card" key={plane.id}>
      <img src={plane.images} alt="airplane" />
    </div>
  ));

  return (
    <div className="airplanes">
      {airplanes}
    </div>
  );
}
