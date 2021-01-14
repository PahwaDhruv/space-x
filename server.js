import '@babel/polyfill';
import express from 'express';
import React from 'react';
import { matchPath, StaticRouter } from 'react-router-dom';
import routes from './routes';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import serialize from 'serialize-javascript';
import {renderToString}  from 'react-dom/server';
import App from'./client/src/App';
import rootReducer from './client/reducers/rootReducer';
import compression from 'compression';
import path from 'path';

// require('@babel/polyfill');
// const express = require('express');
// const React = require('react');
// const matchPath = require('react-router-dom').matchPath;
// const StaticRouter = require('react-router-dom').StaticRouter;
// const routes = require('./routes').default;
// const createStore = require('redux').createStore;
// const applyMiddleware = require('redux').applyMiddleware;
// const Provider = require('react-redux').Provider;
// const thunk = require('redux-thunk').default;
// const serialize = require('serialize-javascript').default;
// const renderToString = require('react-dom/server').renderToString;
// const App = require('./client/src/App').default;
// const path = require('path').default;
// const compression = require('compression');
// const rootReducer = require('./client/reducers/rootReducer').default;

const app = express();

app.use(compression());

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

// if(process.env.NODE_ENV ===  'production'){
//     app.use(express.static('public'));
//     app.get('*', (req,res) => {
//         res.sendFile(path.resolve(__dirname, 'public', 'bundle.js'))
//     })
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App Started on port ${PORT}`);
}) 