import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    a = 100;
    //这种vscode没意见 严格模式没意见
    //此处的严格模式了解即可
    myref = React.createRef()
    state = {
        list: [{
            id: 1,
            mytext: "aaa"

        },
        {
            id: 2,
            mytext: "bbb"
        },
        {
            id: 3,
            mytext: "ccc"
        }
        ]
    }
    render() {
        var aa = <div className={this.state.list.length==0?'hidden':''}>暂无数据</div>
        return (
            <div>
                {/*  */}
                {/* <input ref="mytext" /> */}
                <input ref={this.myref} />
                {/* <input ref="mytext2" /> */}
                {/* 事件绑定 声明式 匿名函数 */}
                <button
                    onClick={this.handl.bind(this)}>add2</button>

                <ul>
                    {/* 状态映射... */}
                    {
                        this.state.list.map((item, index) =>
                            <li key={item.id}>
                                {/* {item.mytext} */}
                                {/* 富文本展示 */}
                                <span dangerouslySetInnerHTML={
                                    {
                                        //把这个大对象放在该属性里面
                                        __html:item.mytext
                                    }
                                }></span>
                                {/* <button onClick={this.handleDelClick.bind(this, index)}>del</button> */}
                                <button onClick={() => this.handleDelClick(index)}>del</button>
                            </li>
                        )
                    }
                </ul>
                {/* 方案一 */}
                {/* {this.state.list.length === 0 ? aa : null} */}
                {/* 方案二 */}
                {this.state.list.length ==0 && aa }
            </div>
        )
    }
    handl() {
        console.log("click2", this.myref.current.value);
        //新增数据 不要直接修改状态， 可能会造成不可预期得问题
        // this.state.list.push(this.myref.current.value);

        //引用赋值
        let newlist = this.state.list;
        // newlist.push(this.myref.current.value);
        newlist.push({
            id: Math.random() * 100000000,//生成不同id得函数
            mytext: this.myref.current.value
        });
        this.setState({
            //重新设置新得状态与老得状态进行合并
            list: newlist
        })

        //清空输入框
        this.myref.current.value = "";
    }

    handleDelClick(index) {
        console.log("{del_Click}", index);
        //不要修改原状态 可能会造成不可预期得问题
        let newlist = this.state.list.slice()
        newlist.splice(index, 1)
        this.setState({
            list: newlist
        })
    }
}
