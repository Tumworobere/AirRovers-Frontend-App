/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */

import { downTop } from '../animations';
import userId from '../user';
import { popup } from './popup';

export const baseAPI = 'https://aviones-api.herokuapp.com';

export const login = async (mail, password) => {
  await fetch(
    `${baseAPI}/users/sign_in`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: {
          email: mail,
          password,
        },
      }),
    },
  ).then((response) => {
    const checkData = async () => {
      const data = await response.json();
      if (data.user == null) {
        popup('Invalid credentials', 'red');
      } else {
        sessionStorage.clear();
        downTop();
        const authheader = response.headers.get('Authorization');
        sessionStorage.setItem('token', authheader);
        sessionStorage.setItem('user', JSON.stringify(data.user));
        window.location = '#/';
      }
    };
    checkData();
  });
};

export const register = async (name, mail, password) => {
  await fetch(
    `${baseAPI}/users`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user: {
          name,
          email: mail,
          password,
        },
      }),
    },
  ).then((response) => {
    if (response.status === 200) {
      popup('Registered succesfully! Please log in.', 'green');
      downTop();
      window.location = '#/login';
    } else {
      popup("Couldn't register new account", 'red');
    }
  });
};

export const addPlane = async (name, price, capacity, speed, image, info) => {
  await fetch(
    `${baseAPI}/planes`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: sessionStorage.getItem('token'),
      },
      body: JSON.stringify({
        Plane: {
          name,
          capacity,
          images: image,
          price,
          range: 1500,
          speed,
          url: info,
          city: 'New York',
        },
      }),
    },
  ).then((response) => {
    response.status === 201 ? popup('Aiplane added succesfully', 'green') : popup('Error while adding Aiplane', 'red');
  });
};

export const deletePlane = async (id) => {
  await fetch(
    `${baseAPI}/planes/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: sessionStorage.getItem('token'),
      },
    },
  ).then((response) => {
    response.status === 204 ? popup('Aiplane removed succesfully', 'green') : popup('Error while removing Aiplane', 'red');
  });
};

export const addReservation = async (start_date, end_date) => {
  const planeId = localStorage.getItem('planeId');
  const user_id = userId();
  await fetch(`${baseAPI}/user/${user_id}/reservations`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: sessionStorage.getItem('token'),
    },
    body: JSON.stringify({
      date_of_reservation: start_date,
      end_of_reservation: end_date,
      cancelled: false,
      user_id,
      plane_id: planeId,
    }),
  }).then((response) => {
    response.status === 201 ? popup('Reservation added succesfully', 'green') : popup('Error while adding reservation', 'red');
  }).then((data) => console.log(data));
};

export const delete_reservation = async (id) => {
  console.log(id);
  const userid = userId();
  await fetch(
    `${baseAPI}/user/${userid}reservations/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: sessionStorage.getItem('token'),
      },
    },
  ).then((response) => {
    response.status === 204 ? popup('Reservation removed succesfully', 'green') : popup('Error while removing reservation', 'red');
  });
};
