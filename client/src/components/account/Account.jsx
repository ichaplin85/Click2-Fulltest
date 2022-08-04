import React, {useState} from 'react';
import { changeUserData } from '../../redux/thunk/userThunk';
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'


import Input from '../UI/Input';
import './account.scss';
import InputFile from '../UI/InputFile';

const Account = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState({});

  const dispatch = useDispatch()
  const navigate = useNavigate()


  function fileUploadHandler (e) {
    e.preventDefault()
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  function changeUserHandler (e) {

    e.preventDefault();
    dispatch(changeUserData(name, password, file))
    setName('');
    setPassword('');
    navigate('/people')

  }

  return (
    <div className='account container'>
      <h3 className="account__title">Editing</h3>
      <form onSubmit={changeUserHandler} className="form account__form"> 
        <Input type="text" value={name} setValue={setName} placeholder="Change your name"/>
        <Input type="password" value={password} setValue={setPassword} placeholder="Change you password"/>
        <InputFile file={file} fileUploadHandler={fileUploadHandler}/>
        <button className='button account__button'>Edit</button>
      </form>
    </div>
  );
};

export default Account;
