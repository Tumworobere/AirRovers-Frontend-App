import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignup } from '../hooks/useSignup';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [password, setPassword] = useState('');
  const { error, isPending, signup } = useSignup();

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(name, email, password);
  };

  return (
    <div className="h-screen w-screen">
      <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register </h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className=" mb-4">
          <label htmlFor="user" className="inline-block text-gray-700 w-full">
            Username
            <br />
            <input
              type="text"
              id="name"
              placeholder="Enter username"
              required
              className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
        </div>

        <div className=" mb-4">
          <label htmlFor="email" className="inline-block text-gray-700 w-full">
            Email
            <br />
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </label>
        </div>

        <div className=" mb-4">
          <label htmlFor="password" className="inline-block mb-2 text-gray-700 w-full">
            Password
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
              className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </label>
        </div>

        <lable className="lable">
          {!isPending && <button className="btn" type="submit">Signup</button>}
        </lable>
        {isPending && (
        <button
          type="submit"
          disabled
          className="w-full
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
          Signup
        </button>
        )}
        {error && <p className="error">{error}</p>}

        <p className="text-gray-800 mt-6 text-center">
          Already a member?
          <button
            type="button"
          >
            <Link to="/login" className="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700 transition duration-200 ease-in-out">Login</Link>
          </button>
          <br />
        </p>
      </form>
    </div>
  );
}
