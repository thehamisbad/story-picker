import { RandomSelection } from '../../interface/randomize/interface';
import { Data } from '../../interface/data/interface';

function displayData(data: Data[]) {
    const items: string[] = [];
    data.forEach(d => items.push(d.label));
    return items.join(', ');
}

function sortData(key: keyof RandomSelection) {
    return (a:RandomSelection, b: RandomSelection) => a[key][0].label.localeCompare(b[key][0].label);
}

export const STORY_TYPE_COLUMN = {
    heading: 'Story Type',
    value: (selection: RandomSelection, index: number) => index + '. ' + displayData(selection.storyType),
    id: 'story',
    sort: sortData('storyType'),
}

export const SETTING_COLUMN  = {
    heading: 'Setting',
    value: (selection: RandomSelection) => displayData(selection.setting),
    id: 'setting',
    sort: sortData('setting'),
}

export const PLOT_POINT_COLUMN  = {
    heading: 'Plot Points',
    value: (selection: RandomSelection) => displayData(selection.plotPoint),
    id: 'plot',
    sort: sortData('plotPoint'),
}