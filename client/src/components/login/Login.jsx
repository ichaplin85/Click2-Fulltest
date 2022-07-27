import React from 'react';

const Login = () => {
  return (
    <div className='container__login'>
      <form >
        <input type="email" placeholder='Enter your email'/>
        <input type="password" placeholder='Enter your password' />
        <button>Enter</button>
      </form>
      
    </div>
  );
};

export default Login;
