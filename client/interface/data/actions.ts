import types from './types';
import { Data } from './interface';

const loadStoryTypes = (storyTypes: Data[]) => createAction(types.LOAD_STORY_TYPES, storyTypes);

const loadSettings = (settings: Data[]) => createAction(types.LOAD_SETTINGS, settings);

const loadPlotPoints = (plotPoints: Data[]) => createAction(types.LOAD_PLOT_POINTS, plotPoints);

function createAction(type: string, payload?: string[] | Data[], selected?: Data[]) {
    return {
        type,
        payload,
        selected,
    }
}

const selectStoryType = (storyType: Data[]) => createAction(types.SELECT_STORY_TYPE, [], storyType);

const selectSetting = (setting: Data[]) => createAction(types.SELECT_SETTING, [], setting);

const selectPlotPoint = (plotPoint: Data[]) => createAction(types.SELECT_PLOT_POINT, [], plotPoint);

export default {
    loadStoryTypes,
    loadSettings,
    loadPlotPoints,
    selectStoryType,
    selectSetting,
    selectPlotPoint,
}