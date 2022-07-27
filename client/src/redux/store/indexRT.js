
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
  reducer: {users, files},

})

export default store;
