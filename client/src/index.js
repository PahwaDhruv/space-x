import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(rootReducer, window.INITIAL_STATE, applyMiddleware(thunk));

ReactDOM.hydrate(
    <Provider store = {store}>
        <Router>
            <App />
        </Router>   
    </Provider>, 
    document.getElementById('root')
)