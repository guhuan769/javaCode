/*
 * @Author: Elon Snyder
 * @Date: 2023-01-28 20:15:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-28 20:25:48
 * @Description: 
 * @FilePath: \React\myappts\src\01-ts基础\03-对象.ts
 */
//接口
interface Iojb {
    name: string,
    age: number,
    location: string,
    //可选属性
    [propName: string]: any
}


var obj1: Iojb = {
    name: "elon",
    age: 111,
    location: "",
    location1: "",
    location2: "",
    location3: "",
}

console.log(1)
console.log(obj1.location3)
export default {}