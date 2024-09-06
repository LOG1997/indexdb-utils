import {Data} from "./index"
export const  isRepetitive= (allData:Data[],data: Data):boolean => {
    const filterDataList=allData.filter((item:Data) => item.id !== data.id)
    const result=filterDataList.some((item:Data) => item.name === data.name)
    console.log("code line-7 \n\r😔 result:\n\r",result);
    return result
}