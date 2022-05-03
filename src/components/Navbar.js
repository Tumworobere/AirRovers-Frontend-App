import React from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from './Drawer';

const Navbar = () => (
  <>
    <Drawer />
    <div className="w-72 h-screen bg-slate-800 justify-start text-center text-lg text-white pt-5 left-0 hidden md:block">

      <ul className="flex flex-col justify-center h-full">
        <li className="mt-2"><NavLink to="/">Airplanes</NavLink></li>
        <li className="mt-2"><NavLink to="/reservations">Reservations</NavLink></li>
        <li className="mt-2"><NavLink to="/add-reservation">Reserve</NavLink></li>
        <li className="mt-2"><NavLink to="/add-airplane">Add Airplane</NavLink></li>
        <li className="mt-2"><NavLink to="/remove-airplane">Remove Airplane</NavLink></li>
      </ul>
    </div>
  </>

);

export default Navbar;
