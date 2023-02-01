/*
 * @Author: Elon Snyder
 * @Date: 2023-01-31 16:03:16
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-31 18:59:15
 * @Description:
 * @FilePath: \React\myapp-dva\src\routes\App.js
 */
import { connect } from 'dva'
import React, { Component } from 'react'
import Tabbar from '../components/Tabbar'

class App extends Component {
  componentDidMount() {
    // console.log("componentDidMount",this.props)
  }
  render() {
    return (
      <div>
        {this.props.children}
        {this.props.isShow && <Tabbar />}
      </div>
    )
  }
}
//高阶组件包装
export default connect((state) => {
  // console.log(state);
  return {
    a: 1,
    isShow: state.maizuo.isShow
  }
})(App)
