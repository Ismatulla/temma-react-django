// Material UI fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';

// react router

import { BrowserRouter } from 'react-router-dom'

// redux - toolkit
import store from './store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

