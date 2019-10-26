import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../interface/global';
import StoryPicker from '../StoryPicker';
import operations from '../interface/data/operations';

function mapStateToProps(state: GlobalState) {
    return {
        storyTypes: state.data.storyTypes,
        settings: state.data.settings,
    }
}

const mapDispatchToProps = {
    loadStoryTypes: operations.loadStoryTypes,
    loadSettings: operations.loadSettings,
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryPicker);