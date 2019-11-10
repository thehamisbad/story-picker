import * as React from 'react';
import Row, { TableColumn } from './Row';

import './table.scss';

export interface TableProps<E> {
    id: string;
    data: E[];
    columns: TableColumn<E>[];
}

export interface TableState<E> {
    data: E[];
    sortColumn?: TableColumn<E> | null;
    ascending?: boolean;
}

class Table<E> extends React.Component<TableProps<E>, TableState<E>> {

    constructor(props: TableProps<E>) {
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        this.setState({ data: this.props.data });
    }

    componentDidUpdate(prevProps: TableProps<E>) {
        if(this.props !== prevProps) {
            this.setState({ data: this.props.data });
        }
    }

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
            <div className='Table-wrapper'  id={ this.props.id }>
                <table className='Table'>
                    { this.buildHeader() }
                    <tbody>
                        { this.state.data.map((element, index) => (
                            <Row key={[this.props.id, index].join('-')} index={ index } data={ element } columns={ this.props.columns }/>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;