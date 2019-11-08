import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../interface/global';
import Selection from '../components/Selection/Selection';

function mapStateToProps(state: GlobalState) {
    return {
        selections: state.random.selections,
    }
}

export default connect(mapStateToProps)(Selection);