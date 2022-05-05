import React, { useState } from 'react';
import { DropdownDate } from 'react-dropdown-date';
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

const Reserve = () => {
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

const Reserve = () => (
  <div>
    <h1>Reserve an Airplane</h1>
    <p>
      You will have a form displayed in this page. You will be able to rent an
      Airplane using that form.
    </p>
    <p>Note: only admins should be able to add Airplanes.</p>
    <form>
      <div className="reserve-form">
        <div className="city-style">
          <select
            id="cityId"
            placeholder="city"
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
  );
};
export default Reserve;
