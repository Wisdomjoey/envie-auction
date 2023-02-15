import { configureStore } from '@reduxjs/toolkit';
import auctionSlice from './reducers/auctionSlice';
import authSlice from './reducers/authSlice';
import bidSlice from './reducers/bidSlice';
import counter from './reducers/counter';
import userSlice from './reducers/userSlice';

const store = configureStore({ reducer: {
  counter: counter,
  auth: authSlice,
  user: userSlice,
  bid: bidSlice,
  auction: auctionSlice,
},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), });

export default store;
