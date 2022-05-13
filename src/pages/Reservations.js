/* eslint-disable no-unused-expressions */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import ReservationCard from '../components/ReservationCard';
import { topDown } from '../animations';

const Reservations = () => {
  const navigate = useNavigate();
  const reservations = useSelector((state) => state.reservations.reservations_arr);
  useEffect(() => {
    window.sessionStorage.getItem('token') == null ? navigate('/login') : null;
    topDown();
  }, []);
  return (
    <div id="main" className="p-4 md:p-24 flex justify-center flex-col w-full md:w-3/4 lg:w-5/6 h-screen transition-all opacity-0 -translate-y-full origin-left ease-out duration-500">
      <h1 className="cool-title text-center !text-3xl md:!text-5xl">Reservations</h1>
      <hr className="h-1 border-slate-700 mt-4" />
      <ul className={`${reservations.length === 0 ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-evenly'} mt-20 m-auto w-full h-full`} style={{ gap: '20px' }}>
        {reservations.length === 0
          ? <h1 className="w-full m-auto text-center cool-title">No reservation added yet!</h1>
          : (reservations.map((reservation) => (
            <ReservationCard key={uuidv4()} reservation={reservation} />
          )))}
      </ul>
    </div>
  );
};

export default Reservations;
