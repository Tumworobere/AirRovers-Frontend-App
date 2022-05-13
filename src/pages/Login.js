/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { downTop, topDown } from '../animations';
import { login } from '../logic/api';

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.getElementById('spinnerbg') ? spinnerbg.classList.add('hidden') : null;
    topDown();
  }, []);
  sessionStorage.getItem('token') !== null ? navigate('/') : null;
  return (
    <div className="mt-0 w-screen">
      <div id="main" className="opacity-0 block p-6 rounded-lg shadow-lg bg-white w-3/4 md:w-1/2 lg:w-1/3 h-auto m-auto mt-48 mb-24 -translate-y-full">
        <h1 className="mt-3 text-center text-3xl font-bold text-gray-900">Log In </h1>
        <form id="form">
          <div className="form-group">
            <br />
            <input type="email" id="email" placeholder="Enter email address" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm m-0" />
          </div>
          <div className="form-group mb-6">
            <input id="password" type="password" placeholder="Enter password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm m-0" />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="form-group form-check text-center w-full flex justify-center">
              <input id="remember" type="checkbox" className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-indigo-600 checked:border-indigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" />
              <label htmlFor="remember" className="form-check-label inline-block text-gray-800 overf">Remember me</label>
            </div>
          </div>
          <button
            type="button"
            className="w-full
        px-6
        py-2.5
        text-white
        font-medium
        text-m
        leading-tight
        rounded-full
        bg-indigo-800
        shadow-md
        hover:bg-purple-700 hover:shadow-lg
        focus:bg-green-400 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-indigo-600 active:shadow-lg
        transition
        duration-150
        ease-in-out
        cursor-pointer"
            onClick={(e) => {
              e.preventDefault;
              const form = document.getElementById('form');
              login(form.email.value, form.password.value);
            }}
          >
            Log In
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Not a member?
            <button
              type="button"
              onClick={() => {
                downTop();
                setTimeout(() => {
                  navigate('/register');
                }, 700);
              }}
              className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 transition duration-200 ease-in-out"
            >
              {' '}
              Register
            </button>
            <br />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
