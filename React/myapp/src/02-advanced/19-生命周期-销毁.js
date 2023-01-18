import React, { Component } from 'react'

export default class App extends Component {
    state = {
        isCreated: true
    }
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.setState({
                            isCreated: !this.state.isCreated
                        })
                    }}
                >click</button>
                {
                    this.state.isCreated ? <Child /> : ""
                }
            </div>
        )
    }
}

class Child extends Component {

    render() {
        return <div>
            child
        </div>
    }
    //生命周期

    componentDidMount() {
        //窗口大小的监听 不会被回收不会被处理
        window.onresize = () => {
            console.log("窗口大小的监听");
        }
        this.timer = setInterval(() => {
            console.log("1111")
        }, 1000)
    }

    componentWillUnmount() {
        console.log("该生命周期 在组件倍移除后执行")

        window.onresize = null;

        clearInterval(this.timer)
        //this.timer= null;
    }
}
