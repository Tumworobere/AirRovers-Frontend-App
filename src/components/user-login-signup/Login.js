import './Login.css';
import { useState } from 'react';
import {Link} from 'react-router-dom'


export default function Login () {
  // const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(email,password);
  }

  return(
<form className='login-form' onSubmit={handleSubmit}>
  <h2>Login</h2>
  
  <lable className='lable'>
    <span>email:</span>
    <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
  </lable>

  <lable className='lable'>
    <span>password:</span>
    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
  </lable>

  <lable className='lable'>
    <button className='btn'>Login</button>
  </lable>

  <div className='or'>
            or <Link to='/signup'>sign up</Link>
          </div>
</form>)
}