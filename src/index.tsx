import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './App';

import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import { firebaseConfig } from './.env.js';

initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
