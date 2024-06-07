'use client';

import React, { useState } from 'react'
import {
  ColumnDef,
  flexRender,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel
} from "@tanstack/react-table"

import Classes from './DataTable.module.scss'
import Button from '../button/Button';
import { Col, Row, Table } from 'react-bootstrap';

type Props = {
  data?: any,
  columns: any
}

const DataTable = ({columns, data}: Props) => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      rowSelection,
    },
  })

  return (
    <div className={Classes.table}>
      <div className={Classes['table-content']}>
        <table>
          <thead>
            {table.getHeaderGroups().map((item) => (
              <tr key={item.id}>
                {
                  item.headers.map((headItem) => (
                    <th key={headItem.id}>
                      {
                        headItem.isPlaceholder ? null : flexRender(
                          headItem.column.columnDef.header,
                          headItem.getContext()
                        )
                      }
                    </th>
                  ))
                }
              </tr>
            ))}
          </thead>
          <tbody >
          {(data && data.length > 0 ) ? 
            table.getRowModel().rows?.length && (
            table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className='border-b-[1px]'
              >
                {row.getVisibleCells().map((cell) => {
                  return<td key={cell.id} className='py-4'>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length}>
                0 Slider.
              </td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
      <Row style={{justifyContent: 'space-between', marginTop: '20px'}}>
        <Col xs={3} md={1}>
          <Button
            content='Previous'
            variante="primary"
            // size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />
        </Col>
        <Col xs={3} md={1}>
          <Button
            content='Next'
            variante="primary"
            // size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />
        </Col>
      </Row>
    </div>
  )
}

export default DataTable