/*
 * @Author: Elon Snyder
 * @Date: 2023-01-29 13:29:58
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 13:47:52
 * @Description: 
 * @FilePath: \React\myappts\src\02-class+Ts\02-todolist.tsx
 */
import React, { Component } from 'react'

interface Istate {
    text: string,
    list: string[]
}

export default class App extends Component<any, Istate> {
    state = {
        text: "",
        list: []
    }
    //指定成HTMLInputElement 泛型
    myref = React.createRef<HTMLInputElement>()
    render() {
        return (
            <div>
                {/* <input type="text" value={this.state.text}
                    onChange={(evt) => {
                        this.setState({
                            text: evt.target.value
                        })
                    }}
                /> */}

                <input type="text" ref={this.myref} />
                <button onClick={() => {
                    // console.log(this.state.text)
                    console.log((this.myref.current as
                        HTMLInputElement).value
                    )
                    this.setState({
                        list: [...this.state.list, (this.myref.current as
                            HTMLInputElement).value]
                    })
                }} >
                    click
                </button>
                {
                    this.state.list.map(item =>
                        <li key={item}>{item}</li>
                    )
                }
            </div>
        )
    }
}
