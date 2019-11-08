import types from './types';
import { RandomSelection } from './interface';

const setRandomChoice = (choice: RandomSelection[]) => {
    return {
        type: types.SET_RANDOM,
        payload: choice,
    }
};

export default {
    setRandomChoice
};