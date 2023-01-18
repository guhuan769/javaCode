
import React, { Component } from 'react'

class Child extends Component {
    state = {
        title: ""
    }
    render() {
        return (
            <div>
                child-{this.state.title}
            </div>
        )
    }

    //这个生命周期写在父组件是没有意义的
    componentWillReceiveProps(nextProps) {
        //最先获得父组件传来的属性，可以利用属性进行
        //ajax/逻辑处理。
        //把属性转化成孩子自己的状态
        console
            .log("AA componentWillReceiveProps"
                , nextProps.text
                , this.props.text
            )
            this.setState({
                title: nextProps.text+"elon snyder"
            })
    }
}

export default class App extends Component {
   
    state = {
        text: "1111111"
    }

    render() {
        return (
            <div>
                {this.state.text}
                <button
                    onClick={() => {
                        this.setState({
                            text: "22222"
                        })
                    }}
                >click</button>
                <Child text={this.state.text} />
            </div>
        )
    }
}
