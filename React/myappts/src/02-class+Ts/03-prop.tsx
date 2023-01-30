/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 13:48:10
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 13:54:27
 * @Description: 
 * @FilePath: \React\myappts\src\02-class+Ts\03-prop.tsx
 */
import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <Child name="aaa" />
            </div>
        )
    }
}

interface IProps {
    name: string
}

class Child extends Component<IProps, any> {
    render() {
        return <div>
            child-{this.props.name}
        </div>
    }
}