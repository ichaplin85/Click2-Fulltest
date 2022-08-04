import React from 'react';
import { useState } from 'react';
import { registration } from '../../redux/thunk/userThunk';
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'



import Input from '../UI/Input';
import './registration.scss'

const Registration = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const [file, setFile] = useState();

  const navigate = useNavigate()
  const dispatch = useDispatch()



  function registerUser (e) {
    e.preventDefault();
    dispatch(registration(name, email, password, date, gender, file))
    setFile('')
    setEmail('');
    setName('');
    setPassword('')
    setDate('')
    setGender('')
    navigate('/')
  }

  function fileUploadHandler (e) {
    e.preventDefault()
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className='registration'>
      <h3 className='h3 registration__title'>Registration</h3>
      <form onSubmit={registerUser} className="form registration__form">
        <Input type='text' value={name} setValue={setName} placeholder='Enter your name'/>

        <Input type="email" placeholder='Enter your email' value={email} setValue={setEmail}/>
        <Input type="password" placeholder='Enter your password' value={password} setValue={setPassword}/>
        <Input type="date" placeholder='Your birthdate' value={date} setValue={setDate}/>
        <div className="registration__select">
        <label className='registration__label'>Your gender:</label>
          <p><input type="radio" name='gender' value='man' onChange={(e) => setGender(e.target.value)}/>Man</p>
          <p><input type="radio" name='gender' value='woomen' onChange={(e) => setGender(e.target.value)}/>Woomen</p>
        </div>
        <input accept='image/*' type="file" multiple={false} onChange={(e) => fileUploadHandler(e)} />
        <button className='button registration__button'>Register</button>

      </form>
    </div>
  );
};

export default Registration;
