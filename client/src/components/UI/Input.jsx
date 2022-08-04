import React from 'react';
import "./input.scss"

const Input = ({type, placeholder, value, setValue, name}) => {

  return (
    <input
    className='input' 
    type={type} 
    placeholder={placeholder} 
    value={value} 
    onChange={(e) => setValue(e.target.value)} 
    name={name}
    />
  );
};

export default Input;
