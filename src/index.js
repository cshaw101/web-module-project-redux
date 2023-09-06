import React from 'react';
import ReactDOM from 'react-dom';
import { legacyStore as createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';

import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById('root')
);
