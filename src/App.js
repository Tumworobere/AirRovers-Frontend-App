/* eslint-disable no-nested-ternary */
import {
  HashRouter as Router, Routes, Route,
} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAirplanes } from './redux/airplanes/airplanes';
import { fetchReservations } from './redux/reservations/reservations';
import Airplanes from './pages/Airplanes';
import Reservations from './pages/Reservations';
import AddAirplane from './pages/addAirplane';
import RemoveAirplane from './pages/RemoveAirplane';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Reserve from './pages/Reserve';
import Login from './pages/Login';
import Details from './pages/Details';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (sessionStorage.getItem('token') !== null) {
      dispatch(fetchAirplanes());
      dispatch(fetchReservations());
    }
  }, [dispatch]);
  const loading1 = useSelector((state) => state.airplanes.loading);
  const loading2 = useSelector((state) => state.reservations.loading);
  const { hash } = window.location;
  const newUser = () => {
    window.location = '#/login';
  };

  return (
    <Router>
      {sessionStorage.length !== 0 ? loading1 || loading2 : newUser()}
      {hash !== '#/login' && hash !== '#/register' ? <Navbar /> : null }
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/add-reservation" element={<Reserve />} />
        <Route path="/" element={<Airplanes />} />
        <Route path="/add-airplane" element={<AddAirplane />} />
        <Route path="/remove-airplane" element={<RemoveAirplane />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
