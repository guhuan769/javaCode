//模块化导出方式
import React, { Component } from 'react'

class Child extends Component {
    render() {
       return <div>Child</div>
    }
}

class Navbar extends Component {
    render() {
        return <div>
            <div>我是大野</div>
            <Child></Child>
        </div>
    }
}
//函数式
function Swiper() {
    return <div>Swiper</div>
}

// const Tabbar =() => {
//     return <div>Tabbar</div>
// }
//ES6箭头函数写法 更加提倡得写法
const Tabbar = () => <div>Tabbar</div>

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 下面三个组件属于App得孩子 
                Navbar是否还可以嵌套呢
                */}
                <Navbar>

                </Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}
