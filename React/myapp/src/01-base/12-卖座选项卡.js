import React, { Component } from 'react'
import './css/02-maizuo.css'
//下面三自定义组件
import Film from './maizuocomponent/Film'
import Cinema from './maizuocomponent/Cinema'
import Center from './maizuocomponent/Center'

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
        }], current: 2
    }
    which()
    {
        switch(this.state.current)
        {
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
                
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li onClick={() => this.handleClick(index)} className={this.state.current === index ? 'active' : ''} key={item.id}>{item.Text}</li>
                        )
                    }
                </ul>
            </div>
        )
    }
    handleClick(index) {
        console.log(index)
        this.setState(
            {
                current: index
            }
        )
    }
}
