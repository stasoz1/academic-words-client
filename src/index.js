import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header'
import Form from './components/Form/Form'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Header />
      <Form />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);