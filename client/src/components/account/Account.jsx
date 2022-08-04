import React, {useState} from 'react';
import { changeUserData } from '../../redux/thunk/userThunk';
import {useDispatch} from 'react-redux'


import Input from '../UI/Input';

const Account = () => {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState({});
  const dispatch = useDispatch()

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
    setFile('');
  }

  return (
    <div className='account__container'>
      <form onSubmit={changeUserHandler}> 
        <Input type="text" value={name} setValue={setName} placeholder="Change your name"/>
        <Input type="password" value={password} setValue={setPassword} placeholder="Change you password"/>
        <input accept='image/*' type="file" onChange={(e) => fileUploadHandler(e)}/>
        <button >Change profile</button>
      </form>
    </div>
  );
};

export default Account;
