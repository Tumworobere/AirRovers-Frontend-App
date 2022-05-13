import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();
  return (
    <div className="
    absolute
    bottom-4
    w-full"
    >
      <button
        type="button"
        className="
        text-emerald-600
            hover:bg-emerald-800
            hover:text-white
            w-1/2
            md:w-2/3
            rounded-full
            m-auto
            h-8
            text-md
            font-bold
             leading-relaxed
        "
        onClick={() => {
          sessionStorage.clear();
          navigate('/login');
        }}
      >
        LOGOUT
        <svg
          className=" inline ml-2"
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="white"
          viewBox="0 0 24 24"
        >
          <path d="M0 2v20h14v-2h-12v-16h12v-2h-14zm18 7.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7z" />
        </svg>
      </button>
    </div>
  );
};

export default LogoutButton;
