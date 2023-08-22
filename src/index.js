import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Styles/Global.css'
import {  BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './app/store/Store';
import ModalProvider from './app/ModalContext/ModalContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
    <ModalProvider>
    <App />
    </ModalProvider>
    

  </BrowserRouter>
  </Provider>
    
  
);


