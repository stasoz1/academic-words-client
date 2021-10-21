import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header'
import Form from './components/Form/Form'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);