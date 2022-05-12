import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight, FaRegSun, FaRegArrowAltCircleLeft } from 'react-icons/fa';
import './details.css';

export default function Details() {
  const planeStats = useSelector((state) => state.details.data);
  const sendId = (e) => {
    localStorage.clear();
    localStorage.setItem('planeId', e);
  };

  const plane = planeStats.map((plane) => (
    <div key={plane.id} className="contents">
      <div className="image">
        <img
          src={plane.images}
          alt="airplane"
        />
      </div>
      <div className="info">
        <h2 className="heading cool-title my-auto text-center capitalize text-white h-full">{plane.name}</h2>
        <div className="specs">
          <p>Capacity</p>
          <p>{plane.capacity}</p>
        </div>

        <div className="specs">
          <p>Speed</p>
          <p>{plane.speed}</p>
        </div>

        <div className="specs">
          <p>Range</p>
          <p>{plane.range}</p>
        </div>

        <div className="specs">
          <p>More info</p>
          <a href={plane.url}>Wikipedia</a>
        </div>

        <div className="specs price">
          <p>Price</p>
          <p>
            $
            {plane.price}
          </p>
        </div>

        <div>
          <NavLink to="/add-reservation" className="btns">
            <p id={plane.id} onClick={(e) => sendId(e.target.id)}>
              <FaRegSun />
              {' '}
              Reserve
              <FaRegArrowAltCircleRight />
            </p>
          </NavLink>
          <NavLink to="/" className="btns back">
            <p>
              <FaRegArrowAltCircleLeft />
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="detail">
      <h1>Plane Stats</h1>
      { plane }
    </div>
  );
}
