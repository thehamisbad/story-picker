import * as React from 'react';
import Modal from '../Modal/Modal';
import PickedChoice from './PickedChoice';
const classnames = require('classnames');

import './picker.scss';

export interface DropdownProps {
    title: string;
    selected: string[];
    upTo: number;
    items: string[];
    id: string;
    choose: (choice: string[]) => void;
    clear: () => void;
}

class Picker extends React.Component<DropdownProps> {

    selectChoice(value: string) {
        const newSelected: string[] = [].concat(this.props.selected);
        newSelected.push(value);
        if (newSelected.length > this.props.upTo) {
            this.props.choose(newSelected.slice(1, newSelected.length));
        }
        else {
            this.props.choose(newSelected);
        }
    }

    clearChoice() {
        this.props.clear();
    }

    buildChoices() {
        const choices = this.props.items.map((item, index) => (
            <li 
                className={classnames('Picker-choice', this.props.selected.includes(item) ? 'selected' : '') } 
                onClick={ () => this.selectChoice(item)}
                key={[item, index].join('-')}
            >
                <p className='Picker-choiceWrapper'>{ item }</p>
            </li>
        ));
        return (
            <div className='Picker-choiceModal'>
                <div className='Picker-currentChoiceWrapper'>
                    <div className='Picker-currentChoice'>
                        Current Choice: 
                        <span>
                            <PickedChoice selected={ this.props.selected } upTo={ this.props.upTo } />
                        </span>
                    </div>
                    <button 
                        className='Picker-clear primary'
                        onClick={ () => this.clearChoice() }
                    >
                        Clear
                    </button>
                </div>
                <ul className='Picker-choices'>
                    { choices }
                </ul>
            </div>
        )
    }

    render() {
        const choices = this.buildChoices();
        return (
            <div className='Picker'>
                <Modal content={ choices } buttonText={ this.props.title }/>
            </div>
        )
    }
}

export default Picker;