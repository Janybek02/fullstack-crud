import { configureStore } from '@reduxjs/toolkit';
 import DeleteSlice from './reducers/DeleteSlice' 
import PostSlice from './reducers/PostSlice';
import  getSlice  from './reducers/getSlice';
import  changeSlice from './reducers/Change';
export const store = configureStore({
  reducer: {
    get: getSlice,
    post:PostSlice,
    delete:DeleteSlice,
    change:changeSlice,
  },
});
