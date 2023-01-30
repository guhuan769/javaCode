/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 11:46:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 13:14:03
 * @Description: 
 * @FilePath: \React\myappts\src\01-ts基础\06-类+接口.ts
 */


//接口规范
interface Ifunc {
    getName: () => string
}

class A implements Ifunc {
    a1() { }
    a2() { }
    a3() { }
    getName() {
        return "aaa"
    }
}

class B implements Ifunc {
    b1() { }
    b2() { }
    b3() { }
    getName() {
        return "bbb"
    }
}
class C implements Ifunc {
    b1() { }
    b2() { }
    b3() { }
    getName() {
        return "bbb"
    }
}

//any 任何类型
function init(obj: Ifunc) {
    obj.getName()
}

var objA = new A()
var objB = new B()
var objC = new C()

init(objA)
init(objB)
init(objC)

export default {}