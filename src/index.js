import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import React from 'react';



const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
    // eslint-disable-next-line react/jsx-no-undef
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

