import React, { Component } from 'react'
import { List } from 'immutable'
var arr = List([1, 2, 3])

var newarr = arr.push(4)//不会影响老的对象结构
var arr3 = newarr.concat([5, 6, 7])
console.log(arr.toJS(), newarr.toJS(), arr3.toJS())

export default class App extends Component {
    state = {
        favor: List(["aaa", "bbb", "ccc"])
    }
    render() {
        return (
            <div>
                {
                    this.state.favor.map(item =>
                        <li key={item}>{item}</li>
                    )
                }
            </div>
        )
    }
}
