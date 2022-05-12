/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { topDown } from '../animations';
import { addPlane } from '../logic/api';
import { fetchAirplanes, loadAirplanes } from '../redux/airplanes/airplanes';

const AddAirplane = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    window.sessionStorage.getItem('token') == null ? navigate('/login') : null;
    topDown();
  }, []);
  const createPlane = () => {
    addPlane(
      newPlane.name.value,
      newPlane.price.value,
      newPlane.capacity.value,
      newPlane.speed.value,
      newPlane.image.value,
      newPlane.info.value,
    );
  };

  return (
    <div id="main" className="p-4 md:p-24 flex justify-center flex-col w-full md:w-3/4 lg:w-5/6 h-screen transition-all opacity-0 -translate-y-full origin-top ease-out duration-500">
      <div className="block p-6 rounded-lg shadow-lg bg-white w-3/4 lg:w-2/3 h-auto m-auto">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">New Airplane </h1>
        <form id="newPlane">
          <div className=" mb-4">
            <label htmlFor="name" className="inline-block text-gray-700 w-full">
              Name
              <br />
              <input type="text" id="name" placeholder="Enter model" maxLength={20} required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>

          <div className=" mb-4">
            <label htmlFor="Price" className="inline-block text-gray-700 w-full">
              Price per day
              <br />
              <input type="number" id="cost" placeholder="Enter cost" max={10000} required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>

          <div className=" mb-4">
            <label htmlFor="capacity" className="inline-block mb-2 text-gray-700 w-full">
              Capacity
              <input id="capacity" type="number" placeholder="Enter max number of passengers" max={10} required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>

          <div className=" mb-4">
            <label htmlFor="speed" className="inline-block text-gray-700 w-full">
              Flying speed
              <br />
              <input type="number" id="speed" placeholder="Enter flying speed" max={1000} required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>

          <div className=" mb-4">
            <label htmlFor="image" className="inline-block text-gray-700 w-full">
              Picture
              <br />
              <input type="text" id="image" placeholder="Enter image URL" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>

          <div className=" mb-4">
            <label htmlFor="info" className="inline-block text-gray-700 w-full">
              More Info
              <br />
              <input type="text" id="image" placeholder="Enter info URL" required className="mt-2 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" />
            </label>
          </div>

          <button
            type="submit"
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
            onClick={async (e) => {
              e.preventDefault();
              dispatch(loadAirplanes());
              await (createPlane());
              dispatch(fetchAirplanes());
            }}
          >
            Add Airplane
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAirplane;
