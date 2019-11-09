import * as React from 'react';
import Table, { TableProps } from './Table';
import { TableColumn } from './Row';
const classnames = require('classnames');

class SortableTable<E> extends Table<E> {

    constructor(props: TableProps<E>) {
        super(props);
        this.state = {
            data: [],
            ascending: false,
        }
    }

    componentDidUpdate(prevProps: TableProps<E>) {
        if(this.props !== prevProps) {
            this.setState({ 
                data: this.props.data,
                sortColumn: null,
                ascending: false,
            });
        }
    }

    buildHeader() {
        return (
            <thead>
                <tr>
                    { this.props.columns.map(column => (
                        <th
                            key={ [this.props.id,column.heading].join('-') }
                            onClick={ () => this.sortData(column) }
                        >
                            <div 
                                className={ 
                                    classnames(
                                        column.sort ? 'sortable' : '',
                                        this.state.sortColumn && column.id === this.state.sortColumn.id ? 
                                            this.state.ascending ? 'sorted-up' : 'sorted-down' 
                                            : '',
                                    )
                                }
                            >
                                { column.heading }
                            </div>
                        </th>
                    )) }
                </tr>
            </thead>
        )
    }

    sortData(column: TableColumn<E>) {
        let data = this.props.data.sort(column.sort);
        if(!this.state.ascending) {
            data.reverse();
        }
        this.setState({ 
            data,
            sortColumn: column,
            ascending: !this.state.ascending,
        });
    }
}

export default SortableTable;