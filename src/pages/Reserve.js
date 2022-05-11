import { useState } from 'react';
import './Login.css';

export default function Reserve() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // reserve(from, to);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Reservation</h2>
      <lable className="lable">
        <span>From:</span>
        <input type="date" onChange={(e) => setFrom(e.target.value)} value={from} />
      </lable>

      <lable className="lable">
        <span>To:</span>
        <input type="date" onChange={(e) => setTo(e.target.value)} value={to} />
      </lable>

      <lable className="lable">
        <button className="btn" type="button">Add Reservation</button>
      </lable>

    </form>
  );
}
