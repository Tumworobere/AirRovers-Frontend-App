import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight, FaRegSun, FaRegArrowAltCircleLeft } from 'react-icons/fa';

import '../App.css';

export default function Details() {
  const planeStats = useSelector((state) => state.detailsReducer.data);

  const plane = planeStats.map((plane) => (
    <div key={plane.id} className="contain">
      <div className="image">
        <img
          className="d-block w-100 img"
          src={plane.images}
          alt="airplane"
        />
      </div>
      <div className="info">
        <h2>{plane.name}</h2>
        <div>
          <p>capacity</p>
          <p>{plane.capacity}</p>
        </div>

        <div>
          <p>Speed</p>
          <p>{plane.speed}</p>
        </div>

        <div>
          <p>Range</p>
          <p>{plane.range}</p>
        </div>

        <div>
          <p>More info</p>
          <a href={plane.url}>Wikipedia</a>
        </div>

        <div>
          <p>Price</p>
          <p>
            $
            {plane.price}
          </p>
        </div>
        <NavLink to="/add-reservation" className="btn">
          <p>
            <FaRegSun />
            {' '}
            Reserve
            <FaRegArrowAltCircleRight />
          </p>
        </NavLink>
        <br />
        <NavLink to="/" className="btn">
          <p>
            <FaRegArrowAltCircleLeft />
          </p>
        </NavLink>
      </div>
    </div>
  ));

  return (
    <>
      { plane }
    </>
  );
}
