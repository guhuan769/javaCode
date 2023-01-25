import React, { Component } from 'react'
import './css/02-maizuo.css'
//下面三自定义组件
import Film from './maizuocomponent2/Film'
import Cinema from './maizuocomponent2/Cinema'
import Center from './maizuocomponent2/Center'
import Tabbaar from './maizuocomponent2/Tabbaar'
import Navbar from './maizuocomponent2/Navbar'
import Tabbaar2 from './maizuocomponent2/Tabbaar2'

/*
    受控就是无状态 不受控就是组件中使用state状态控制不住
*/
export default class App extends Component {
    state = {
        list: [{
            id: 1,
            Text: "电影"
        }, {
            id: 2,
            Text: "影院"
        }, {
            id: 3,
            Text: "我的"
        }],
        current: 0
    }
    which() {
        switch (this.state.current) {
            case 0:
                return <Film></Film>
            case 1:
                return <Cinema></Cinema>
            case 2:
                return <Center></Center>
            default:
                return null;
        }
    }
    render() {
        return (
            <div>
                <Navbar onEvent={
                    (value) => {
                        this.setState({
                            current: value
                        })
                        console.log("Navbar" + value, "告诉Tabbar");
                    }
                } />
                {/* {
                    this.state.current == 0 && <Film></Film>
                }
                {
                    this.state.current == 1 && <Cinema></Cinema>
                }
                
                {
                    this.state.current == 2 && <Center></Center>
                } */}

                {
                    //处理函数 函数表达式表达式
                    this.which()
                }
                {/* Tabbaar2 函数式 Tabbaar class组件 */}
                <Tabbaar2 event={
                    (index) => {
                        this.setState({
                            current: index
                        })
                    }
                } current={this.state.current} list={this.state.list} ></Tabbaar2>
            </div>
        )
    }
}
