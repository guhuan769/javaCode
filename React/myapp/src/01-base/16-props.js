import React, { Component } from 'react'
import Navbar from './Navbar'//无路径自动引入index.js

/*
    如何加入默认属性
*/
export default class App extends Component {
  render() {
    //上卖弄父组件传来得一个对象
    var obj = {
        title:"测试",
        leftshow:false
    }
    return (
      <div>
        <div>
            {/* <h2>首页</h2> 此处得title leftshow 为自定义属性 */}
            <Navbar title="首页" leftshow={false} a={299}></Navbar>
        </div>
        <div>
            <h2>列表</h2>
            <Navbar title="列表"></Navbar>
        </div>
        <div>
            <h2>购物车</h2>
            <Navbar title="购物车" ></Navbar>
        </div>

        <Navbar title="首页" leftshow={false} a={299}></Navbar>
        <Navbar {...obj} />
      </div>
    )
  }
}
