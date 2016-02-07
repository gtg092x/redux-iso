import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../stores';
import App from './App';

const store = configureStore();

export default (props) => (
  <Provider store={store}>
    <App {...props} />
  </Provider>
);
