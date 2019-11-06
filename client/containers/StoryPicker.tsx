import * as React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../interface/global';
import StoryPicker from '../StoryPicker';
import operations from '../interface/data/operations';

function mapStateToProps(state: GlobalState) {
    return {
        storyTypes: state.data.storyTypes,
        settings: state.data.settings,
        plotPoints: state.data.plotPoints,
        selectedStoryType: state.data.selectedStoryType,
        selectedSetting: state.data.selectedSetting,
        selectedPlotPoints: state.data.selectedPlotPoints,
    }
}

const mapDispatchToProps = {
    loadStoryTypes: operations.loadStoryTypes,
    loadSettings: operations.loadSettings,
    loadPlotPoints: operations.loadPlotPoints,
    selectStoryType: operations.selectStoryType,
    selectSetting: operations.selectSetting,
    selectPlotPoint: operations.selectPlotPoint,
    clearStoryType: operations.clearStoryType,
    clearSetting: operations.clearSetting,
    clearPlotPoint: operations.clearPlotPoint,
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryPicker);