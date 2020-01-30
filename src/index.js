import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import rootReducer from './reducers';

import App from './App';
import './styles.css';

// Step 1 - create a store and connect it to our app
// use createStore function
const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store.getState());

// STEP Ia - Provide the store to your app
// use the <Provider /> component and pass in your store as a prop

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
