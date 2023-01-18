import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myname: "enlon snyder"
    }
    
    //该生命周期在以后的修改也会重新执行
    //该生命周期也有下一次属性以及下一次状态
    //问题:getDerivedStateFromProps 中是无法获取this.state状态因为
    //该方法时静态的 只能通过形参
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDriveStateFromProps", nextProps
            , nextState)
        return {
            myname:
                nextState.myname.substring(0, 1).toUpperCase()
                +
                nextState.myname.substring(1)
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: "xiaoming"
                    })
                }}>click</button>
                app - {this.state.myname}
            </div>
        )
    }

}
