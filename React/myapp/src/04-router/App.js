import React, { Component } from 'react'
import MRouter from './router/indexRouter'
import Tabbar from './views/components/Tabbar'

export default class App extends Component {
    //store.subsribe 订阅
    render() {
        return (
            <div>
                {/* 其他内容 声明式导航 */}
                <MRouter>
                    <Tabbar></Tabbar>
                </MRouter>
            </div>
        )
    }
}

