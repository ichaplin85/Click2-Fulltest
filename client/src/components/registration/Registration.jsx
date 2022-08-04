import React from 'react';
import { useState, createRef } from 'react';
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

  const fileInput = createRef();

  const navigate = useNavigate()
  const dispatch = useDispatch()



  function registerUser (e) {
    e.preventDefault();
    dispatch(registration(name, email, password, date, gender, file))
    setEmail('');
    setName('');
    setPassword('')
    setDate('')
    setGender('')
    navigate('/people')
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
        <h5 className='registration__label'>Your gender:</h5>
          <div className="registration__radio">
            <input id='radio-1' type="radio" name='gender' value='man' onChange={(e) => setGender(e.target.value)}/>
            <label htmlFor='radio-1' className='registration__radio-label'>Man</label>
          </div>
          <div className="registration__radio">
            <input id='radio-2' type="radio" name='gender' value='woomen' onChange={(e) => setGender(e.target.value)}/>
            <label htmlFor='radio-2' className='registration__radio-label'>Woomen</label>
          </div>
        </div>
        <div className="registration__file">
          <input id='file' accept='image/*' type="file" ref={fileInput} multiple={false} onChange={(e) => fileUploadHandler(e)} />
          <label htmlFor="file" className='registration__file-button'>           
           { file ? <span>{file.name}</span> : <span>Choose a file</span> }
          </label>
        </div>
        <button className='button registration__button'>Register</button>

      </form>
    </div>
  );
};

export default Registration;
