import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export interface DropdownProps {
    title: string;
    selected: string;
    items: string[];
    id: string;
}

const random = 'Random!';

class Picker extends React.Component<DropdownProps> {

    buildDropdownItems() {
        return this.props.items.map(
            item => (<Dropdown.Item>{item}</Dropdown.Item>)
        );
    }

    render() {
        const dropdownItems = this.buildDropdownItems();
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle id={ this.props.id }>
                        { this.props.title }
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        { dropdownItems }
                    </Dropdown.Menu>
                </Dropdown>
                <p>
                    { this.props.selected ? this.props.selected : random }
                </p>
            </div>
        )
    }
}

export default Picker;