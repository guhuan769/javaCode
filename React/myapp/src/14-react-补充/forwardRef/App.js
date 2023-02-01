/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 14:24:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 14:41:00
 * @Description: 
 * @FilePath: \React\myapp\src\14-react-补充\forwardRef\App.js
 */
import React, { Component } from 'react'

/*
传统JS写法
*/
export default class App extends Component {
    mytext = null
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        console.log("value", this.mytext);
                        //获取焦点
                        this.mytext.current.focus()
                        this.mytext.current.value = ""
                    }}
                >获取焦点</button>
                <Child callback={(value) => {
                    // console.log("value",value);
                    this.mytext = value
                }}></Child>
            </div>
        )
    }
}


class Child extends Component {
    mytext = React.createRef()

    componentDidMount() {
        // console.log(this.mytext);
        this.props.callback(this.mytext)
    }
    render() {
        return (
            <div style={{ background: "yellow" }}>
                <input defaultValue="11111" ref={this.mytext} />
            </div>
        )
    }
}
