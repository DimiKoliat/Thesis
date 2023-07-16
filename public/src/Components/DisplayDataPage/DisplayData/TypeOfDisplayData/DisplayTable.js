import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'countryName', headerName: 'Country Name', flex: 1},
    { field: 'starterYear', headerName: 'Starter Year', flex: 1, type: 'number'},
    { field: 'currentAge', headerName: 'Current Age', flex: 1, type: 'number' },
    { field: 'absoluteChange', headerName: 'Absolute Change', flex: 1, type: 'number' },
    { field: 'relativeChange', headerName: 'Relative Change', flex: 1, type: 'number' }
];

export default function DisplayTable(props) {
    return (
        <div style={{height: 580, width: '95%',margin: 'auto'}}>
            <DataGrid
                rows={props.data}
                columns={columns}
                pageSize={9}
                rowsPerPageOptions={[25,50,100]}
            />
        </div>
    );
}
