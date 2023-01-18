import React, { PureComponent } from 'react'

export default class App extends PureComponent {

    state = {
        myname: "elon snyder",
    }
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.setState({
                            myname: "ELON SNYDER"
                        })
                    }}
                >click</button>
                {this.state.myname}
            </div>
        )
    }

    //(prevprops, prevState)
    //
    //scu快捷键如下方法 性能优化函数
    // shouldComponentUpdate(nextProps, nextState) {
    //     // shouldComponentUpdate(nextProps,nextState){
    //     // 最新的属性 nextProps 新状态 nextState
    //     //老状态 this.state
    //     //shouldComponentUpdate(){ 
    //     //return true;//应该更新
    //     //return false；//阻止更新
    //     //this.state.myname == 老的状态
    //     //if(老的状态 != 新的状态的话){
    //     //if (this.state.myname !== nextState.myname) {
    //     //编程json 对比
    //     if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
    //         return true
    //     }
    //     return false
    // }

    UNSAFE_componentWillUpdate() {
        console.log("UNSAFE_componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
}
