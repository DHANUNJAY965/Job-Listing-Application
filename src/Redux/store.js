// store.js
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers';

const store = configureStore({
  reducer: reducer,
  // Optionally add middleware, devtools, etc.
});

export default store;
