import React, { Component } from 'react'
/*
 * componentWillMount 白学了因为要放弃了  
 */

export default class App extends Component {
    state = {
        myname: 'Elon Snyder'
    }
    componentWillMount() {
        //组件将要挂载到真是的dom中 1
        console.log("第一次 will mount",
            this.state.myname, document.getElementById("myname")
        )

        //第一次上树前的 最后一次修改状态
        this.setState({
            myname: "ELON SNYDER"
        })
        //初始化数据作用
    }

    componentDidMount() {
        //挂载完了 3
        console.log("第一次 did mount",
            document.getElementById("myname"))
        //数据请求ajax
        //订阅函数调用
        //setInterval
        //基于创建完的dom进行 初始化。 BetterScroll 
    }

    render() {
        //正在挂载中 2
        console.log("render")
        return (
            <div>
                <span id="myname">
                    {this.state.myname}
                </span>
            </div>
        )
    }
}
