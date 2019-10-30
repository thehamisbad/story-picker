import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import './picker.scss';

export interface DropdownProps {
    title: string;
    selected: string[];
    upTo: number;
    items: string[];
    id: string;
    choose: (choice: string[]) => void;
}

const random = 'Random!';

class Picker extends React.Component<DropdownProps> {

    buildDropdownItems() {
        return this.props.items.map(
            (item, index) => (
                <Dropdown.Item 
                    key={ [this.props.id, index].join('-') } 
                    eventKey={item}
                >
                    {item}
                </Dropdown.Item>
            )
        );
    }

    buildSelectedItems() {
        if (this.props.selected == undefined 
                || this.props.selected.length < 1) {
            return (<p>{ random }</p>);
        }
        return this.props.upTo > 1 ?
            (<ol>{ this.props.selected.map(item => (<li>{item}</li>)) }</ol>) :
            (<p>{ this.props.selected }</p>);
    }

    onSelect(value: string) {
        const newSelected: string[] = [].concat(this.props.selected);
        newSelected.push(value);
        if (newSelected.length > this.props.upTo) {
            this.props.choose(newSelected.slice(1, newSelected.length));
        }
        else {
            this.props.choose(newSelected);
        }
    }

    render() {
        const dropdownItems = this.buildDropdownItems();
        const selectedItems = this.buildSelectedItems();
        return (
            <div className='Picker'>
                <Dropdown onSelect={ this.onSelect.bind(this) }>
                    <Dropdown.Toggle id={ this.props.id }>
                        { this.props.title }
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        { dropdownItems }
                    </Dropdown.Menu>
                </Dropdown>
                { selectedItems }
            </div>
        )
    }
}

export default Picker;