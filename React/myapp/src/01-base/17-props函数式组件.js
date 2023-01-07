/*
函数性属性天生就支持属性写法
*/

import React, { Component } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 类组件 1*/}
        <Navbar title="导航"></Navbar>
        {/* 函数式组件 */}
        <Sidebar bg="#532" width="200px" position="right" ></Sidebar>
      </div>
    )
  }
}
