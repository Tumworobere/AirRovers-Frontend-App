import { useState } from 'react';
import {Link} from 'react-router-dom'
import reserve  from './hooks/reserve'

export default function Reservation () {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    reserve(from,to)
  }

  return(
<form className='login-form' onSubmit={handleSubmit}>
  <h2>Today's Date</h2>
  
  <lable className='lable'>
    <span>From:</span>
    <input type="date" onChange={(e) => setFrom(e.target.value)} value={from} />
  </lable>

  <lable className='lable'>
    <span>To:</span>
    <input type="date" onChange={(e) => setTo(e.target.value)} value={to} />
  </lable>

  <lable className='lable'>
    <button className='btn'>Add Reservation</button>
  </lable>

</form>)
}

