import React, { useState } from 'react';
import { DropdownDate } from 'react-dropdown-date';
import './Reserve.css';

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
  const [selectedCity] = useState('---Select City---');
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

    <div>
      <h1>Reserve an Airplane Today</h1>
      <p>
        Our airplanes are available in all five major cities everyday, reserve an airplane today
      </p>
      <p className="alert-reserve">{Alertmessage}</p>
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
    </div>;
};
export default Reserve;
