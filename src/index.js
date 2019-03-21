import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './List.css';
import './Card.css';
import './App.css';
import STORE from './store.js';

ReactDOM.render(<App store={STORE}/>, document.getElementById('root'));