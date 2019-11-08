import * as React from 'react';
import Row, { TableColumn } from './Row';

import './table.scss';

export interface TableProps<E> {
    id: string;
    data: E[];
    columns: TableColumn<E>[];
}

class Table<E> extends React.Component<TableProps<E>> {

    buildHeader() {
        return (
            <thead>
            <tr>
                { this.props.columns.map(column => (<th key={ [this.props.id,column.heading].join('-') }>{ column.heading }</th>)) }
            </tr>
            </thead>
        )
    }

    render() {
        return (
            <div className='Table-wrapper'>
                <table className='Table'>
                    { this.buildHeader() }
                    <tbody>
                        { this.props.data.map((element, index) => (<Row key={[this.props.id, index].join('-')} data={ element } columns={ this.props.columns }/>))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;