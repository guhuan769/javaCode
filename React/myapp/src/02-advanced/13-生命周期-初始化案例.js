import React, { Component } from 'react'
import BetterScroll from 'better-scroll'
/*初始化生命周期*/
export default class App extends Component {
    state = {
        list: ["111", "222", "333", "444",
            "555", "666", "777", "888", "999", "101010"
            , "11", "12"]
    }

    componentWillMount(){
        //查找节点
        //console.log(document.querySelectorAll("li"))
    }

    componentDidMount(){
        console.log(document.querySelectorAll("li"))
        // new BetterScrll
        new BetterScroll("#wrapper")
    }

    render() {
        return (
            <div>
                <div id="wrapper" style={{height:"200px",
                   background:"yellow",overflow:"hidden"}}>
                    <ul>
                        {
                            this.state.list.map(item =>
                                <li key={item}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
