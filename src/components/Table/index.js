import React, { useMemo } from 'react'
import { DataTable } from 'react-native-paper';
import { capitalize } from '../../utils';

const Table = ({ rows, cols, sortByColumn, isUpdatingRows}) => {
    const renderHeader = useMemo(() => {
      return cols.map(col => {
        return (
          <DataTable.Title onPress={() => sortByColumn(col)} centered>{capitalize(col)}</DataTable.Title>
      )});
    }, [cols]);
    const renderRows = useMemo(() => {
      return rows.map(row => {
        const { age, email, username } = row;
        return (!isUpdatingRows &&
          <DataTable.Row>
            <DataTable.Cell >{username}</DataTable.Cell>
            <DataTable.Cell centered>{email}</DataTable.Cell>
            <DataTable.Cell centered numeric>{age}</DataTable.Cell>
          </DataTable.Row>
      )})
    }, [rows, isUpdatingRows])
    return (
      <DataTable>
          <DataTable.Header>
            {renderHeader}
          </DataTable.Header>
          {renderRows}
      </DataTable>
    )
}

export default Table;
