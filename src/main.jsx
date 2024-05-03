

import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './Redux/store'; // Assuming you have configured your Redux store in this file
import App from './App';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
