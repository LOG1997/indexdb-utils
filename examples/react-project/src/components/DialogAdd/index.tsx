import { useState,useRef,useEffect} from 'react'
import type {MutableRefObject} from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Save, Trash, PencilRuler } from 'lucide-react'
import { useToast } from "@/hooks/use-toast"

import { isRepetitive } from './utils'
export type Data = {
    id?: number
    name: string
    value: string
    status: boolean
}
export default function DialogAdd(props: { submit: Function,visible:boolean }) {
    const [dataObj, setDataObj] = useState<Data[]>([])
    const { toast } = useToast()
    const closeDialogRef= useRef<any>()
    const addData = (itemData: Data, mod: 'add' | 'edit' | 'save') => {
        if (mod === 'add') {
            itemData.id = new Date().getTime()
            setDataObj([...dataObj, itemData])
            return
        }
        if (mod === 'edit') {
            setDataObj(dataObj.map(item => {
                if (item.id === itemData.id) {
                    const newItem = { ...itemData, status: false }
                    return newItem
                }
                return item
            }))
            return
        }
        if (mod === 'save') {
            if (isRepetitive(dataObj, itemData)) {
                toast({
                    title: "Scheduled: Catch up",
                    description: "Friday, February 10, 2023 at 5:57 PM",
                })
                return
            }
            setDataObj(dataObj.map(item => {
                if (item.id === itemData.id) {
                    const newItem = { ...itemData, status: true }
                    return newItem
                }
                return item
            }))
            return
        }
    }
    const delData = (itemData: Data) => {
        setDataObj(dataObj.filter(item => item.id !== itemData.id))
    }
    const submitData = () => {
        const result = dataObj.map(item => {
            console.log("code line-68 \n\r😐 item:\n\r",item);
            return new Object({
                [item.name]: item.value
            })
        })
        props.submit(...result)
        closeDialogRef.current.click()
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
                        dataObj.map((item: Data, index: number) => {
                            return (
                                <div className="grid items-center grid-cols-4 gap-4" key={item.id}>
                                    {
                                        item.status ? <Label htmlFor="name" className="text-right">
                                            {item.name}
                                        </Label> :
                                            <Input
                                                id="name"
                                                defaultValue=""
                                                onChange={(e) => item.name = e.target.value}
                                                className="col-span-1"
                                                placeholder='key'
                                            />
                                    }
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
                                                ? <Button variant="outline" size="icon" className='w-4 h-4' onClick={() => addData(item, 'edit')}><PencilRuler></PencilRuler></Button>
                                                :
                                                <Button variant="outline" size="icon" className='w-4 h-4' onClick={() => addData(item, 'save')}><Save></Save></Button>
                                        }
                                        <Button variant="outline" size="icon" className='w-4 h-4 text-red-500' onClick={() => { delData(item) }}><Trash></Trash></Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='w-full h-8 py-1 cursor-pointer bg-gray-400/10 hover:bg-gray-300/70' onClick={() => addData({ name: '', value: '', status: false }, 'add')}>
                    <Plus className='m-auto'></Plus>
                </div>
                <DialogClose asChild>
                    <p ref={closeDialogRef}></p>
                </DialogClose>
                <DialogFooter className='flex flex-row-reverse w-full'>
                    <Button className='max-w-16' type="submit" onClick={submitData}>Submit</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
