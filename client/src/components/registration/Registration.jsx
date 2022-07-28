import React from 'react';
import { useState } from 'react';
import { registration } from '../../redux/thunk/userThunk';
import { useNavigate } from "react-router-dom";



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



  function registerUser (e) {
    e.preventDefault();
    registration(name, email, password, date, gender, file)
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
    <div className='container__form'>
      <form onSubmit={registerUser}>
        <Input type='text' value={name} setValue={setName} placeholder='Enter your name'/>

        <Input type="email" placeholder='Enter your email' value={email} setValue={setEmail}/>
        <Input type="password" placeholder='Enter your password' value={password} setValue={setPassword}/>
        <Input type="date" placeholder='Your birthdate' value={date} setValue={setDate}/>
        <p>Ваш пол?</p>
        <p><input type="radio" name='gender' value='женский' onChange={(e) => setGender(e.target.value)}/>Женский</p>
        <p><input type="radio" name='gender' value='мужской' onChange={(e) => setGender(e.target.value)}/>Мужской</p>
        <input type="file" multiple={false} onChange={(e) => fileUploadHandler(e)} />
        <button>Enter</button>

      </form>
    </div>
  );
};

export default Registration;
