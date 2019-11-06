import types from './types';
import { DataAction, DataState } from './interface';

export const baseDataState: DataState = {
    storyTypes: [],
    settings: [],
    plotPoints: [],
    selectedStoryType: [],
    selectedSetting: [],
    selectedPlotPoints: [],
}

const dataReducer = (state = baseDataState, action: DataAction) => {
    switch (action.type) {
        case types.LOAD_STORY_TYPES: 
            return {
                ...state,
                storyTypes: action.payload
            };
        case types.LOAD_SETTINGS:
            return {
                ...state,
                settings: action.payload
            };
        case types.LOAD_PLOT_POINTS:
            return {
                ...state,
                plotPoints: action.payload
            };
        case types.SELECT_STORY_TYPE:
            return {
                ...state,
                selectedStoryType: action.selected
            }
        case types.SELECT_SETTING:
            return {
                ...state,
                selectedSetting: action.selected
            }
        case types.SELECT_PLOT_POINT:
            return {
                ...state,
                selectedPlotPoints: action.selected
            }
        default:
            return state;
    }
}

export default dataReducer;