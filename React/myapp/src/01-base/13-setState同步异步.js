import React, { Component } from 'react'

export default class App extends Component {
    state = { count: 1 }
    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.thishandleAdd1}>fffff</button>
                <button onClick={this.thishandleAdd2}>add2</button>
            </div>
        )
    }
    thishandleAdd1 = () => {
        //多个setState 异步更新状态 更新真实dom
        this.setState({
            count: this.state.count + 1
        },()=>{
            console.log("123"+this.state.count)
        })
        
        this.setState({
            count: this.state.count + 1
        },()=>{
            console.log(this.state.count)
        })
        this.setState({
            count: this.state.count + 1
        },()=>{
            console.log(this.state.count)
        })
    }
    thishandleAdd2 = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
        }, 1000);
    }
}
