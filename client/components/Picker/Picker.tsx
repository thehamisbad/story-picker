import * as React from 'react';
import Modal from '../Modal/Modal';
import PickedChoice, { Choice } from './PickedChoice';
const classnames = require('classnames');

import './picker.scss';

export interface DropdownProps {
    title: string;
    selected: Choice[];
    upTo: number;
    items: Choice[];
    id: string;
    choose: (choice: Choice[]) => void;
    clear: () => void;
}

class Picker extends React.Component<DropdownProps> {

    selectChoice(value: Choice) {
        const newSelected: Choice[] = [].concat(this.props.selected);
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
        const choices = this.props.items.map(item => (
            <li 
                className={classnames('Picker-choice', this.props.selected.includes(item) ? 'selected' : '') } 
                onClick={ () => this.selectChoice(item)}
                key={[this.props.id, item.id].join('-')}
            >
                <p className='Picker-choiceWrapper'>{ item.label }</p>
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
                <div className='Picker-title'>{ this.props.title }</div>
                <Modal content={ choices } buttonText='Pick!'/>
            </div>
        )
    }
}

export default Picker;