
import React from 'react'
import ReactDOM from 'react-dom';
import store from './redux/store'
import { Provider } from 'react-redux'
import {BrowserRouter } from 'react-router-dom'
import Routes from './router/index'

// BrowserRouter HashRouter
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Provider store={store}><BrowserRouter>{Routes}</BrowserRouter></Provider>,document.getElementById('root'));

registerServiceWorker();
