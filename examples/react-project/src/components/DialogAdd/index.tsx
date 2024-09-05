import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Save, Trash, PencilRuler } from 'lucide-react'
import { judgeData } from './utils'
export type Data = {
    id?: number
    name: string
    value: string
    status: boolean
}
export default function DialogAdd() {
    const [dataObj, setDataObj] = useState<Data[]>([])
    const addData = (itemData: Data) => {
        if (!itemData.status) {
            const newId = new Date().getTime()
            setDataObj([...dataObj, { ...itemData, id: newId }])
            return
        }
        const id = new Date().getTime()
        if (judgeData(dataObj, itemData)) {
        }
        else {
            setDataObj([...dataObj, itemData])
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm">Add</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Data</DialogTitle>
                    <DialogDescription>
                        Input the data you wat to add to database.Click submit when you'r done
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {
                        dataObj.map((item: { name: string, value: string, status: boolean }, index: number) => {
                            return (
                                <div className="grid items-center grid-cols-4 gap-4">
                                    {item.status ? <Label htmlFor="name" className="text-right">
                                        {item.name}
                                    </Label> :
                                        <Input
                                            id="name"
                                            defaultValue=""
                                            onChange={(e) => item.name = e.target.value}
                                            className="col-span-1"
                                            placeholder='key'
                                        />}
                                    <Input
                                        id="value"
                                        defaultValue=""
                                        onChange={(e) => item.value = e.target.value}
                                        className="col-span-1"
                                        placeholder='value'
                                    />
                                    <div className='flex h-3 gap-1'>
                                        {
                                            item.status
                                                ? <Button variant="outline" size="icon" className='w-4 h-4'><PencilRuler></PencilRuler></Button>
                                                :
                                                <Button variant="outline" size="icon" className='w-4 h-4'><Save></Save></Button>
                                        }
                                        <Button variant="outline" size="icon" className='w-4 h-4 text-red-500'><Trash></Trash></Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-full h-8 py-1 cursor-pointer hover:bg-gray-300/70' onClick={() => addData({ name: '', value: '', status: false })}>
                    <Plus className='m-auto'></Plus>
                </div>
                <DialogFooter>
                    <Button type="submit">Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
