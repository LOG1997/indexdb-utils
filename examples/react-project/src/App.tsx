import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { DataTable } from '@/components/Table'
import { handleCol } from "./columns"
import { IndexDb } from "indexDB-utils";
import DialogAdd from "@/components/DialogAdd";
function App() {
    const db = new IndexDb('test')
    const [total, setTotal] = useState(0)
    const [dataList, setDataList] = useState([])
    const [updateTime, setUpdateTime] = useState(0)
    const [sortObj, setSortObj] = useState<any>({})
    const addData = async () => {
        await db.setData({
            name: 'test',
            age: 18,
            type: 'op',
        })
        setUpdateTime(new Date().getTime())
    }
    const getAllData = async (isAsc:boolean=true) => {
        setDataList(await db.getAllData(isAsc))
    }
    const getDataLength = async () => {
        setTotal(await db.getAllLength())
    }
    const showPop = (key: string,value:boolean) => {
        setSortObj({
            ...sortObj,
            [key]: value
        })
        getAllData(value)
    }
    const [pageParams, setPageParams] = useState({
        pageIndex: 1,
        pageSize: 10,
    })
    useEffect(() => {
        getAllData()
        getDataLength()
    }, [updateTime])
    return (
        <div className="w-full px-12 py-6 text-center main-container">
            <div className="flex justify-between">
                {/* <div className="operation-left">
                    <Button size="sm" onClick={addData}>Add</Button>
                </div> */}
                <DialogAdd></DialogAdd>
                <div className="operation-right"></div>
            </div>
            <DataTable
                columns={handleCol(sortObj, showPop)}
                data={dataList}
                total={total}
                pageParams={{ pageIndex: pageParams.pageIndex, pageSize: pageParams.pageSize }}
                changePageParams={setPageParams}
            />
        </div>
    );
}

export default App;
