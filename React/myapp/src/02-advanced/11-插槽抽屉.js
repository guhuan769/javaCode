import React, { Component } from 'react'
/*
    1. 为了复用。
    2. 一定成都减少父子通信。
*/


class Navbar extends Component {
    render() {
        return <div style={{ background: "red" }}>
            {this.props.children}
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

class Swiper extends Component {
    render() {
        return <div>
            <div>1111</div>
            <div>2222</div>
            <div>3333</div>
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
                <Navbar>
                    <button
                        onClick={() => {
                            this.setState({
                                isShow: !this.state.isShow
                            })
                        }}
                    >child</button>
                </Navbar>
                {this.state.isShow && <Sidebar />}
            </div>
        )
    }
}
