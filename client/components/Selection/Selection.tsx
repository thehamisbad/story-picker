import * as React from 'react';
import { RandomSelection } from '../../interface/randomize/interface';
import SortableTable from '../Table/SortableTable';
import { STORY_TYPE_COLUMN, SETTING_COLUMN, PLOT_POINT_COLUMN } from './SelectionColumns';
import ScrollShadows from '../ScrollShadows/ScrollShadows';

import './selection.scss';

export interface SelectionProps {
    selections: RandomSelection[];
}

class Selection extends React.Component<SelectionProps> {

    render() {
        const table = this.props.selections.length > 0 ?
            (
                <ScrollShadows scrollId='random-selections'>
                    <SortableTable
                        id='random-selections'
                        data={ this.props.selections } 
                        columns={ [STORY_TYPE_COLUMN, SETTING_COLUMN, PLOT_POINT_COLUMN] } />
                </ScrollShadows>)
            : ""
        return (
            <div className='Selections'>
                { table }
            </div>
        )
    }
}

export default Selection;