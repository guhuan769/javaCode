import React, { Component } from 'react'
import BScroll from 'better-scroll'
import PullUp from '@better-scroll/pull-up'

export default class App extends Component {
    state = {
        list: []
    }
    render() {
        return (
            <div>
                <button onClick={() => this.getData()}>click</button>
                <div className="wrapper" style={{height:'100px'
                    ,background:'red',overflow:'hidden'}}>
                    <ul className="content">
                        {
                            this.state.list.map(item =>
                                <li key={item}>{item}</li>
                            )
                        }
                    </ul>
                    {/* <!-- 这里可以放一些其它的 DOM，但不会影响滚动 --> */}
                </div>
            </div>
        )
    }
    getData() {
        var list = [1, 2, 3, 4, 55, 6, 16, 7, 8, 9, 0,]
        
        this.setState({
            list: list
        },()=>{
            console.log(this.state.list)
            console.log(document.querySelectorAll("li"))
            let bs = new BScroll('.wrapper', {
                pullUpLoad: true
              })
        })
    }
}
