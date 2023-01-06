import React, { Component } from 'react'

export default class App extends Component {
    a = 100;
    //这种vscode没意见 严格模式没意见
    //此处的严格模式了解即可
    myref = React.createRef()
    render() {
        return (
            <div>
                {/*  */}
                {/* <input ref="mytext" /> */}
                <input ref={this.myref}/>
                {/* <input ref="mytext2" /> */}
                {/* 事件绑定 声明式 匿名函数 */}
                <button onClick={() => {
                    //函数体 this.refs.mytext.value 将被弃用
                    // console.log("click1",this.refs.mytext.value)
                    console.log("click",this.myref.current.value)
                }}>add1</button>
                <button onClick={this.handl.bind(this)}>add1</button>
            </div>
        )
    }
    handl(){

        console.log("click2",this.myref.current.value);
    }
}
