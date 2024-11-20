import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./get/getSlice"
import PostSlice from './post/PostSlice';
// import  getImageSlice  from './image/getImage';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    poster: PostSlice,

  },
});
