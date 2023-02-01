/*
 * @Author: Elon Snyder
 * @Date: 2023-01-30 14:37:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-30 15:27:26
 * @Description: 
 * @FilePath: \React\myapp\src\13-redux-saga\01-生成器.js
 */

function* test() {
    console.log("1111");
    var input1 = yield "111输出";
    console.log("2222", input1);
    yield "222输出";
    console.log("333");
    yield "333输出";
}

var elontest = test()
var res1 = elontest.next("aaa")
console.log(res1)
var res2 = elontest.next("bbb")
console.log(res2)
var res3 = elontest.next()
console.log(res3)
var res4 = elontest.next()
console.log(res4)

async function A() {
    var res1 = await fetch()
    var res2 = await fetch()
    var res3 = await fetch()
    console.log(res3);
}


function* test1() {
    setTimeout(() => {
        console.log("1111");
        elontest1.next()
    }, 1000);
    yield
    setTimeout(() => {
        console.log("2222");
        elontest1.next()
    }, 1000);
    yield
    setTimeout(() => {
        console.log("33333");
        elontest1.next()
    }, 1000);
    yield
}

var elontest1 = test1()
elontest1.next()




