/* eslint-disable import/named */
/* eslint-disable no-unused-expressions */
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { topDown } from '../animations';
import PlaneCard from '../components/PlaneCard';

const RemoveAirplane = () => {
  const navigate = useNavigate();
  const airplanes = useSelector((state) => state.airplanes.airplanes_arr);
  useEffect(() => {
    window.sessionStorage.getItem('token') == null ? navigate('/login') : null;
    topDown();
  }, []);
  return (
    <div id="main" className="p-4 md:p-24 flex justify-center flex-col w-full md:w-3/4 lg:w-5/6 transition-all opacity-0 -translate-y-full origin-left ease-out duration-500">
      <h1 className="cool-title text-center !text-3xl md:!text-5xl">Delete an Airplane</h1>
      <hr className="h-1 border-slate-700 mt-4" />
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-evenly mt-20 m-auto w-full h-full" style={{ gap: '20px' }}>
        {airplanes.map((airplane) => (
          <PlaneCard key={airplane.id} airplane={airplane} />
        ))}
      </ul>
    </div>
  );
};

export default RemoveAirplane;
