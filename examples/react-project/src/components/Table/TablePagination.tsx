import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import type { Table } from '@tanstack/react-table'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface DataTablePaginationProps<TData> {
  table: Table<TData>
  total: number
  pageParams: {
    pageIndex: number
    pageSize: number
  }
  changePageParams: (pageParams: { pageIndex: number, pageSize: number }) => void
}

export function DataTablePagination<TData>({
  table,
  total,
  pageParams,
  changePageParams,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        {table.getFilteredSelectedRowModel().rows.length}
        {' '}
        of
        {' '}
        {table.getFilteredRowModel().rows.length}
        {' '}
        row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              changePageParams({ pageSize: Number(value), pageIndex: 1 })
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={pageParams.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {[10, 20, 30, 40, 50].map(pageSize => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page
          {' '}
          {pageParams.pageIndex}
          {' '}
          of
          {' '}
          {Math.ceil(total / table.getState().pagination.pageSize)}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="w-8 h-8 p-0"
            onClick={() => changePageParams({ pageIndex: Number(pageParams.pageIndex) - 1, pageSize: pageParams.pageSize })}
            disabled={pageParams.pageIndex <= 1}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="w-8 h-8 p-0"
            onClick={() => changePageParams({ pageIndex: Number(pageParams.pageIndex) + 1, pageSize: pageParams.pageSize })}
            disabled={pageParams.pageIndex >= Math.ceil(total / table.getState().pagination.pageSize)}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
