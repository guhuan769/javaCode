import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [{
            id: 1,
            Text: "1111"
        },
        {
            id: 2,
            Text: "2222"
        },
        {
            id: 3,
            Text: "3333"
        },
        {
            id: 4,
            Text: "4444"
        }]
    }
    render() {
        var newlist = this.state.list.map((item,index) => <li key={index} >{item.Text}-{index}</li>);
        return (
            <div>
                <ul>
                    {
                        newlist
                    }
                </ul>
            </div>
        )
    }
}

/*
为了列表得服用和重拍，设置key值。
提高性能

理想key,item.id

如果只是展示 就可以设置Index索引值 不涉及列表增加删除重排
*/

/*
    原生JS - map
var list = ["aa","bb"]
var newlist = list.map(item=><li>${list}</li>)//映射
console.log(newlist.join(","))
*/