import { fromJS } from 'immutable'
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        //fromJS把复杂的json结构转换成该List 则List 该map则map
        info: fromJS({
            name: "elon",
            location: {
                province: "四川",
                city: "大连"
            },
            favor: ["读书", "看报", "写代码"]
        })
    }
    componentDidMount() {
        console.log(this.state.info)
    }
    render() {
        return (
            <div>
                <h1>个人信息修改页面</h1>
                <button
                    onClick={() => {
                        this.setState({
                            info: this.state.info.setIn(["name"], "xiaoming")
                                .setIn(["location", "city"], "四川成都改名")
                        })
                    }}
                >
                    修改
                </button>
                <div>
                    {this.state.info.get("name")}
                    <br />
                    {
                        this.state.info.get("location").get("province")
                    }
                    -
                    {
                        this.state.info.get("location").get("city")
                    }
                    <br />
                    {
                        this.state.info.get("favor").map
                            ((item, index) =>
                                <li key={item}>{item}
                                    <button key={item}
                                        onClick={() => {
                                            // console.log(index)
                                            // this.setState({
                                            //     info: this.state.info.setIn(["favor", index],
                                            //         index
                                            //         // this.state.info.get("favor")
                                            //         //     .splice(index, 1)
                                            //     )
                                            // })
                                            this.setState({
                                                info: this.state.info.updateIn(
                                                    ["favor"], (list) => list.splice(index, 1)
                                                    //splice(index,1) 从Index开始的1个元素删除
                                                )
                                            })
                                        }}
                                    >
                                        Delete
                                    </button>
                                </li>
                            )
                    }
                </div>
            </div>
        )
    }
}
