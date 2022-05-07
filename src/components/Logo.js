import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from './assets/AirLogo.PNG';

const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className="
    absolute
    top-0
    w-full
    border-b
    shadow-2xl
    shadow-black"
    >
      <NavLink
        className="text-center w-full"
        to="/"
        onClick={(e) => {
          e.preventDefault();
          if (window.location.hash !== '#/') {
            setTimeout(() => {
              navigate('/');
            }, 250);
          }
        }}
      >
        <img
          src={logo}
          alt="logo"
          className="
            w-3/4
            m-auto"
        />
      </NavLink>
    </div>
  );
};

export default Logo;
