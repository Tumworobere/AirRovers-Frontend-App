/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import { TiSocialTwitterCircular, TiSocialFacebookCircular, TiSocialLinkedinCircular } from 'react-icons/ti';
import { fetchAirplanes } from '../redux/airplanes/airplanes';
import { fetchPlaneStats } from '../redux/details/details';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';

const PrevBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <FaChevronCircleLeft />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <FaChevronCircleRight />
    </div>
  );
};

export default function Airplanes() {
  const dispatch = useDispatch();

  const pageChange = (e) => {
    dispatch(fetchPlaneStats(e.target.id));
  };

  useEffect(() => {
    dispatch(fetchAirplanes());
  }, []);

  const dataArray = useSelector((state) => state.airplanes.airplanes_arr);

  const airplanes = dataArray.map((plane) => (

    <div className="card" key={plane.id}>
      <img
        src={plane.images}
        alt="airplane"
      />
      <NavLink to="/details" className="mt-0 p-0 text-center font-bold text-green-700 uppercase" onClick={pageChange} id={plane.id}>
        <h3 id={plane.id}>{plane.name}</h3>
      </NavLink>
      <p>{plane.speed}</p>

      <div className="icons">
        <TiSocialFacebookCircular />
        <TiSocialTwitterCircular />
        <TiSocialLinkedinCircular />
      </div>
    </div>

  ));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (

    <div className="contain">

      <div className="heading">
        <h1>Air Rover Models</h1>

        <p>Please select a model</p>
      </div>

      <div className="container">

        <Slider
          {...settings}
          prevArrow={<PrevBtn />}
          nextArrow={<NextBtn />}
        >
          {airplanes}
        </Slider>

      </div>
    </div>
  );
}
