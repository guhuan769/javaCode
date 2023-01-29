/*
 * @Author: Elon Snyder
 * @Date: 2023-01-28 11:36:17
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-01-29 09:35:36
 * @Description: 
 * @FilePath: \React\myapp\src\10-mobx\04-router\App.js
 */
import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './views/components/Tabbar'
import { inject, observer } from 'mobx-react'
import { autorun } from 'mobx'
import store from './mobx/store'

//使用mobx-react 自动监听
//构建一个父组件-高阶 mobx-react
@inject("store")
@observer //这样写该组件才会被observer包裹着
class App extends Component {
    //store.subsribe 订阅

    state = {
        isShow: false
    }

    componentDidMount() {
        // autorun(() => {
        //     this.setState({
        //         isShow: store.isTabbarShow
        //     })
        // })

        // this.setState({
        //     isShow: this.props.store.isTabbarShow
        // })
        console.log("componentDidMount", this.props.store.cityName)
    }
    render() {
        return (
            <div>
                {/* 其他内容 声明式导航 */}
                <MRouter>
                    {this.props.store.isTabbarShow && <Tabbar></Tabbar>}
                </MRouter>
            </div>
        )
    }
}

export default App