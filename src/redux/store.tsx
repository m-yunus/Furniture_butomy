import { configureStore } from '@reduxjs/toolkit';
import cartslice from './cartReducer';


// Create the Redux store
const store = configureStore({
  reducer: {
    cart: cartslice, 
  },
});


export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;

export default store;
