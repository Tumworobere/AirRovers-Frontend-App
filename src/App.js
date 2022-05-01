import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Airplanes from './pages/Airplanes';
import Reservations from './pages/Reservations';
import Reserve from './pages/Reserve';
import AddAirplane from './pages/addAirplane';
import RemoveAirplane from './pages/RemoveAirplane';
import ErrorPage from './pages/ErrorPage';
import Navbar from './components/Navbar';

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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </>

);

export default App;
