/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 14:03:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 14:21:03
 * @Description: 
 * @FilePath: \React\myappts\src\02-class+Ts\04-抽屉.tsx
 */
import React, { Component } from 'react'
import { isPropertySignature } from 'typescript'

//接口约束也可以不写 写了最好
export default class App extends Component {
    state = {
        isShow: true,

    }
    render() {
        return (
            <div>App
                <Navbar title='首页'
                    cb={() => {
                        console.log("本大爷倒也")
                        this.setState({
                            isShow: !this.state.isShow
                        })
                    }}
                ></Navbar>
                {this.state.isShow && <Sidebar></Sidebar>}
            </div>
        )
    }
}

interface Iprops {
    title: string,
    cb: () => void
}

class Navbar extends Component<Iprops, any> {
    render(): React.ReactNode {
        return (
            <div>
                Navbar-{this.props.title}
                <button
                    onClick={() => {
                        this.props.cb()
                    }}>
                    click
                </button>
            </div>

        )
    }
}

class Sidebar extends Component {
    render(): React.ReactNode {
        return (
            <div>Sidebar</div>
        )
    }
}
