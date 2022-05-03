import './Login.css';
import { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import {Link} from 'react-router-dom'



export default function Signup() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [password, setPassword] = useState('');
const { error, isPending, signup } = useSignup();

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(name, email, password)
  }



  return(
    <form className='login-form' onSubmit={handleSubmit}>
      <h2>Signup</h2>
      
      <lable className='lable'>
        <span>username:</span>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
      </lable>

      <lable className='lable'>
        <span>email:</span>
        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </lable>
    
      <lable className='lable'>
        <span>password:</span>
        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </lable>
    
      <lable className='lable'>
       {!isPending && <button className='btn'>Signup</button>}
      </lable>
          {isPending &&  <button className='btn' disabled >Signup</button>}
          {error && <p className='error'>{error}</p>}

  <div className='or'>
      
            or <Link to='/login'>Login</Link>
          </div>
    </form>)
}