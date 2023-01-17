import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return <div style={{ background: "red" }}>
            <button onClick={() => {
                // this.setState({
                //     isShow:!this.state.isShow
                // })
                console.log("子通知父,让父的isShow取反",
                    this.props.event)
                this.props.event()//调用父组件传来的回调函数
            }}>click</button>
            <span>navbar</span>
        </div>
    }
}

class Sidebar extends Component {
    render() {
        return <div style={{ background: "yellow", width: "200px" }}>
            <ul>
                <li>111s</li>
                <li>111s</li>
                <li>111s</li>
                <li>111s</li>
                <li>111s</li>
                <li>111s</li>
                <li>111s</li>
            </ul>
        </div>
    }
}

export default class App extends Component {
    state = {
        isShow: false
    }
    render() {
        return (
            <div>
                {/* <Navbar></Navbar>
                <Sidebar></Sidebar> */}
                <Navbar event={this.handeleEvent} />
                {this.state.isShow && <Sidebar />}
            </div>
        )
    }

    handeleEvent = () => {
        this.setState({
            isShow:!this.state.isShow
        })
        console.log("父组件自定义的event事件");
    }
}
