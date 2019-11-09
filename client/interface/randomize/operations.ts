import actions from './actions';
import { RandomRequest, RandomArguments, CHOOSE_TWO_ID } from './interface';
import { Data } from '../data/interface';
import { Dispatch } from 'react';

const randomize = (randomReq: RandomRequest) => (dispatch: Dispatch<any>) => {
    const randomSelections = [];
    for (let i = 0; i < randomReq.ammount; i++){
        randomSelections.push({
            storyType: chooseFromArguments(randomReq.storyType),
            setting: chooseFromArguments(randomReq.setting),
            plotPoint: chooseFromArguments(randomReq.plotPoint),
        });
    }
    dispatch(actions.setRandomChoice(randomSelections));
}

const chooseFromArguments = (args: RandomArguments) => {
    if (args.selected.length === args.upTo) {
        if (args.selected[0].id === CHOOSE_TWO_ID) {
            return selectRandomChoice([], args.choices, 2);
        }
        return args.selected;
    }
    return selectRandomChoice(args.selected, args.choices, args.upTo);
}

const selectRandomChoice = (selected: Data[], choices: Data[], upTo: number): Data[] => {
    const randomSelections = [].concat(selected);
    while (randomSelections.length < upTo) {
        const index = Math.floor(Math.random() * choices.length);
        const random = choices[index]
        if (!randomSelections.includes(random)) {
            // Randomly picked choose 2 choice
            // This only happens in choose 1 options, so it 
            // Will just return the two choices together
            if(random.id === CHOOSE_TWO_ID) {
                const amendedChoices = choices.splice(0, index).concat(choices.slice(index + 1, choices.length));
                return selectRandomChoice(selected, amendedChoices, 2);
            } else {
                randomSelections.push(random);
            }
        }
    }
    return randomSelections
}

export default {
    randomize
};