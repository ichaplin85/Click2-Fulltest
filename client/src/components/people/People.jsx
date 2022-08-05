import React from 'react';
import ManItem from './ManItem';
import { useDispatch, useSelector } from 'react-redux';
import './people.scss'
import { useEffect } from 'react';
import { fetchUsers } from '../../redux/thunk/userThunk';
import Loader from '../loader/Loader';

const People = () => {

  const dispatch = useDispatch()
  const users = useSelector(state => state.user.users)
  const {usersLoadingStatus} = useSelector(state => state.user)

  const currentUserId = useSelector(state => state.user.currentUser.id)
  const newUsers = users?.filter(user => user._id !== currentUserId)

  useEffect(() => {
    dispatch(fetchUsers())

  }, [dispatch])

  // const userComponent = currentUsers.map(user => <ManItem user={user} key={user.id}/>)

  if (usersLoadingStatus === 'loading') {
    return (
      <Loader/>
    )
  } else if (usersLoadingStatus === 'error') {
    return (
      <div>Error...</div>
    )
  }

  return (
    <div className='people'>
      {newUsers?.map(user => <ManItem 
                                  key={user._id} 
                                  name={user.name} 
                                  avatar={user.avatar} 
                                  gender={user.gender}
      />)}
    </div>
  );
};

export default People;
