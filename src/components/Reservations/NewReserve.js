import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './NewReserve.css';

const DateFormatter = (d, numOfyear) => {
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = `${d.getFullYear() + numOfyear}`;

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

const formatDate = (date) => {
  const d = new Date(date);
  return DateFormatter(d, 0);
};

const TodayDate = () => {
  const d = new Date();
  return DateFormatter(d, 0);
};

const extendDate = (numOfYear) => {
  const d = new Date();
  return DateFormatter(d, numOfYear);
};

const cities = [
  {
    id: 1,
    name: 'Newyork',
  },
  {
    id: 2,
    name: 'lagos',
  },
  {
    id: 3,
    name: 'Paris',
  },
  {
    id: 4,
    name: 'Nairobi',
  },
  {
    id: 5,
    name: 'Kampala',
  },
];

const NewReservation = () => {
  const [selectedCity, setSelectedCity] = useState('---Select City---');
  const [selectDate, setSelectedDate] = useState(TodayDate());
  const [Alertmessage, setAlertMessage] = useState('');
  const handleSubmit = async () => {
    if (selectedCity !== '---Select City---') {
      const reservation = {
        start_date: selectDate, city: selectedCity,
      };
      const reserveUrl = '';
      const result = await fetch(reserveUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservation),
      });
      const message = await result.json();
      setAlertMessage(message);
    } else {
      setAlertMessage('Kindly select a city');
    }
  };

  const allAirplanes =airplanes.airplanes;
  let index = 0;
  if (id) {
    index = allairplanes.findIndex((airplane) => airplane.id === id);
  }
  if (allAirplanes !== undefined) {
    dispatch(selectairplanes(Allairplanes[index]));
  }
  const moreHandler = () => {
    const l = allAirplanes.length;
    let nextIndex = 0;
    if (index < l - 1) {
      nextIndex = index + 1;
    } else {
      nextIndex = 0;
    }
    const nextairplane = allAirplanes[nextIndex];
    dispatch(selectAirplanes(nextAirplane));
  };

  return (
    <>
      <div
        className="d-flex reserve-contain"
      >
        <div className="nav-element">
          <Nav bg="light" className="main-nav flex-column">
            <Nav.Link href="/">All Airplanes</Nav.Link>
            <Nav.Link href="/Myreservations">My Reservations</Nav.Link>
            <Nav.Link href="/NewAirplane">Add an airplane</Nav.Link>
          </Nav>
        </div>
        <div
          className="new-reserve-container"
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="overLay position-absolute" />
          <h2 className="z-index1 reserve-brand position-absolute">{currentAirplane.brand}</h2>
          <div className="z-index1 d-flex flex-column change-reserve position-absolute">
            <p style={{ marginBottom: '5px', textAlign: 'center', marginRight: '25px' }}>More Airplanes</p>
            <div className="d-flex align-items-center">
              <img src={currentAirplane.photo_url} alt={currentAirplane.brand} className="z-index1" style={{ width: '100px', height: '100px' }} />
              <span className="z-index1" onClick={moreHandler} aria-hidden="true">
                <FaChevronCircleRight style={{
                  width: '20px', height: '20px', color: '#fff', marginLeft: '10px', cursor: 'pointer',
                }}
                />
              </span>
            </div>
          </div>
          <h2 className="reserve-heading">Reserve an Airplane Today</h2>
          <p className="reserve-content">Our airplanes are available in all five major cities everyday, reserve an airplane today</p>
          <p className="alert-reserve">{Alertmessage}</p>
          <form>
            <div className="reserve-form">
              <div className="city-style">
                <select
                  id="cityId"
                  placeholder="city"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option>---Select City---</option>
                  {cities.map((city) => <option key={city.id}>{city.name}</option>)}
                </select>
              </div>
              <div className="date-style">
                <DropdownDate
                  startDate={
            TodayDate()
          }
                  endDate={
            extendDate(5)
          }
                  selectedDate={
            selectDate
          }
                  onDateChange={(date) => {
                    setSelectedDate(formatDate(date));
                  }}
                />
              </div>
              <button type="button" onClick={handleSubmit}>Reserve</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewReservation;
