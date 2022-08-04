import React from 'react';
import ManItem from './ManItem';
import { useSelector } from 'react-redux';
import './people.scss'

const People = () => {


  let users = useSelector(state => state.user.users)

  const currentUserId = useSelector(state => state.user.currentUser.id)
  const newUsers = users.filter(user => user._id !== currentUserId)

  // const userComponent = currentUsers.map(user => <ManItem user={user} key={user.id}/>)

  return (
    <div className='people'>
      {newUsers.map(user => <ManItem 
                                  key={user._id} 
                                  name={user.name} 
                                  avatar={user.avatar} 
                                  gender={user.gender}
      />)}
    </div>
  );
};

export default People;
