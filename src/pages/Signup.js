/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-escape */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../logic/api';
import { topDown, downTop } from '../animations';
import { popup } from '../logic/popup';

const Register = () => {
  const regexEmail = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/;
  const navigate = useNavigate();
  useEffect(() => {
    topDown();
  }, []);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  sessionStorage.getItem('token') !== null ? navigate('/') : null;
  return (
    <div className="mt-0 w-screen">
      <div id="main" className="opacity-0 block p-6 rounded-lg shadow-lg bg-white w-3/4 md:w-1/2 lg:w-1/3 h-auto m-auto mt-48 mb-24 -translate-y-full">
        <h1 className="mt-3 text-center text-3xl font-bold text-gray-900">Register </h1>
        <form id="form">
          <div className=" mb-4">
            <label htmlFor="user" className="inline-block text-gray-700 w-full">
              Username
              <br />
              <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="name" placeholder="Enter username" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>
          <div className=" mb-4">
            <label htmlFor="email" className="inline-block text-gray-700 w-full">
              Email
              <br />
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" placeholder="Enter email address" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>
          <div className=" mb-6">
            <label htmlFor="password" className="inline-block mb-2 text-gray-700 w-full">
              Password
              <input id="password" onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Enter password" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>
          <button
            type="button"
            className="w-full
        px-6
        py-2.5
        bg-emerald-800
        text-black
        font-medium
        text-m
        leading-tight
        rounded-full
        shadow-md
        hover:bg-lime-700 hover:shadow-lg
        focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-lime-500 active:shadow-lg
        transition
        duration-150
        ease-in-out
        cursor-pointer"
            onClick={(e) => {
              e.preventDefault;
              const form = document.getElementById('form');
              if (form.password.value && form.email.value.match(regexEmail)) {
                register(name, email, password);
              } else {
                popup('Invalid input!', 'red');
              }
            }}
          >
            Register
          </button>
          <p className="text-gray-800 mt-6 text-center">
            Already a member?
            <button
              type="button"
              onClick={() => {
                downTop();
                setTimeout(() => {
                  navigate('/login');
                }, 700);
              }}
              className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 transition duration-200 ease-in-out"
            >
              Log In
            </button>
            <br />
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
