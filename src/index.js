import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';
import { store } from './store'
import { Provider } from 'react-redux'



const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
    // eslint-disable-next-line react/jsx-no-undef
  <BrowserRouter>
   <Provider store={store}>
    <App />
  </Provider>
  </BrowserRouter>
);

