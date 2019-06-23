import React from 'react';
import { connect } from 'react-redux';
import RouteDom from '../../components/route-dom';

import * as actionCreators from '../../store/actions';

const Login = props => (
    <RouteDom id="login" title="Login" description="login logic">
        <button onClick={() => props.login()}>
            Click to Login
        </button>
    </RouteDom>
);

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(actionCreators.loginAction()),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login);