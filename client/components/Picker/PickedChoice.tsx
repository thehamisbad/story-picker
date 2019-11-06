import * as React from 'react';

export interface PickedChoiceProperties {
    selected: string[];
    upTo: number;
}

const random = 'Random!';

class PickedChoice extends React.Component<PickedChoiceProperties> {

    render() {
        const display = new Array(this.props.upTo).fill(random);
        this.props.selected.forEach((value, index) => {
            display[index] = value;
        });
        return this.props.upTo > 1 ?
            (<ol>
                { display.map((item, index) =>
                    (<li key={[item, index].join('-')}>{item}</li>)) }
            </ol>) :
            display[0];
    }
}

export default PickedChoice;