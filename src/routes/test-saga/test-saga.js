import React, { useRef } from 'react';
import { connect } from 'react-redux';
import RouteDom from '../../components/route-dom';

import * as actionCreators from '../../store/actions';

const TestSaga = props => {
    const inputRef = useRef();

    return (
        <RouteDom id="test-saga" title="Test Saga" className="test-saga" description="to check if Saga is working">
            <input ref={inputRef} type="text" />
            <button onClick={() => props.testAction(inputRef.current.value)}>
                Click to Saga
            </button>
            <p>
                Current value of username : {props.username}
            </p>
        </RouteDom>
    );
}

const mapStateToProps = state => {
    return {
        username: state.test.username,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        testAction: (username) => dispatch(actionCreators.testAction(username))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestSaga);