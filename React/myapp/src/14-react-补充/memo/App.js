import React, { Component, memo } from 'react'

//防止DIV重复更新 那么就使用memo 那么可以用memo做性能优化
export default class App extends Component {
    state = {
        name: "elon",
        title: "aaaa"
    }
    render() {
        return (
            <div>
                {this.state.name}
                <button
                    onClick={() => {
                        this.setState({
                            name: "xiaoming"
                        })
                    }}
                >click</button>

                <button
                    onClick={() => {
                        this.setState({
                            title: "bbbb"
                        })
                    }}
                >click</button>
                <Child title={this.state.title}></Child>
            </div>
        )
    }
}

const Child = memo((props) => {
    console.log(1111111111111)
    return <div>Child-{props.title}</div>
})

// function Child() {
//     console.log("child-111111");
//     return <div>Child</div>
// }