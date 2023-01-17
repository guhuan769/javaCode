import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
        myname: "elon Snyder",
        list: []
    }

    componentDidMount() {
        axios.get("/test.json").then(res => {
            console.log(res.data.data.data.films
            )

            this.setState({
                list: res.data.data.data.films
            })
            //访问
        })
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: "Elon Musk"
                    })
                }}>Click</button>
                <span id="myname"> {this.state.myname}</span>
                <div id="warpper" style={{
                    //overflow:"hidden" 腻出隐藏
                    height: "100px",
                    overflow: "hidden",
                    background: "yellow"
                }}>
                    {
                        <ul>
                            {
                                this.state.list.map(item =>
                                    <li key={item.filmId}>{item.name}</li>
                                )
                            }
                        </ul>
                    }
                </div>
            </div>
        )
    }

    //willupdate不安全
    componentWillUpdate() {
        console.log("componentWillUpdate"
            , document.getElementById("myname").innerHTML)
    }
    //唯一的用处更新完状态
    componentDidUpdate(prevprops, prevState) {
        console.log("componentDidUpdate"
            , document.getElementById("myname").innerHTML)
        //更新后，想要获取dom节点，更新
        console.log("123" + prevState.list)
        if (prevState.list === 0) {
            new BetterScroll("#warpper");
        }
    }
}
