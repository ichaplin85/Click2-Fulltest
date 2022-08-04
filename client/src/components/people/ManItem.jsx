import React from 'react';
import './manitem.scss'

const ManItem = ({name, gender, avatar}) => {

  const url = 'http://localhost:3002'
  const src = `${url}/${avatar}`

  return (
    <div className='item'>
      <img className='item__img' src={src} alt="logo" />
      <div className="item__name">{name}</div>
      <div className="item__gender">{gender}</div>
    </div>
  );
};

export default ManItem;
