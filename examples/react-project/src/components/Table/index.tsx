import { useEffect, useState } from 'react'
import type {
    ColumnDef,
} from '@tanstack/react-table'
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from '@tanstack/react-table'
import { DataTablePagination } from './TablePagination'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    isPagination?: boolean
    total: number
    pageParams: { pageIndex: number; pageSize: number }
    changePageParams: (params: { pageIndex: number; pageSize: number }) => void
}

export function DataTable<TData, TValue>({
    columns,
    data,
    isPagination = true,
    total = 0,
    pageParams,
    changePageParams
}: DataTableProps<TData, TValue>) {
    const [rowSelection, setRowSelection] = useState({})
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onRowSelectionChange: setRowSelection,
        state: {
            rowSelection,
        },
    })
    useEffect(() => {
        table.setPageIndex(pageParams.pageIndex)
        table.setPageSize(pageParams.pageSize)
    }, [pageParams])
    return (
        <div className="w-full">
            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext(),
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length
                            ? (
                                table.getRowModel().rows.map(row => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && 'selected'}
                                    >
                                        {row.getVisibleCells().map(cell => (
                                            <TableCell key={cell.id} className='text-left'>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            )
                            : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-left">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                    </TableBody>
                </Table>
            </div>
            <div>
                {isPagination
                    ? <DataTablePagination table={table} total={total} pageParams={pageParams} changePageParams={changePageParams} />
                    : null}
            </div>
        </div>
    )
}
