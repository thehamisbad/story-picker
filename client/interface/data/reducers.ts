import types from './types';
import { DataAction, DataState } from './interface';

export const baseDataState: DataState = {
    storyTypes: [],
    settings: []
}

const dataReducer = (state = baseDataState, action: DataAction) => {
    switch (action.type) {
        case types.LOAD_STORY_TYPES: 
            return {
                ...state,
                storyTypes: action.payload.storyTypes
            };
        case types.LOAD_SETTINGS:
            return {
                ...state,
                settings: action.payload.settings
            };
        default:
            return state;
    }
}

export default dataReducer;