# 使用方法

## 导入

在要使用Table组件的页面中引入Table组件

```tsx
import { DataTable } from '@/components/Table'
```

## 编写columns文件定义列

例子如下

```tsx
import type { ColumnDef } from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'
import type { IBlog } from '@/types/api'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export const columns: ColumnDef<IBlog>[] = [
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
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'email',
    header: () => <div className="text-left">Email</div>,
    cell: ({ row }) => {
      const email = row.getValue('email')
      return <a href={`mailto:${email}`} className="font-medium text-left underline hover:text-blue-500">{email as string}</a>
    },
  },
  {
    accessorKey: 'amount',
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = Number.parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount)
      return <div className="font-medium text-right">{formatted}</div>
    },
  },
  {
    header: 'Action',
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original
      const navigate=useNavigate()
      return (
        <div className="flex gap-3">
          <Button className="p-0" variant="link" size="sm" onClick={() => navigate(`/blog-admin/blog`)}>Detail</Button>
          <Button className="p-0" variant="link" size="sm">Detail</Button>
        </div>
      )
    },
  },
]
```

并在DataTable组件中使用：

```tsx
import { columns } from './columns'
{...}
 <DataTable columns={columns} data={data?.data ? data.data : []} isPagination={true}/>
```
