import { Button } from '@/components/ui/button'
import { ChevronUp, ChevronDown, ArrowUp, ArrowDown, TrendingUp } from 'lucide-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
export const SortPopover = (props: { accessorKey: string, value: boolean | undefined, setSort: Function }) => {
    const { value, accessorKey, setSort } = props
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button size={'sm'} variant={'ghost'}>
                    <span>DateTime</span>
                    {value == undefined ? <div className='flex flex-col items-center justify-center p-0 m-0'>
                        <ChevronUp className='w-2 h-2'></ChevronUp>
                        <ChevronDown className='w-2 h-2'></ChevronDown>
                    </div> : null
                    }
                    {value == false ? <ArrowUp className='w-3 h-3'></ArrowUp> : null}
                    {value == true ? <ArrowDown className='w-3 h-3'></ArrowDown> : null}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='px-1 py-2 w-30'>
                <ul className='flex flex-col w-full gap-1 text-xs'>
                    <li className='flex items-center w-full gap-2 px-2 py-1 rounded-sm cursor-pointer hover:bg-gray-300/50' onClick={() => setSort(accessorKey, false)}>
                        <ArrowUp className='w-3 h-3'></ArrowUp>
                        <span>Asc</span>
                    </li>
                    <li className='flex items-center w-full gap-2 px-2 py-1 rounded-sm cursor-pointer hover:bg-gray-300/50' onClick={() => setSort(accessorKey, true)}>
                        <ArrowDown className='w-3 h-3'></ArrowDown>
                        <span>Desc</span>
                    </li>
                </ul>
            </PopoverContent>
        </Popover>
    )
}
