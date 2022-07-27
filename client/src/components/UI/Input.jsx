import React from 'react';

const Input = ({type, placeholder, value, setValue, name}) => {

  return (
    <input 
    type={type} 
    placeholder={placeholder} 
    value={value} 
    onChange={(e) => setValue(e.target.value)} 
    name={name}
    />
  );
};

export default Input;
