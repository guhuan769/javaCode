import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './views/components/Tabbar'
import store from './redux/store'

export default class App extends Component {

    state = {
        isShow: store.getState().TabbarReducer.get("show")
    }

    //store.subsribe 订阅

    componentDidMount() {
        store.subscribe(() => {
            //此处需要主动的访问store的状态
            //redux中需要自己获取 状态
            //console.log("app 中订阅", store.getState())
            this.setState({
                isShow: store.getState().TabbarReducer.get("show")
            })
        })
    }
    render() {
        return (
            <div>
                {/* 其他内容 声明式导航 */}
                <MRouter>
                    {this.state.isShow && <Tabbar></Tabbar>}
                </MRouter>
            </div>
        )
    }
}

