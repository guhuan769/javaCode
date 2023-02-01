/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 14:24:52
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 14:49:58
 * @Description: 
 * @FilePath: \React\myapp\src\14-react-补充\forwardRef\App_forwardRef.js
 */
import React, { Component, forwardRef } from 'react'

/*
传统JS写法
*/
export default class App extends Component {
    mytext = React.createRef()
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        console.log(this.mytext);
                        this.mytext.current.value = ""
                        this.mytext.current.focus()
                    }}
                >获取焦点</button>
                <Child ref={this.mytext}  ></Child>
            </div>
        )
    }
}

//ref透传 多个只有用老方法
const Child = forwardRef((props, ref) => {
    return <div style={{ background: "red" }}>
        <input defaultValue="123" ref={ref} />
    </div>
})