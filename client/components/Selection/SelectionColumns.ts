import { RandomSelection } from '../../interface/randomize/interface';
import { Data } from '../../interface/data/interface';

function displayData(data: Data[]) {
    const items: string[] = [];
    data.forEach(d => items.push(d.label));
    return items.join(', ');
}

export const STORY_TYPE_COLUMN = {
    heading: 'Story Type',
    value: (selection: RandomSelection, index: number) => index + '. ' + displayData(selection.storyType),
}

export const SETTING_COLUMN  = {
    heading: 'Setting',
    value: (selection: RandomSelection) => displayData(selection.setting),
}

export const PLOT_POINT_COLUMN  = {
    heading: 'Plot Points',
    value: (selection: RandomSelection) => displayData(selection.plotPoint),
}