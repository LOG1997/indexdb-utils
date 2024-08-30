import Dexie, { type EntityTable } from 'dexie'
import dayjs from 'dayjs'
import { DbData } from './types'

class IndexDb {
    name: string
    dbStore: any
    version: number
    dbKeys:string[]
    constructor(name: string, version = 1,dbKeys:string[]=[]) {
        this.name = name
        this.version = version
        this.dbKeys = dbKeys
        this.dbStore = new Dexie(name) as Dexie & {
            dbData: EntityTable<
                DbData,
                'id' // primary key "id" (for the typings only)
            >
        }
        // 获取存在的key
        this.dbStore.version(this.version).stores({
            dbData: '++id,dateTime,type', // Primary key & Indexed props
        })
    }
    /**
     * @param data
     * @description 添加单条数据，并为数据添加dataTime和type属性
     */
    setData(data: Partial<DbData>) {
        !data.dateTime ? data.dateTime = dayjs().format('YYYY-MM-DD HH:mm:ss:SSS') : null
        !data.type ? data.type = 'info' : null
        this.dbStore.dbData.add(data)
    }
    /**
     * @returns 所有数据Array
     * @description 删除所有数据并返回被删除的数据
     */
    deleteAll() {
        return this.dbStore.dbData.clear()
    }
    /**
     * @returns 所有数据Array
     * @description 获取所有数据
     */
    getAll() {
        return this.dbStore.dbData.toArray()
    }
    /**
     * @returns 数据库总长度
     * @description 获取所有数据的列表长度
     */
    getAllLength() {
        return this.dbStore.dbData.count()
    }
    /**
     * @param filter 根据筛选条件返回数据
     * @returns 
     */
    getFilterData(filter: string) {
        return this.dbStore.dbData.filter((item: any) => {
            return item.content.includes(filter)
        }).toArray()
    }
    getKeys() {
        // keys 方法获取所有主键
        return this.dbStore.dbData.orderBy('dateTime').keys();
    }
}

export { IndexDb }