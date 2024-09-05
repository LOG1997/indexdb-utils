import type { ColumnDef } from '@tanstack/react-table'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {SortPopover} from '@/components/SortPopover'
import ReactJson from 'react-json-view'
import { ChevronUp, ChevronDown, ArrowUp, ArrowDown, TrendingUp } from 'lucide-react'

export const handleCol = (sortObj: any, showPop: Function): ColumnDef<any>[] => {
    return [
        {
            id: 'select',
            header: ({ table }) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected()
                        || (table.getIsSomePageRowsSelected() && 'indeterminate')
                    }
                    onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={value => row.toggleSelected(!!value)}
                    aria-label="Select row"
                />
            ),
        },
        {
            accessorKey: 'id',
            header: 'id',
        },
        {
            accessorKey: 'dateTime',
            header: () => {
                return (
                    <SortPopover
                    accessorKey={'dateTime'}
                    value={sortObj.dateTime}
                    setSort={showPop}
                    ></SortPopover>
                )
            }
        },
        {
            accessorKey: 'type',
            header: 'type',
        },
        {
            accessorKey: 'content',
            header: 'content',
            cell: ({ row }) => {
                const content = row.original
                // 删除属性
                delete content.id
                delete content.dataTime
                delete content.type
                return <ReactJson style={{ textAlign: 'left' }} name={null} src={content} />
            },
        },
        {
            header: 'Action',
            id: 'actions',
            cell: ({ row }) => {
                const blog_id: string = row.original._id;
                return (
                    <div className="flex gap-3">
                        <Button className="p-0 text-red-500" variant="link" size="sm">Delete</Button>
                    </div>
                )
            },
        },
    ]
}
