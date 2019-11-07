import * as React from 'react';

export interface Choice {
    id: number;
    label: string;
}

export interface PickedChoiceProperties {
    selected: Choice[];
    upTo: number;
}

const random = {
    id: 0, 
    label: 'Random!'
};

class PickedChoice extends React.Component<PickedChoiceProperties> {

    render() {
        const display = new Array(this.props.upTo).fill(random);
        this.props.selected.forEach((value, index) => {
            display[index] = value;
        });
        return this.props.upTo > 1 ?
            (<ol>
                { display.map((item, index) =>
                    (<li key={[item.id, index].join('-')}>{ item.label }</li>)) }
            </ol>) :
            display[0].label;
    }
}

export default PickedChoice;