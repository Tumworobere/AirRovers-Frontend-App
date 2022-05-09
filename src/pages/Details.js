import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaRegArrowAltCircleRight, FaRegSun, FaRegArrowAltCircleLeft } from 'react-icons/fa';

import '../App.css';

export default function Details() {
  const planeStats = useSelector((state) => state.details.data);

  const plane = planeStats.map((plane) => (
    <div key={plane.id} className="flex contents">
      <div className="image">
        <img
          className="d-block w-9 h-48 img inset-auto md:w-full md:h-60 rounded-2xl hover:shadow-2xl hover:shadow-gray-600 transition-all"
          src={plane.images}
          alt="airplane"
        />
      </div>
      <div className="info h-9 w-56 fixed inset-1/2 bg-gray-900 bg-opacity-75 rounded-t-md">
        <h2 className="cool-title my-auto text-center capitalize text-white h-full">{plane.name}</h2>
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
        <div className="flex hover:bg-none mb-9 object-center">
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
    </div>
  ));

  return (
    <>
      { plane }
    </>
  );
}
