import React from 'react';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import createStore from './store/store';

import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Create a store and get its history object
const { store, history } = createStore();

// used <ConnectedRouter /> rather than <BrowserRouter> for running locally
// ConnectedRouter is to be used with Redux and can synchronize router state with a Redux store.
// BrowserRouter is the 'standard' React router for the browser, to keep the UI in sync with the current URL.

const Application = (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
);

const root = document.querySelector('#root');

if (root.hasChildNodes() === true) {
    // If we are running on the server
    hydrate(Application, root);
} else {
    render(Application, root);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
