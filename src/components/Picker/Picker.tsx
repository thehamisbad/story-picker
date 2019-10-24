import * as React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export interface DropdownProps {
    title: string;
    selected: string;
    items: string[];
    id: string;
}

class Picker extends React.Component<DropdownProps> {

    buildDropdownItems() {
        const items = this.props.items.map(
            item => (<Dropdown.Item>{item}</Dropdown.Item>)
            );
        return [(<Dropdown.Item>--RANDOM--</Dropdown.Item>)].concat(items);
    }

    render() {
        const dropdownItems = this.buildDropdownItems();
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle id={ this.props.id }>
                        { this.props.selected ? this.props.selected : this.props.title }
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                    { dropdownItems }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

export default Picker;