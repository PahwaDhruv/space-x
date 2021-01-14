require('babel/polyfill');
// import express from 'express';
const express = require('express');
// import React from 'react';
const React = require('react');
import { matchPath, StaticRouter } from 'react-router-dom';
// import routes from './routes';
const routes = require('./routes');
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
const thunk = require('redux-thunk');
// import serialize from 'serialize-javascript';
const serialize = require('serialize-javascript');

import {renderToString}  from 'react-dom/server';
// import App from'./client/src/App';
const App = require('./client/src/App');
// import rootReducer from './client/reducers/rootReducer';
const rootReducer = require('./client/reducers/rootReducer');
// import compression from 'compression';
const compression = require('compression');
// import path from 'path';
const path = require('path');


const app = express();

const PORT = process.env.PORT || 5000;

app.use(compression());

<<<<<<< HEAD

=======
// if(process.env.NODE_ENV ===  'production'){
//     app.use(express.static('public'));
//     app.get('*', (req,res) => {
//         res.sendFile(path.resolve(__dirname, 'public', 'bundle.js'))
//     })
// }
>>>>>>> 457437ccfeb52caa464388895f2073c664dcc394

app.use(express.static('public'));

app.get('*', (req, res) => {
        // create store for server
        const store = createStore(rootReducer, applyMiddleware(thunk));    
        const activeRoute = routes.find(route => matchPath(req.url, route)) || {}
        const promise = activeRoute.loadData ? activeRoute.loadData(store) : Promise.resolve();
        
        promise.then(() => {
            const content = renderToString(
                <Provider store = {store}>
                    <StaticRouter location={req.url} context={{}}>
                        <App />
                    </StaticRouter>
                </Provider>
            );

            const html = `
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>SpaceX Launch Program</title>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                    </head>
                    <body>
                        <div id="root">${content}</div>
                        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
                        <script src="bundle.js"></script>
                    </body>
                </html>
            `;
            res.send(html);
        });   
});

<<<<<<< HEAD
if(process.env.NODE_ENV ===  'production'){
    app.use(express.static('public'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, 'public', 'bundle.js'))
    })
}
=======
>>>>>>> 457437ccfeb52caa464388895f2073c664dcc394
app.listen(PORT, () => {
    console.log(`App Started on port ${PORT}`);
}) 