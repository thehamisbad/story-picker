import types from './types';
import { RandomSelectionAction, RandomSelectionState } from './interface';

export const baseRandomState: RandomSelectionState = {
    selections: []
};

const randomReducer = (state = baseRandomState, action: RandomSelectionAction) => {
    switch (action.type) {
        case types.SET_RANDOM: 
            return {
                ...state,
                selections: action.payload
            };
        default:
            return state;
    }
}

export default randomReducer;