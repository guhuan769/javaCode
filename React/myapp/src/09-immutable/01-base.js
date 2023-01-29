import React, { Component } from 'react'

/*

*/



var myobj = {
    name: "elon",
    arr: [1, 2, 3]
}
var myobj2 = {
    ...myobj
}

myobj2.name = "xiaoming"
myobj.arr.splice(1, 1)
console.log(myobj, myobj2)

var jsonobj = {
    name: "elon",
    arr: [1, 2, 3]
}

var jsonobj2 = JSON.parse(JSON.stringify(jsonobj))
jsonobj2.name = "elon"
jsonobj2.arr.splice(1, 1)

console.log(jsonobj, jsonobj2)

//deepcopy
//递归 深复制 一层一层复制 性能不好 占用内存

export default class App extends Component {
    render() {
        return (
            <div>App1</div>
        )
    }
}
