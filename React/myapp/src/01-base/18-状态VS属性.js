import React, { Component } from 'react'

//推荐多写无状态

class Child extends Component {
    render() {
        return <div>
            child-{this.props.text}
            <button onClick={()=>{
                //父组件可以随意更改孩子得值 孩子就不能更改父组件传进得值
                //
                this.props.text="33333"
            }}>click-child</button>
        </div>
    }
}

export default class App extends Component {
    state = {
        text: "111111"
    }
    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({text:"2222"})
                }}>RRRR</button>
                <Child text={this.state.text}></Child>
            </div>
        )
    }
}
