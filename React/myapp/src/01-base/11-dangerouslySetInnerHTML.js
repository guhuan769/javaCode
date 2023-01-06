
import React, { Component } from 'react'

export default class App extends Component {
    state = {
        myhtml: '此处可以写HTML'
    }
    render() {
        return (
            <div> <span dangerouslySetInnerHTML={
                {
                    //把这个大对象放在该属性里面
                    __html: item.mytext
                }
            }></span></div>

        )
    }
}
