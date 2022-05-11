/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
/* eslint-disable consistent-return */
/* eslint-disable no-restricted-syntax */
import { downTop } from '../animations';
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
    if (response.status !== 200) {
      popup('Invalid credentials', 'red');
    } else {
      sessionStorage.clear();
      downTop();
      const authheader = response.headers.get('Authorization');
      sessionStorage.setItem('token', authheader);
      return response.json();
    }
  }).then((userInfo) => {
    if (userInfo) {
      sessionStorage.setItem('user', JSON.stringify(userInfo));

      window.location = '#/';
    }
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
    `${baseAPI}api/v1/Aiplanes`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: sessionStorage.getItem('token'),
      },
      body: JSON.stringify({
        Aiplane: {
          name,
          rental_price: price,
          capacity,
          flying_speed: speed,
          image,
          info,
        },
      }),
    },
  ).then((response) => {
    response.status === 201 ? popup('Aiplane added succesfully', 'green') : popup('Error while adding Aiplane', 'red');
  });
};

export const delete_plane = async (id) => {
  await fetch(
    `${baseAPI}api/v1/Aiplanes/${id}`,
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

export const delete_reservation = async (id) => {
  await fetch(
    `${baseAPI}api/v1/reservations/${id}`,
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
