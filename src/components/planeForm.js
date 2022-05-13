import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { dateDifference, TODAY, MONTHLATER } from '../logic/date';
import { PostReservation } from '../redux/reservations/reservations';

const PlaneForm = (props) => {
  const { airplane } = props;
  const { rental_price: price } = airplane;

  const initialForm = {
    'start-date': TODAY,
    'end-date': TODAY,
  };

  const dispatch = useDispatch();

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const navigate = useNavigate();
  const handleReserve = (e) => {
    e.preventDefault();
    dispatch(PostReservation(form['start-date'], form['end-date'], airplane));
    navigate('../reservations', { replace: true });
  };

  const amount = dateDifference(form['start-date'], form['end-date'], price);

  const messageVerifier = (amount) => {
    if (amount > 0) {
      return `Reservation cost: ${amount} USD`;
    }
    return 'Invalid end-date';
  };

  const classVerifier = (amount) => {
    if (amount > 0) {
      return 'text-center text-green-400 mb-5 font-bold';
    }
    return 'text-center text-red-400 mb-5 font-bold';
  };

  return (
    <form className="flex flex-col" id="reserve_form">
      <div className="flex justify-evenly mb-10 w-full">
        <label htmlFor="date-start" className="text-center flex flex-col">
          <span className="mb-4">Reservation start-date:</span>
          <input
            type="date"
            id="start_date"
            name="start-date"
            min={TODAY}
            max={MONTHLATER}
            placeholder="from"
            className="bg-gray-600 rounded-full p-2"
            value={form['start-date']}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="date-end" className="text-center flex flex-col">
          <span className="mb-4">Reservation end-date:</span>
          <input
            type="date"
            id="end_date"
            name="end-date"
            min={TODAY}
            max={MONTHLATER}
            placeholder="until"
            className="bg-gray-600 rounded-full p-2"
            value={form['end-date']}
            onChange={handleChange}
          />
        </label>
      </div>
      <span className={classVerifier(amount)}>
        {messageVerifier(amount)}
      </span>
      <button
        type="button"
        className="plane-form-button rounded-full"
        onClick={handleReserve}
      >
        RESERVE
      </button>
    </form>
  );
};

PlaneForm.propTypes = {
  airplane: PropTypes.instanceOf(Object).isRequired,
};

export default PlaneForm;
