import React from 'react';
import { connect } from 'react-redux';
import RouteDom from '../../components/route-dom';

import * as actionCreators from '../../store/actions';

const Logout = props => (
    <RouteDom id="logout" title="Logout" description="logout logic">
        <button onClick={() => props.logout()}>
            Click to Logout
        </button>
    </RouteDom>
);

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actionCreators.logoutAction()),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Logout);