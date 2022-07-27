import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { loginUser } from '../../redux/thunk/userThunk';
import Input from '../UI/Input';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()


  const loginHandler = (e)=> {
    e.preventDefault()
    dispatch(loginUser(email, password))
    setEmail('')
    setPassword('')
  }

  console.log('email', email);
  console.log('password', password);

  return (
    <div className='container__login'>
      <div className="container__text">Login</div>
      <form onSubmit={loginHandler}>
        <Input value={email} setValue={setEmail} type='email' placeholder='Enter your email'/>
        <Input value={password} setValue={setPassword} type='password' placeholder='Enter your password' />
        <button>Enter</button>
      </form>
      
    </div>
  );
};

export default Login;
