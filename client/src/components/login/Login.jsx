import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { loginUser } from '../../redux/thunk/userThunk';
import Input from '../UI/Input';
import "./login.scss"

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
    <div className='login'>
      <h3 className="h3 login__title">Login</h3>
      <form onSubmit={loginHandler} className="form login__form">
        <Input value={email} setValue={setEmail} type='email' placeholder='Enter your email'/>
        <Input value={password} setValue={setPassword} type='password' placeholder='Enter your password' />
        <button className='button login__button'>Login</button>
      </form>
    </div>
  );
};

export default Login;
