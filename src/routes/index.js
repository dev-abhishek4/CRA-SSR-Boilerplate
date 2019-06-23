import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthenticatedRoute from '../components/authenticated-route';
import UnauthenticatedRoute from '../components/unauthenticated-route';

import Login from './login/login';
import Logout from './logout/logout';
import PageNotFound from './page-not-found/page-not-found';
import TestSaga from './test-saga/test-saga';

export default () => (
    <Switch>
        <Route path="/" exact render={() => (<div>Hello!! This is a working CRA SSR Project</div>)} />
        <Route path="/test-saga" component={TestSaga} />
        <UnauthenticatedRoute path="/login" component={Login} />
        <AuthenticatedRoute path="/logout" component={Logout} />
        <Route component={PageNotFound} />
    </Switch>
);