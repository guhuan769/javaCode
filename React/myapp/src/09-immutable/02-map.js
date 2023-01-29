import React, { Component } from 'react'
import { Map } from 'immutable'


/*
    1. npm i immutabel
    2. impport {map} from 'immutable'
*/

var obj = {
    name: "elon",
    age: 100
}

var oldImmuObj = Map(obj)
var newImmuObj = oldImmuObj.set("name", "xiaoming")
console.log(oldImmuObj, newImmuObj)
//1 get获取immutable
console.log(oldImmuObj.get("name"), newImmuObj.get("name"))

// immutable ===>普通对象
console.log(oldImmuObj.toJS(), newImmuObj.toJS())
export default class App extends Component {
    state = {
        info: Map({
            name: "elon",
            age: 100
        })
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        info: this.state.info.set("name", "xiaoming")
                        .set("age","111")

                    })
                    // var old = Map(this.state.info)
                    // var newImmu = old.set("name", "xiaoming").set("age", 111)
                    // this.setState({
                    //     info: newImmu.toJS()
                    // })
                }} >click</button>
                {this.state.info.get("name")}
                --
                {this.state.info.get("age")}
            </div>
        )
    }
}
