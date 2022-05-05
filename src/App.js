import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Airplanes from './pages/Airplanes';
import Reservations from './pages/Reservations';
import Reserve from './pages/Reserve';
import AddAirplane from './pages/addAirplane';
import RemoveAirplane from './pages/RemoveAirplane';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';
import Signup from './components/user-login-signup/Signup';
import Login from './components/user-login-signup/Login';
import Details from './pages/Details';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Airplanes />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/add-reservation" element={<Reserve />} />
        <Route path="/add-airplane" element={<AddAirplane />} />
        <Route path="/remove-airplane" element={<RemoveAirplane />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </>

);

export default App;
