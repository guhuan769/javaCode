import React, { Component } from 'react'
import './css/04-clear.css'

export default class App extends Component {

    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    myref = React.createRef()

    getSnapshotBeforeUpdate() {
        //获取容器高度
        console.log(this.myref.current.scrollHeight,
            this.myref.current.scrollWidth)
        return this.myref.current.scrollHeight
    }
    componentDidUpdate(prevProps, prevState, valule) {
        console.log("现在的=" + this.myref.current.scrollHeight)

        this.myref.current.scrollTop +=
            this.myref.current.scrollHeight - valule
    }
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.setState({
                            //es6 将新邮件与老邮件合并也可以理解数组合并
                            list: [...[11, 22, 33, 44, 55, 66, 77, 88, 99, 1010],
                            ...this.state.list]
                        })
                    }}
                >来邮件</button>
                <h1>邮箱应用</h1>
                <div
                    style={{
                        height: "200px"
                        , overflow: "auto"

                    }}
                    ref={this.myref}
                >
                    <ul>
                        {
                            this.state.list.map(item => (
                                <li
                                    style={{
                                        background: "yellow",
                                        height: "100px"
                                    }}
                                    key={item}>{item}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>

        )
    }
}
