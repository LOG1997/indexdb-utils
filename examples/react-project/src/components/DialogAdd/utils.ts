import {Data} from "./index"
export const judgeData = (allData:Data[],data: Data):boolean => {
    if(!data||(!data.name)){
        return false
    }
    return allData.some((item:Data) => item.name === data.name)
}