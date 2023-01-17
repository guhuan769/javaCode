import React, { Children, Component } from 'react'
/*
    1.为了复用
    2.一定成都减少父子通信
*/
class Child extends Component {
    render() {
        return (
            <div>
                child
                {/* 插槽 vue slot  此处可以使用坐标 */}
                {this.props.children[0]}
                {this.props.children[1]}
                {this.props.children[2]}
            </div>
        )
    }
}

class Swiper extends Component {
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                {/* 此处还需要考虑生命周期 */}
                <Swiper>
                    <div>111111</div>
                    <div>2</div>
                </Swiper>
                {/* 依然可以读取父组件数据 */}
                {/* <Child>
                   
                    <div>111111</div>
                    <div>2</div>
                    <div>3</div>
                </Child> */}
            </div>
        )
    }
}

/*
    1. 为了复用。
    2. 一定成都减少父子通信。
*/

