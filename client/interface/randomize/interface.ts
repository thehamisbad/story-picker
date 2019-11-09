import { Data } from '../data/interface';

export interface RandomSelectionAction {
    type: string;
    payload: RandomSelection[];
}

export interface RandomSelectionState {
    selections: RandomSelection[];
}

export interface RandomSelection {
    storyType: Data[];
    setting: Data[];
    plotPoint: Data[];
}

export interface RandomRequest {
    ammount: number;
    storyType: RandomArguments;
    setting: RandomArguments;
    plotPoint: RandomArguments;
}

export interface RandomArguments {
    selected: Data[];
    choices: Data[];
    upTo: number;
}

export const CHOOSE_TWO_ID = 0;