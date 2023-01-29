/*
 * @Author: Elon Snyder
 * @Date: 2023-01-28 20:27:01
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 09:14:55
 * @Description: 
 * @FilePath: \React\myappts\src\01-ts基础\04-函数.ts
 */

function test1(a: string, b: string, c?: number): string {
    return a.substring(0, 1) + b.substring(0, 1)
}

var mayname: string = test1("aaa", "bbb", 1)
console.log(mayname)

//---------------------------
interface IFunc {
    (a: string, b: string, c?: number): string
}

var myfunc2: IFunc = function test1(string, b: string, c?: number): string {

    return "123"
}
console.log(myfunc2("cc", "vv", 222))

interface Iobj {
    name: string,
    age: number,
    getName: (name: string) => string//函数
}

var obj: Iobj = {
    name: "elon",
    age: 100,
    getName(name) {
        return ""
    },
}

var aa = obj.getName("Elon Snyder")

export default {}

