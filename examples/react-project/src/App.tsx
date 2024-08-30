import { useState } from "react";
import { Button } from "@/components/ui/button"
import { IndexDb } from "indexDB-utils";
function App() {
    const db = new IndexDb('test')
    db.setData({
        name: 'test',
        age: 18,
        type:'op',
    })
    console.log(db)

    const kkss=db.getKeys()
    console.log("code line-13 \n\r😇 kkss:\n\r",kkss);
    return (
        <div className="w-full text-center main-container">
           <Button>Button</Button>
        </div>
    );
}

export default App;
