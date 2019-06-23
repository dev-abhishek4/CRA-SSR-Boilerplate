import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory, createMemoryHistory } from 'history';

import rootReducer from './reducers/index';
import { watchStatus } from './sagas/index';

// helper to test if we're on the server
export const isServer = !(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

export default (url = '/') => {
    // Create a history depending on the environment
    const history = isServer
        ? createMemoryHistory({
            initialEntries: [url]
        })
        : createBrowserHistory();

    let composeEnhancers;

    // tools for dev environment
    if (process.env.NODE_ENV === 'development' && !isServer) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    } else {
        composeEnhancers = compose;
    }

    // add redux-saga functionality
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware, routerMiddleware(history)];

    // if preloaded state is available
    const initialState = !isServer ? window.__PRELOADED_STATE__ : {};
    // delete preloaded state once it is stored in a variable
    if (!isServer) {
        delete window.__PRELOADED_STATE__;
    }

    // Create the store
    const store = createStore(
        rootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(...middleware))
    );

    sagaMiddleware.run(watchStatus);

    return {
        store,
        history
    };
};