import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button"
import { IndexDb } from "indexDB-utils";
function App() {
    const db = new IndexDb('test')
    db.setData({
        name: 'test',
        age: 18,
        type: 'op',
    })
    console.log(db)
    const [allData, setAllData] = useState([])
    const getAllData = async () => {
        setAllData(await db.getAllData())
        console.log('all data',allData)
    }
    useEffect(() => {
        getAllData()
    }, [])
    return (
        <div className="w-full text-center main-container">
            <Button onClick={getAllData}>Button</Button>
            <ul className="flex flex-wrap gap-2 list-none">
                {allData.map((item: any,index:number) => (
                    <li key={item.id}>{item.name}--{index}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
