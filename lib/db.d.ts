import { DbData } from './types';
declare class IndexDb {
    name: string;
    dbStore: any;
    version: number;
    dbKeys: string[];
    constructor(name: string, version?: number, dbKeys?: string[]);
    /**
     * @param data
     * @description 添加单条数据，并为数据添加dataTime和type属性
     */
    setData(data: Partial<DbData>): void;
    /**
     * @returns 所有数据Array
     * @description 删除所有数据并返回被删除的数据
     */
    deleteAll(): any;
    /**
     * @returns 所有数据Array
     * @description 获取所有数据
     */
    getAllData(isAsc?: boolean): Promise<any>;
    /**
     * @returns 数据库总长度
     * @description 获取所有数据的列表长度
     */
    getAllLength(): any;
    /**
     * @param filter 根据筛选条件返回数据
     * @returns
     */
    getFilterData(filter: string): any;
    getKeys(key: string): any;
}
export { IndexDb };
