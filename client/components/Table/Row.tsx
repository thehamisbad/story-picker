import * as React from 'react';

export interface TableColumn<E> {
    heading: string;
    value: (data:E, row?: number) => string;
    id: string;
    sort?: (e1:E, e2:E) => number;
}

export interface RowProps<E> {
    data: E;
    columns: TableColumn<E>[];
    index: number;
}

class Row<E> extends React.Component<RowProps<E>> {
    render() {
        return (
            <tr>
                { this.props.columns.map((column, index) => 
                    (<td key={index + column.value(this.props.data)}>
                        { column.value(this.props.data, (this.props.index + 1)) }
                    </td>))}
            </tr>
        )
    }
}

export default Row;