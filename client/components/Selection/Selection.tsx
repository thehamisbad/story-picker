import * as React from 'react';
import { RandomSelection } from '../../interface/randomize/interface';
import SortableTable from '../Table/SortableTable';
import { STORY_TYPE_COLUMN, SETTING_COLUMN, PLOT_POINT_COLUMN } from './SelectionColumns';

import './selection.scss';

export interface SelectionProps {
    selections: RandomSelection[];
}

class Selection extends React.Component<SelectionProps> {

    render() {
        const table = this.props.selections.length > 0 ?
            (<SortableTable
                id='random-selections'
                data={ this.props.selections } 
                columns={ [STORY_TYPE_COLUMN, SETTING_COLUMN, PLOT_POINT_COLUMN] } />)
            : ""
        return (
            <div className='Selections'>
                { table }
            </div>
        )
    }
}

export default Selection;