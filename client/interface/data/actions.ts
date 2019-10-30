import types from './types';

const loadStoryTypes = (storyTypes: string[]) => createAction(types.LOAD_STORY_TYPES, storyTypes);

const loadSettings = (settings: string[]) => createAction(types.LOAD_SETTINGS, settings);

const loadPlotPoints = (plotPoints: string[]) => createAction(types.LOAD_PLOT_POINTS, plotPoints);

function createAction(type: string, payload?: string[], selected?: string[]) {
    return {
        type,
        payload,
        selected,
    }
}

const selectStoryType = (storyType: string[]) => createAction(types.SELECT_STORY_TYPE, [], storyType);

const selectSetting = (setting: string[]) => createAction(types.SELECT_SETTING, [], setting);

const selectPlotPoint = (plotPoint: string[]) => createAction(types.SELECT_PLOT_POINT, [], plotPoint);

export default {
    loadStoryTypes,
    loadSettings,
    loadPlotPoints,
    selectStoryType,
    selectSetting,
    selectPlotPoint,
}