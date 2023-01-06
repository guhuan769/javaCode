import React, { Component } from 'react'
import './css/01-index.css' //导入 css模块，webpack的支持

export default class App extends Component {
  render() {
    var myname = "gh"
    var obj = {
        backgroundColor:"yellow",
        fontSize:"50px"
    }
    return (
      <div>
        {10+20}-{myname}

        {/* 受不了此侮辱 表达式写法 */}
        {10>20?"aaa":"bbb"}
        <div style={{background:"red"}}>123456789</div>
        <div style={obj}>123456789</div>
        <div id="active">active</div>
        {
            //推荐行内样式 此处因为在都是独立的一个整体
        }
        <label for="username">用户名:</label>
        <input type="text" id='username'></input>
      </div>
    )
  }
}
