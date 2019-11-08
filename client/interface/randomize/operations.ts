import actions from './actions';
import { RandomRequest, RandomArguments } from './interface';
import { Dispatch } from 'react';

const randomize = (randomReq: RandomRequest) => (dispatch: Dispatch<any>) => {
    const randomSelections = [];
    for (let i = 0; i < randomReq.ammount; i++){
        randomSelections.push({
            storyType: selectRandom(randomReq.storyType),
            setting: selectRandom(randomReq.setting),
            plotPoint: selectRandom(randomReq.plotPoint),
        });
    }
    dispatch(actions.setRandomChoice(randomSelections));
}

const selectRandom = (args: RandomArguments) => {
    if (args.selected.length === args.upTo) {
        return args.selected;
    }
    const randomSelections = [].concat(args.selected);
    while (randomSelections.length < args.upTo) {
        const random = args.choices[Math.floor(Math.random() * args.choices.length)]
        if (!randomSelections.includes(random)) {
            randomSelections.push(random);
        }
    }
    return randomSelections;
}

export default {
    randomize
};