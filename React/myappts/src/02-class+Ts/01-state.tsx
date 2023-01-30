
/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 13:15:36
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 13:28:42
 * @Description: pp
 * @FilePath: \React\myappts\src\02-class+Ts\01-state.tsx
 */

import React, { Component } from 'react';
interface IState {
    name: string
}

//泛型<约定属性,约定状态>
class App extends Component<any, IState> {

    state = {
        name: "elon"
    }

    render() {
        return (
            <div>
                app-{
                    this.state.name.substring(0, 1).toUpperCase()
                    +
                    this.state.name.substring(1)
                }
                <button onClick={() => {
                    this.setState({
                        name: "xiaoming"
                    })
                }}>
                    click
                </button>
            </div>
        );
    }
}

export default App;