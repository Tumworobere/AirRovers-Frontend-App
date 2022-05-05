/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(email,password);
  };

  return (
    <div className="h-screen w-screen">
      {/* <div className="opacity-0 block p-6 rounded-lg
      shadow-lg bg-white w-3/4 md:w-1/2 lg:w-1/3
      h-auto m-auto mt-48 transition-all duration-1000 -translate-y-full"> */}
      <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Log In </h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group mb-6">
            <input
              type="email"
              className="appearance-none rounded-none relative
              block w-full px-3 py-2 border border-gray-300
               placeholder-gray-500 text-gray-900 rounded-t-md
               focus:outline-none focus:ring-indigo-500
               focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="enter email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="form-group mb-6">
            <input
              type="password"
              className="appearance-none rounded-none relative
               block w-full px-3 py-2 border border-gray-300
               placeholder-gray-500 text-gray-900 rounded-b-md
               focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
               focus:z-10 sm:text-sm"
              placeholder="enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <button className="
            w-full
      px-6
      py-2.5
      bg-indigo-800
      text-white
      font-medium
      text-m
      leading-tight
      rounded-full
      shadow-md
      hover:bg-purple-700 hover:shadow-lg
      focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-purple-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      cursor-pointer"
          >
            Login

          </button>

          <p className="text-gray-800 mt-6 text-center">
            Not a member?
            <button
              type="button"
              className="text-indigo-600 hover:text-indigo-700
focus:text-indigo-700 transition duration-200 ease-in-out"
            >
              {' '}
              <Link to="/signup">Register</Link>
            </button>
            <br />
          </p>
        </div>
      </form>
    </div>
  //  </div>
  );
}
