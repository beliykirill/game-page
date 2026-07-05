import React, { FC, useState } from 'react';
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import styled from 'styled-components';
import { color } from 'shared/lib/themes';
import { MainText, SecondaryText } from 'shared/ui/typography';

interface IBaseTable {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: any[];
}

export const BaseTable: FC<IBaseTable> = ({ data, columns }) => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <TableContainer>
      <table>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                  style={{
                    width: header.getSize(),
                    cursor: header.column.getCanSort() ? 'pointer' : 'default',
                    userSelect: 'none',
                    ...header.column.columnDef.meta?.style,
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </TableHead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} style={cell.column.columnDef.meta?.style}>
                  <TableCell>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                </td>
              ))}
            </TableRow>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;

  thead {
    background: ${color('surfaceMain')};
  }
`;

const TableHead = styled.thead`
  th {
    white-space: nowrap;
  }

  th:not(:last-child) {
    padding-right: 24px;
  }

  ${MainText} {
    color: ${color('textLabel')};
  }
`;

const TableRow = styled.tr`
  transition: 0.2s ease-in-out;

  td {
    padding: 8px 0;
    border-bottom: 1px solid ${color('surfaceBorder')};
    transition: background 0.15s ease-in-out;
  }

  &:last-child td {
    border-bottom: none;
  }

  td:not(:last-child) {
    padding-right: 24px;
  }

  @media (hover: hover) {
    &:hover td {
      background: rgba(247, 247, 247, 0.64);
    }
  }

  ${MainText}, ${SecondaryText} {
    color: ${color('textPrimary')};
  }
`;

const TableCell = styled.div`
  display: flex;
`;
