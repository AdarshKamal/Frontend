import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './context/auth';
/** Redux Store */
import store from './redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <AuthProvider>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
</AuthProvider>
  </Provider>
);

// <Provider store={store}>
//     <App />
//   </Provider>
reportWebVitals();