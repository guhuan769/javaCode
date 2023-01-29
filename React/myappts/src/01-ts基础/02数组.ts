/*
 * @Author: Elon Snyder
 * @Date: 2023-01-28 19:51:19
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-28 20:10:44
 * @Description: 
 * @FilePath: \React\myappts\src\01-ts基础\02数组.ts
 */

var list: string[] = ["1", "2", "3"]

for (var i in list) {
    list[i].substring(0, 1)
}

var listnumber: (number | string)[] = [1, 2, 3, 4, 5, ""]
var listnumber: (number | string)[] = [1, 2, 3, 4, 5, ""]
listnumber.push(1)

//--------------------

var mylist1: Array<string|number> = ["a", "b", "3"]
mylist1.push("dw")
mylist1.push(1)

export default {}
