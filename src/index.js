import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store'
import App from './components/App';


const target = document.querySelector('#root')

ReactDOM.render(
	  <Provider store={store}>
	  <App />
	  </Provider>, 
	   target
	  )
