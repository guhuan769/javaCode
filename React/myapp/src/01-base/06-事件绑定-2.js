import React, { Component } from 'react'

export default class App extends Component {
    a = 100;
    render() {
        return (
            <div>
                <input />
                {/* 事件绑定 声明式 匿名函数 */}
                <button onClick={() => {
                    //函数体 
                    console.log("click","如果逻辑过多补推荐此写法",this.a)
                }}>add1</button>
                {/* 修正this的指向用.bind 此写法不推荐 */}
                <button onClick={this.handleClick2.bind(this)}>add2</button>
                {/* 此写法比较推荐 没法传参 */}
                <button onClick={this.handleClick3}>add3</button>
                {/* //非常推荐此写法 -传参*/}
                <button onClick={()=>this.handleClick4()}>add4</button>
            </div>
        )
    }

 
    //函数引用不会改变this指向 问题修正this指向必须使用bind指向
    handleClick2() {
        //函数体  
        console.log("handleClick2",this.a)
    }
    //evt能拿到事件预言
    handleClick3 = (evt) => {
        console.log("handleClick3",this.a,evt)
    }
    handleClick4 = () => {
        console.log("handleClick4",this.a)
    }
}



/*
    React并不会真正绑定到事件到每一个具体的元素上，而是采用的式事件代理模式
*/

//指向btn这个节点
// var obtn = document.getElementById("btn");
// obth.onClick=function(){

// }

   /*
    call,改变This 自动执行函数
    apply改变This 自动执行函数
    bind 改变this 手动加括号执行函数 不会自动执行
    */
    var obj1 = {
        name:"obj1",
        getName(){
            console.log(this.name)
        }
       }
       var obj2 = {
        name:"obj2",
        getName(){
            console.log(this.name)
        }
       }  
       //使用call强制执行指向成obj2 apply与call都是一样的 
       obj1.getName.apply(obj2);
       obj2.getName();

class A {
    constructor() {
        this.a = "1111";
        this.b = "bbbb";
    }
    c = 3333;
    aaa() { }
    bbb() { this.ccc(); }
    ccc() { console.log("cccc()"); }
}


console.log(new A())