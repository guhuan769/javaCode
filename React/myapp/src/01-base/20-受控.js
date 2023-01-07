import React, { Component } from 'react'

export default class App extends Component {
    //  myusername = React.createRef()
    /*
    input这样写可以受控于value
    受控组件 让state成为唯一得数据源
    */
    state = {
        username: "gh"
    }
    render() {
        return (
            <div>
                <h1>登录页</h1>
                <input value={this.state.username} type="text" ref={this.myusername}
                    onChange={(event) => {
                        console.log("onChange", event.target.value)
                        this.setState({
                            username: event.target.value
                        })
                    }}
                />
                <button onClick={() => {
                    console.log(this.state.username)
                }}>登录</button>
                <button onClick={() => {
                     this.setState({
                        username: ""
                    })
                }}>重置</button>
            </div>
        )
    }
}
