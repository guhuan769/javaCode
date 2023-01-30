import React, { Component } from 'react'

export default class App extends Component {
    
    render() {
        return (
            <div>
                <input />
                {/* 事件绑定 声明式 匿名函数 1 */}
                <button onClick={() => {
                    //函数体 
                    console.log("click")
                }}>add1</button>
                <button onClick={this.handleClick2}>add2</button>
                <button onClick={this.handleClick3}>add3</button>
                <button onClick={()=>{
                    this.handleClick4();//推荐此写法
                }}>add4</button>
            </div>
        )
    }
    handleClick2() {
        //函数体 
        console.log("handleClick2")
    }

    handleClick3 = () => {
        console.log("handleClick3")
    }
    handleClick4 = () => {
        console.log("handleClick4")
    }
}

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