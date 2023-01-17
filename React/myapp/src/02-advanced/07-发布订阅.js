import React, { Component } from 'react'

export default class App extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}
//调度中心
var bus = {
    list: [],
    //订阅
    subscribe(callback) {
        console.log(callback)
        this.list.push(callback)
    },
    //发布
    publish(text) {
        //遍历所有的list,将回调函数执行
       // console.log(this.list)

        this.list.forEach(callback => {
            callback && callback(text)
        })
    }
}

//订阅者
bus.subscribe((value) => {
    console.log("111",value)
})
bus.subscribe((value) => {
    console.log("222",value)
})

//发布者
setTimeout(() => {
    bus.publish("男人头看看美女1")
}, 1);

setTimeout(() => {
    bus.publish("男人头看看美女2")
}, 1000);

setTimeout(() => {
    bus.publish("男人头看看美女3")
}, 2000);

//Redux 基于订阅发布