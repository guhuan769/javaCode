import React, { Component } from 'react'
import { Map } from 'immutable'

export default class App extends Component {
    state = {
        info: Map({
            name: "elon",
            select: "aa",
            filter: Map({
                text: "",
                up: true,
                down: false
            })
        })
    }

    componentDidMount() {
        console.log(this.state.info.get("filter"))
    }

    render() {
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        info:this.state.info.set("name","xiaoming")
                    })
                }} >click</button>
                {this.state.info.get("name")}
                <Child filter={this.state.info.get("filter")}></Child>
            </div>
        )
    }
}


class Child extends Component {

    //nextProps老属性 nextState老状态
    shouldComponentUpdate(nextProps,nextState){
        if(this.props.filter === nextProps.filter)
        {
            return false
        }
        return true;
    }
    render() {
        return (
            <div>child</div>
        )
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
}

