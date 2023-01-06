import React, { Component } from 'react'

export default class App extends Component {
    //state是固定的
    state = {
        mytext: "收藏",
        myShow: true//自定义属性
    }
    render() {
        //var text = "收藏";
        return (
            <div>
                <h1>Wellcome React！</h1>
                <button onClick={() => {
                    //this.state.mytext = "取消收藏"  //报错不用直接修改
                    //唯一方法更改状态
                    this.setState({
                        // mytext:"取消收藏",
                        myShow: !this.state.myShow
                    });
                    if (this.state.myShow) {
                        console.log("收藏逻辑")
                    }
                    else {
                        console.log("取消收藏逻辑")
                    }
                }}>{this.state.myShow ? "收藏" : "取消收藏"}</button>
            </div>
        )
    }
}
