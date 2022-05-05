import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';
import { fetchData } from '../redux/airplanes/airplanes';
import { fetchPlaneStats } from '../redux/details/details';
import '../App.css';

export default function Airplanes() {
  const dispatch = useDispatch();

  const pageChange = (e) => {
    dispatch(fetchPlaneStats(e.target.id));
  };

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const dataArray = useSelector((state) => state.planeReducer.data);

  const airplanes = dataArray.map((plane) => (
    <Carousel.Item key={plane.id} className="item">
      <img
        className="d-block w-100 img"
        src={plane.images}
        alt="airplane"
      />
      <Carousel.Caption>
        <NavLink to="/details" onClick={pageChange} id={plane.id}>
          <h3 id={plane.id}>{plane.name}</h3>
        </NavLink>
      </Carousel.Caption>
    </Carousel.Item>
  ));

  return (
    <>
      <section className="homepage">
        <div>
          <h1>
            Airplane Models
          </h1>

          <p>
            Please select an airplane model
          </p>
        </div>

        <div className="airplanes">
          <Carousel fade variant="dark" className="container">
            {airplanes}
          </Carousel>
        </div>
      </section>
    </>
  );
}
